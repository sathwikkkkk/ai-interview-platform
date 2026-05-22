import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: 'Voice Practice',
    desc: 'Answer aloud and build confidence with realistic interview conversation.'
  },
  {
    title: 'AI Questions',
    desc: 'Get role-focused prompts for your chosen position, level, and difficulty.'
  },
  {
    title: 'Performance Reports',
    desc: 'Review scores, strengths, improvement areas, and next practice steps.'
  },
  {
    title: 'Progress History',
    desc: 'Keep your sessions in one place and revisit reports whenever you need them.'
  }
];

const steps = [
  { num: '01', title: 'Create Profile', desc: 'Sign up and keep your practice sessions saved.' },
  { num: '02', title: 'Choose Role', desc: 'Set position, experience level, and difficulty.' },
  { num: '03', title: 'Practice Live', desc: 'Speak your answers and continue the conversation.' },
  { num: '04', title: 'Review Report', desc: 'Study your analysis after the interview is complete.' }
];

function Home() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="home-page">
      <style>{homeStyles}</style>

      <nav className={`home-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <button className="brand-button" type="button" onClick={() => navigate('/home')}>
            <span>AI</span>
            Interviewer
          </button>

          <div className="nav-actions">
            <button className="button secondary" onClick={() => navigate('/')}>
              Login
            </button>
            <button className="button primary" onClick={() => navigate('/signup')}>
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-scene" aria-hidden="true">
          <div className="interview-window">
            <div className="window-header">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="window-line wide"></div>
            <div className="window-line"></div>
            <div className="window-line short"></div>
            <div className="score-mini">
              <strong>86</strong>
              <span>readiness</span>
            </div>
          </div>

          <div className="character-stage" aria-label="Smiling AI interviewer character" role="img">
            <div className="character-body">
              <div className="character-neck"></div>
              <div className="character-tie"></div>
            </div>
            <div className="character-head">
              <div className="character-hair"></div>
              <div className="character-ears">
                <span></span>
                <span></span>
              </div>
              <div className="character-eyes">
                <span></span>
                <span></span>
              </div>
              <div className="character-nose"></div>
              <div className="character-mouth"></div>
              <div className="character-cheeks">
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="character-badge">AI</div>
          </div>
        </div>

        <div className="hero-content">
          <span className="eyebrow">AI Interview Practice</span>
          <h1>Practice interviews with an AI coach.</h1>
          <p>
            Configure a role, speak your answers, and get a clear performance report
            after each interview so your next attempt gets sharper.
          </p>

          <div className="hero-actions">
            <button className="button primary large" onClick={() => navigate('/signup')}>
              Get Started
            </button>
            <button className="button ghost large" onClick={() => navigate('/')}>
              Sign In
            </button>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <span className="eyebrow dark">Core Features</span>
          <h2>Everything you need to practice with structure.</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <article className="feature-card" style={{ animationDelay: `${index * 90}ms` }} key={feature.title}>
              <div className="feature-number">{index + 1}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section">
        <div className="section-heading">
          <span className="eyebrow dark">Workflow</span>
          <h2>From setup to analysis in four steps.</h2>
        </div>

        <div className="step-grid">
          {steps.map((step, index) => (
            <article className="step-card" style={{ animationDelay: `${index * 110}ms` }} key={step.num}>
              <span>{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <span className="eyebrow">Ready to Practice</span>
          <h2>Start a focused interview session today.</h2>
        </div>
        <button className="button primary large" onClick={() => navigate('/signup')}>
          Create Account
        </button>
      </section>

      <footer className="home-footer">
        <p>AI Interviewer</p>
        <span>Practice, review, improve.</span>
      </footer>
    </main>
  );
}

const homeStyles = `
  .home-page {
    min-height: 100vh;
    color: #172033;
    background: linear-gradient(180deg, #eef5ff 0%, #f8fafc 50%, #edf2f7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden;
  }

  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    padding: 16px 24px;
    background: rgba(255, 255, 255, 0.96);
    border-bottom: 1px solid rgba(148, 163, 184, 0.22);
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.1);
    backdrop-filter: blur(14px);
    transition: background 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  }

  .home-nav.scrolled {
    background: #ffffff;
    border-bottom-color: rgba(148, 163, 184, 0.3);
    box-shadow: 0 16px 38px rgba(15, 23, 42, 0.13);
  }

  .nav-inner {
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .brand-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: 0;
    background: transparent;
    color: #0f172a;
    cursor: pointer;
    font-size: 20px;
    font-weight: 900;
    text-shadow: none;
  }

  .brand-button span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 12px;
    background: #2563eb;
    color: #ffffff;
    font-size: 15px;
    box-shadow: 0 12px 26px rgba(37, 99, 235, 0.24);
  }

  .nav-actions,
  .hero-actions {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
  }

  .button {
    min-height: 46px;
    border: 0;
    border-radius: 13px;
    padding: 12px 18px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 900;
    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }

  .button:hover {
    transform: translateY(-2px);
  }

  .button.primary {
    background: #2563eb;
    color: #ffffff;
    box-shadow: 0 16px 34px rgba(37, 99, 235, 0.28);
  }

  .button.secondary {
    background: #ffffff;
    color: #2563eb;
    border: 1px solid rgba(37, 99, 235, 0.18);
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
  }

  .home-nav .button.primary {
    background: #1d4ed8;
    color: #ffffff;
    box-shadow: 0 12px 28px rgba(37, 99, 235, 0.32);
  }

  .home-nav .button.secondary {
    background: #ffffff;
    color: #1d4ed8;
    border: 1px solid rgba(37, 99, 235, 0.22);
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
  }

  .button.ghost {
    background: rgba(255, 255, 255, 0.14);
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.32);
  }

  .button.large {
    min-height: 54px;
    padding: 15px 24px;
    font-size: 16px;
  }

  .hero-section {
    position: relative;
    min-height: 88vh;
    display: flex;
    align-items: center;
    margin-bottom: 36px;
    padding: 128px 28px 54px;
    color: #ffffff;
    background: linear-gradient(135deg, #172033 0%, #2563eb 58%, #14b8a6 100%);
    overflow: hidden;
  }

  .hero-section::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100px;
    background: linear-gradient(180deg, transparent, rgba(238, 245, 255, 0.95));
  }

  .hero-content {
    position: relative;
    z-index: 2;
    width: min(1180px, 100%);
    margin: 0 auto;
    animation: fadeUp 760ms ease both;
  }

  .eyebrow {
    display: inline-flex;
    width: fit-content;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.92);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .eyebrow.dark {
    background: #e7f0ff;
    color: #2563eb;
  }

  .hero-content h1 {
    max-width: 700px;
    margin: 18px 0 0;
    font-size: clamp(44px, 8vw, 86px);
    line-height: 0.96;
    letter-spacing: 0;
  }

  .hero-content p {
    max-width: 610px;
    margin: 22px 0 28px;
    color: rgba(255, 255, 255, 0.84);
    font-size: 17px;
    line-height: 1.8;
  }

  .hero-scene {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
  }

  .interview-window {
    position: absolute;
    right: max(28px, calc((100vw - 1180px) / 2));
    top: 130px;
    width: min(430px, 36vw);
    min-width: 320px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.13);
    box-shadow: 0 28px 60px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(14px);
    animation: slideIn 780ms 160ms ease both;
  }

  .window-header {
    display: flex;
    gap: 8px;
    margin-bottom: 22px;
  }

  .window-header span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.72);
  }

  .window-line {
    height: 13px;
    width: 72%;
    margin-bottom: 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.22);
    animation: shimmer 1.8s ease-in-out infinite;
  }

  .window-line.wide {
    width: 92%;
  }

  .window-line.short {
    width: 48%;
  }

  .score-mini {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 26px;
    padding: 14px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.16);
  }

  .score-mini strong {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 18px;
    background: #ffffff;
    color: #2563eb;
    font-size: 24px;
  }

  .score-mini span {
    color: rgba(255, 255, 255, 0.82);
    font-weight: 900;
    text-transform: uppercase;
  }

  .character-stage {
    position: absolute;
    right: max(62px, calc((100vw - 1160px) / 2 + 40px));
    bottom: 42px;
    width: 330px;
    height: 360px;
    --stage-scale: 1;
    animation: floatStage 3.5s ease-in-out infinite;
  }

  .character-head {
    position: absolute;
    top: 10px;
    left: 54px;
    z-index: 3;
    width: 190px;
    height: 205px;
    border: 6px solid rgba(255, 255, 255, 0.8);
    border-radius: 48% 48% 44% 44%;
    background: #ffd6b0;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.22);
  }

  .character-hair {
    position: absolute;
    top: -18px;
    left: 20px;
    width: 150px;
    height: 64px;
    border-radius: 70px 70px 32px 32px;
    background: #27324a;
  }

  .character-ears {
    position: absolute;
    top: 76px;
    left: -26px;
    right: -26px;
    z-index: -1;
    display: flex;
    justify-content: space-between;
  }

  .character-ears span {
    width: 38px;
    height: 50px;
    border: 5px solid rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    background: #ffc89e;
  }

  .character-eyes {
    position: absolute;
    top: 82px;
    left: 48px;
    right: 48px;
    display: flex;
    justify-content: space-between;
  }

  .character-eyes span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #1f2a44;
    box-shadow: inset 5px 5px 0 rgba(255, 255, 255, 0.45);
  }

  .character-nose {
    position: absolute;
    top: 110px;
    left: 50%;
    width: 16px;
    height: 30px;
    border-right: 4px solid #d18a67;
    border-bottom: 4px solid #d18a67;
    border-radius: 12px;
    transform: translateX(-50%) rotate(10deg);
  }

  .character-mouth {
    position: absolute;
    top: 148px;
    left: 50%;
    width: 68px;
    height: 30px;
    border-bottom: 7px solid #8f3d4b;
    border-radius: 0 0 80px 80px;
    transform: translateX(-50%);
  }

  .character-cheeks {
    position: absolute;
    top: 134px;
    left: 38px;
    right: 38px;
    display: flex;
    justify-content: space-between;
  }

  .character-cheeks span {
    width: 25px;
    height: 13px;
    border-radius: 50%;
    background: rgba(243, 112, 121, 0.28);
  }

  .character-body {
    position: absolute;
    left: 24px;
    bottom: 0;
    width: 270px;
    height: 190px;
    border: 6px solid rgba(255, 255, 255, 0.16);
    border-radius: 80px 80px 38px 38px;
    background: #253858;
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.22);
    overflow: hidden;
  }

  .character-neck {
    position: absolute;
    top: 0;
    left: 50%;
    width: 68px;
    height: 58px;
    border-radius: 0 0 30px 30px;
    background: #ffc89e;
    transform: translateX(-50%);
  }

  .character-tie {
    position: absolute;
    top: 58px;
    left: 50%;
    width: 40px;
    height: 108px;
    background: linear-gradient(180deg, #43d9ad 0%, #2da7d7 100%);
    clip-path: polygon(50% 0, 100% 28%, 72% 100%, 28% 100%, 0 28%);
    transform: translateX(-50%);
  }

  .character-badge {
    position: absolute;
    right: 12px;
    bottom: 92px;
    z-index: 4;
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #ffffff;
    color: #2563eb;
    font-weight: 900;
    box-shadow: 0 12px 26px rgba(31, 42, 68, 0.25);
  }

  .feature-section,
  .workflow-section,
  .cta-band {
    max-width: 1180px;
    margin: 0 auto;
    padding: 40px 28px;
  }

  .section-heading {
    max-width: 720px;
    margin-bottom: 24px;
    animation: fadeUp 720ms ease both;
  }

  .section-heading h2 {
    margin: 14px 0 0;
    color: #172033;
    font-size: clamp(30px, 5vw, 48px);
    line-height: 1.05;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
  }

  .feature-card,
  .step-card {
    padding: 24px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
    animation: fadeUp 640ms ease both;
    transition: transform 200ms ease, box-shadow 200ms ease;
  }

  .feature-card:hover,
  .step-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 54px rgba(15, 23, 42, 0.12);
  }

  .feature-number {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 28px;
    border-radius: 14px;
    background: #e7f0ff;
    color: #2563eb;
    font-weight: 900;
  }

  .feature-card h3,
  .step-card h3 {
    margin: 0 0 10px;
    color: #172033;
    font-size: 21px;
  }

  .feature-card p,
  .step-card p {
    margin: 0;
    color: #64748b;
    line-height: 1.7;
  }

  .workflow-section {
    padding-top: 28px;
  }

  .step-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
  }

  .step-card span {
    display: inline-flex;
    margin-bottom: 26px;
    color: #2563eb;
    font-size: 14px;
    font-weight: 900;
  }

  .cta-band {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 22px;
    margin-top: 38px;
    margin-bottom: 44px;
    border-radius: 26px;
    color: #ffffff;
    background: linear-gradient(135deg, #172033 0%, #2563eb 60%, #14b8a6 100%);
    box-shadow: 0 24px 60px rgba(30, 41, 59, 0.18);
    animation: fadeUp 720ms ease both;
  }

  .cta-band h2 {
    max-width: 680px;
    margin: 14px 0 0;
    font-size: clamp(28px, 5vw, 46px);
    line-height: 1.05;
  }

  .home-footer {
    max-width: 1180px;
    margin: 0 auto;
    padding: 28px;
    display: flex;
    justify-content: space-between;
    gap: 18px;
    color: #64748b;
  }

  .home-footer p {
    margin: 0;
    color: #172033;
    font-weight: 900;
  }

  .home-footer span {
    font-weight: 700;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(28px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-12px);
    }
  }

  @keyframes floatStage {
    0%,
    100% {
      transform: translateY(0) scale(var(--stage-scale));
    }
    50% {
      transform: translateY(-12px) scale(var(--stage-scale));
    }
  }

  @keyframes shimmer {
    0%,
    100% {
      opacity: 0.68;
    }
    50% {
      opacity: 1;
    }
  }

  @media (max-width: 980px) {
    .hero-section {
      min-height: auto;
      padding-top: 120px;
    }

    .hero-content {
      padding-bottom: 320px;
    }

    .interview-window {
      left: 28px;
      right: auto;
      top: auto;
      bottom: 64px;
      width: min(420px, calc(100vw - 56px));
      min-width: 0;
    }

    .character-stage {
      right: 18px;
      bottom: 38px;
      --stage-scale: 0.82;
      transform-origin: right bottom;
    }

    .feature-grid,
    .step-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .home-nav {
      padding: 12px;
    }

    .cta-band,
    .home-footer {
      align-items: stretch;
      flex-direction: column;
    }

    .nav-inner {
      gap: 10px;
    }

    .brand-button {
      gap: 7px;
      font-size: 16px;
    }

    .brand-button span {
      width: 34px;
      height: 34px;
      border-radius: 11px;
      font-size: 13px;
    }

    .home-nav .button {
      min-height: 40px;
      padding: 9px 11px;
      font-size: 13px;
    }

    .nav-actions {
      gap: 8px;
    }

    .hero-actions .button,
    .cta-band .button {
      width: 100%;
    }

    .hero-section {
      padding: 112px 16px 42px;
    }

    .hero-content {
      padding-bottom: 300px;
    }

    .hero-actions {
      width: 100%;
    }

    .character-stage {
      right: -42px;
      bottom: 38px;
      --stage-scale: 0.7;
    }

    .interview-window {
      left: 16px;
      bottom: 54px;
      width: calc(100vw - 32px);
      padding: 16px;
    }

    .feature-section,
    .workflow-section,
    .cta-band {
      padding: 30px 16px;
    }

    .feature-grid,
    .step-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default Home;
