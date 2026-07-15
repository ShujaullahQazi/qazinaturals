import styles from './Benefits.module.css';

const benefits = [
  {
    title: 'High curcumin',
    desc: 'Natural curcumin content jo daily cooking aur health routines ke liye useful hai.',
  },
  {
    title: 'Joron ka support',
    desc: 'Haldi ka traditional use joron aur body comfort ke liye known hai.',
  },
  {
    title: 'Immunity routine',
    desc: 'Rozana khane mein thodi si khalis haldi immunity habits ka hissa ban sakti hai.',
  },
  {
    title: 'Haldi doodh',
    desc: 'Raat ko doodh mein halka sa scoop. simple, warm, ghar jaisa nuskha.',
  },
  {
    title: 'Skin rituals',
    desc: 'Mask ya ubtan mein peesi hui asli haldi ka rang aur texture clear hota hai.',
  },
];

export default function Benefits() {
  return (
    <section className={`section ${styles.section}`} id="benefits">
      <div className="section-inner">
        <p className="section-kicker">Faiday</p>
        <h2 className="section-title">Haldi ke asli faiday</h2>
        <p className="section-lead">
          Qudrat ka spice. peesi hui khalis haldi kitchen aur daily routines dono ke liye.
        </p>
        <div className={styles.list}>
          {benefits.map((item) => (
            <article key={item.title} className={styles.item}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
