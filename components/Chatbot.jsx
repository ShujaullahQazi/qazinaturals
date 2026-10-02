'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';
import ReactMarkdown from 'react-markdown';
import { WHATSAPP_BASE_URL } from '@/lib/constants';
import styles from './Chatbot.module.css';

const welcomeMessage = {
  role: 'assistant',
  content: `Assalam-o-Alaikum! Qazi Naturals haldi, prices, delivery ya order ke baray mein poochiye.\n\n[WhatsApp par order karein](${WHATSAPP_BASE_URL})`,
};

const CHAT_SESSION_KEY = 'qn-chat-session-id';

function getOrCreateSessionId() {
  try {
    const existingSessionId =
      sessionStorage.getItem(CHAT_SESSION_KEY);

    if (existingSessionId) {
      return existingSessionId;
    }

    const newSessionId = crypto.randomUUID();

    sessionStorage.setItem(
      CHAT_SESSION_KEY,
      newSessionId
    );

    return newSessionId;
  } catch {
    return crypto.randomUUID();
  }
}

function safeMarkdownUrl(url) {
  if (
    url.startsWith('/') ||
    url.startsWith(WHATSAPP_BASE_URL) ||
    url.startsWith('mailto:')
  ) {
    return url;
  }

  return '';
}

function AssistantIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5.75 5.5h8.5A3.75 3.75 0 0 1 18 9.25v4.5a3.75 3.75 0 0 1-3.75 3.75H10l-3.8 2.25.65-2.75A3.75 3.75 0 0 1 2 13.75v-4.5A3.75 3.75 0 0 1 5.75 5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m17.8 3 .38 1.02c.2.54.63.97 1.17 1.17l1.02.38-1.02.38c-.54.2-.97.63-1.17 1.17l-.38 1.02-.38-1.02a1.9 1.9 0 0 0-1.17-1.17l-1.02-.38 1.02-.38a1.9 1.9 0 0 0 1.17-1.17L17.8 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    welcomeMessage,
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

const inputRef = useRef(null);
const messagesEndRef = useRef(null);
const sessionIdRef = useRef(null);

useEffect(() => {
  sessionIdRef.current = getOrCreateSessionId();
}, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    messagesEndRef.current?.scrollIntoView({
      behavior: loading ? 'auto' : 'smooth',
    });
  }, [messages, loading, open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => cancelAnimationFrame(frame);
  }, [open, loading]);

  useEffect(() => {
    const textarea = inputRef.current;

    if (!textarea) {
      return;
    }

    textarea.style.height = 'auto';

    const maximumHeight = 112;
    const nextHeight = Math.min(
      textarea.scrollHeight,
      maximumHeight
    );

    textarea.style.height = `${nextHeight}px`;
    textarea.style.overflowY =
      textarea.scrollHeight > maximumHeight
        ? 'auto'
        : 'hidden';
  }, [input]);

  async function handleSubmit(event) {
    event.preventDefault();

    const content = input.trim();

    if (!content || loading) {
      return;
    }

    const userMessage = {
      role: 'user',
      content,
    };

    const conversation = [
      ...messages,
      userMessage,
    ].slice(-10);

    setMessages(conversation);
    setInput('');
    setLoading(true);

    const sessionId =
  sessionIdRef.current || getOrCreateSessionId();

sessionIdRef.current = sessionId;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  sessionId,
  messages: conversation,
}),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);

        throw new Error(
          data?.error || 'Chat request failed.'
        );
      }

      if (!response.body) {
        throw new Error('Streaming is not supported.');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let reply = '';

      setMessages([
        ...conversation,
        {
          role: 'assistant',
          content: '',
        },
      ]);

      while (true) {
        const { value, done } = await reader.read();

        if (done) {
          break;
        }

        reply += decoder.decode(value, {
          stream: true,
        });

        setMessages([
          ...conversation,
          {
            role: 'assistant',
            content: reply,
          },
        ]);
      }

      reply += decoder.decode();

      if (!reply.trim()) {
        throw new Error(
          'Groq returned an empty response.'
        );
      }

      setMessages([
        ...conversation,
        {
          role: 'assistant',
          content: reply,
        },
      ]);
    } catch (error) {
      setMessages([
        ...conversation,
        {
          role: 'assistant',
          content:
            error.message ||
            'Chat abhi available nahi hai. Dobara try karein.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(event) {
    if (
      event.key === 'Enter' &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  }

  return (
    <>
      {open && (
        <section
          id="qazi-chat-panel"
          className={styles.panel}
          role="dialog"
          aria-modal="false"
          aria-labelledby="chatbot-title"
        >
          <header className={styles.header}>
            <div className={styles.identity}>
              <span className={styles.headerIcon}>
                <AssistantIcon />
              </span>

              <span className={styles.headerText}>
                <strong id="chatbot-title">
                  Qazi Assistant
                </strong>
                <span>Haldi aur orders mein madad</span>
              </span>
            </div>

            <button
              type="button"
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </header>

          <div
            className={styles.messages}
            aria-live="polite"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={styles.message}
                data-role={message.role}
              >
                {message.role === 'assistant' ? (
                  <ReactMarkdown
                    urlTransform={safeMarkdownUrl}
                    components={{
                      a: ({ node: _node, ...props }) => (
                        <a
                          {...props}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      ),
                      img: () => null,
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                ) : (
                  message.content
                )}
              </div>
            ))}

            {loading &&
              messages.at(-1)?.role === 'user' && (
                <div
                  className={`${styles.message} ${styles.typing}`}
                  data-role="assistant"
                  aria-label="Assistant is typing"
                >
                  <span />
                  <span />
                  <span />
                </div>
              )}

            <div ref={messagesEndRef} />
          </div>

          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <label
              className={styles.srOnly}
              htmlFor="chatbot-message"
            >
              Your message
            </label>

            <textarea
              ref={inputRef}
              id="chatbot-message"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={handleKeyDown}
              rows={1}
              maxLength={500}
              placeholder="Apna sawal likhein…"
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              Send
            </button>
          </form>

          <div className={styles.notice}>
  <span>Enter se send · Shift+Enter se new line. </span>
  <span>
    Chats may be reviewed to improve Qazi Assistant.
  </span>
</div>
        </section>
      )}

      <button
        type="button"
        className={styles.launcher}
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="qazi-chat-panel"
        aria-label={
          open
            ? 'Close Qazi Assistant'
            : 'Open Qazi Assistant'
        }
      >
        {open ? (
          <span className={styles.closeGlyph}>
            ×
          </span>
        ) : (
          <>
            <span className={styles.launcherIcon}>
              <AssistantIcon />
            </span>

            <span className={styles.launcherLabel}>
              Ask Qazi
            </span>

            <span
              className={styles.statusDot}
              aria-hidden="true"
            />
          </>
        )}
      </button>
    </>
  );
}