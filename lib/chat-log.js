import 'server-only';
import { neon } from '@neondatabase/serverless';

const MAX_LOG_TEXT_LENGTH = 4000;

let sqlClient;

function getSqlClient() {
  const databaseUrl =
    process.env.qn_DATABASE_URL ||
    process.env.DATABASE_URL;

  if (!databaseUrl) {
    return null;
  }

  if (!sqlClient) {
    sqlClient = neon(databaseUrl);
  }

  return sqlClient;
}

export async function saveChatInteraction({
  sessionId,
  userMessage,
  assistantResponse,
  model,
  status = 'success',
  latencyMs,
}) {
  const sql = getSqlClient();

  if (!sql) {
    console.warn(
      'Chat logging skipped: database URL is missing.'
    );

    return false;
  }

  const validStatus = [
    'success',
    'refused',
    'error',
  ].includes(status)
    ? status
    : 'error';

  await sql`
    INSERT INTO chatbot_interactions (
      session_id,
      user_message,
      assistant_response,
      model,
      status,
      latency_ms
    )
    VALUES (
      ${sessionId}::uuid,
      ${String(userMessage).slice(0, MAX_LOG_TEXT_LENGTH)},
      ${String(assistantResponse).slice(0, MAX_LOG_TEXT_LENGTH)},
      ${String(model).slice(0, 100)},
      ${validStatus},
      ${Math.max(0, Number(latencyMs) || 0)}
    )
  `;

  return true;
}