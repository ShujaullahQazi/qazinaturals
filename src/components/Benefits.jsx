import './Benefits.css';

const benefits = [
    {
        icon: '💪',
        title: 'High Curcumin',
        desc: 'Zyada curcumin content jo sehat ke liye bohat faidemand hai.',
    },
    {
        icon: '🦴',
        title: 'Joron Ka Dard',
        desc: 'Haldi ka istemaal joron ke dard mein kaafi madad karta hai.',
    },
    {
        icon: '🛡️',
        title: 'Immunity Booster',
        desc: 'Qudrati taur par immunity mazboot karne ka behtareen zariya.',
    },
    {
        icon: '🥛',
        title: 'Haldi Doodh',
        desc: 'Raat ko haldi doodh sehat ke liye sab se acha nuskha hai.',
    },
    {
        icon: '✨',
        title: 'Skin Glow',
        desc: 'Chehra chamkane ke liye haldi ka istemaal sadion purana hai.',
    },
];

export default function Benefits() {
    return (
        <section className="benefits-section" id="benefits">
            <div className="section-header">
                <p className="section-label">Faiday</p>
                <h2 className="section-title">Haldi Ke Faiday</h2>
                <p className="section-subtitle" style={{ margin: '0 auto' }}>
                    Qudrat ka anmol tohfa — haldi ke be-shumar faiday.
                </p>
            </div>

            <div className="benefits-grid">
                {benefits.map((b, i) => (
                    <div className="benefit-card" key={i}>
                        <span className="benefit-icon">{b.icon}</span>
                        <h3 className="benefit-title">{b.title}</h3>
                        <p className="benefit-desc">{b.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
