import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post(`${API_URL}/api/signup`, formData);
      setSuccess('Account created. Redirecting to login...');
      setTimeout(() => navigate('/'), 1400);
    } catch (error) {
      setError(error.response?.data?.message || 'Error signing up');
      setIsLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <style>{authStyles}</style>

      <section className="auth-shell signup-shell">
        <div className="auth-visual">
          <button className="ghost-link" type="button" onClick={() => navigate('/home')}>
            Back to Home
          </button>

          <div className="brand-mark">AI</div>
          <span className="eyebrow">New Account</span>
          <h1>Build your practice profile.</h1>
          <p>
            Create an account and start saving interview sessions, transcripts, and performance reports.
          </p>

          <div className="signal-card">
            <div>
              <span>Workspace</span>
              <strong>Ready to Create</strong>
            </div>
            <div className="pulse-dot"></div>
          </div>
        </div>

        <div className="auth-card">
          <div className="form-heading">
            <span className="eyebrow dark">Register</span>
            <h2>Create account</h2>
            <p>Enter your details to set up your interview workspace.</p>
          </div>

          {error && <div className="message error">{error}</div>}
          {success && <div className="message success">{success}</div>}

          <form onSubmit={handleSubmit}>
            <div className="name-grid">
              <label className="field">
                <span>First Name</span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="field">
                <span>Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label className="field">
              <span>Email Address</span>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="field">
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>

            <button className="primary-button" type="submit" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <p className="switch-copy">
            Already registered? <Link to="/">Sign in</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

const authStyles = `
  .auth-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 28px;
    color: #172033;
    background:
      radial-gradient(circle at 15% 10%, rgba(20, 184, 166, 0.2), transparent 28%),
      radial-gradient(circle at 85% 18%, rgba(37, 99, 235, 0.18), transparent 30%),
      linear-gradient(180deg, #eef5ff 0%, #f7fafc 55%, #edf2f7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .auth-shell {
    width: min(1040px, 100%);
    display: grid;
    grid-template-columns: minmax(0, 1fr) 500px;
    border-radius: 26px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.86);
    box-shadow: 0 26px 70px rgba(15, 23, 42, 0.16);
    animation: fadeUp 680ms ease both;
  }

  .auth-visual {
    position: relative;
    min-height: 610px;
    padding: 36px;
    color: #ffffff;
    background:
      linear-gradient(135deg, rgba(23, 32, 51, 0.98), rgba(37, 99, 235, 0.92) 58%, rgba(20, 184, 166, 0.92));
    overflow: hidden;
  }

  .auth-visual::after {
    content: "";
    position: absolute;
    width: 330px;
    height: 330px;
    right: -140px;
    bottom: -130px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.13);
    animation: slowPulse 4s ease-in-out infinite;
  }

  .ghost-link {
    position: relative;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.34);
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
    border-radius: 999px;
    padding: 10px 14px;
    cursor: pointer;
    font-weight: 800;
    transition: transform 180ms ease, background 180ms ease;
  }

  .ghost-link:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.18);
  }

  .brand-mark {
    position: relative;
    z-index: 1;
    width: 88px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 76px;
    border-radius: 28px;
    background: #ffffff;
    color: #2563eb;
    font-size: 32px;
    font-weight: 900;
    box-shadow: 0 22px 42px rgba(0, 0, 0, 0.24);
    animation: float 3s ease-in-out infinite;
  }

  .eyebrow {
    position: relative;
    z-index: 1;
    display: inline-flex;
    width: fit-content;
    margin-top: 34px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.9);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .eyebrow.dark {
    margin-top: 0;
    background: #e7f0ff;
    color: #2563eb;
  }

  .auth-visual h1 {
    position: relative;
    z-index: 1;
    max-width: 430px;
    margin: 18px 0 0;
    font-size: clamp(38px, 6vw, 64px);
    line-height: 1;
    letter-spacing: 0;
  }

  .auth-visual p {
    position: relative;
    z-index: 1;
    max-width: 430px;
    margin: 18px 0 0;
    color: rgba(255, 255, 255, 0.84);
    line-height: 1.7;
  }

  .signal-card {
    position: absolute;
    z-index: 1;
    left: 36px;
    right: 36px;
    bottom: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
  }

  .signal-card span {
    display: block;
    margin-bottom: 6px;
    color: rgba(255, 255, 255, 0.72);
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .signal-card strong {
    font-size: 18px;
  }

  .pulse-dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #14b8a6;
    box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.54);
    animation: pulse 1.8s ease-in-out infinite;
  }

  .auth-card {
    padding: 42px;
    background: rgba(255, 255, 255, 0.96);
  }

  .form-heading {
    margin-bottom: 24px;
    animation: fadeUp 720ms 120ms ease both;
  }

  .form-heading h2 {
    margin: 16px 0 8px;
    color: #172033;
    font-size: 34px;
    line-height: 1.1;
  }

  .form-heading p {
    margin: 0;
    color: #64748b;
    line-height: 1.6;
  }

  .name-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .field {
    display: grid;
    gap: 9px;
    margin-bottom: 18px;
    color: #334155;
    font-weight: 800;
    animation: fadeUp 720ms 180ms ease both;
  }

  .field input {
    width: 100%;
    min-height: 50px;
    border: 1px solid #dbe3ef;
    border-radius: 14px;
    padding: 0 15px;
    color: #172033;
    background: #f8fafc;
    font-size: 15px;
    outline: none;
    transition: border 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }

  .field input:focus {
    border-color: #2563eb;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
  }

  .primary-button {
    width: 100%;
    min-height: 52px;
    margin-top: 8px;
    border: 0;
    border-radius: 14px;
    background: #2563eb;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 900;
    box-shadow: 0 16px 34px rgba(37, 99, 235, 0.28);
    transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
    animation: fadeUp 720ms 260ms ease both;
  }

  .primary-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 38px rgba(37, 99, 235, 0.34);
  }

  .primary-button:disabled {
    cursor: not-allowed;
    opacity: 0.72;
  }

  .message {
    margin-bottom: 18px;
    padding: 13px 15px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 800;
    animation: shakeIn 360ms ease both;
  }

  .message.error {
    background: #fee2e2;
    color: #991b1b;
  }

  .message.success {
    background: #dcfce7;
    color: #166534;
  }

  .switch-copy {
    margin: 22px 0 0;
    color: #64748b;
    text-align: center;
  }

  .switch-copy a {
    color: #2563eb;
    font-weight: 900;
    text-decoration: none;
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

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes slowPulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.84;
    }
    50% {
      transform: scale(1.08);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.54);
    }
    70% {
      box-shadow: 0 0 0 16px rgba(20, 184, 166, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(20, 184, 166, 0);
    }
  }

  @keyframes shakeIn {
    0% {
      opacity: 0;
      transform: translateX(-8px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 900px) {
    .auth-shell {
      grid-template-columns: 1fr;
    }

    .auth-visual {
      min-height: 360px;
    }

    .brand-mark {
      margin-top: 44px;
    }
  }

  @media (max-width: 560px) {
    .auth-page {
      padding: 12px;
    }

    .auth-card,
    .auth-visual {
      padding: 24px;
    }

    .name-grid {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .signal-card {
      left: 24px;
      right: 24px;
      bottom: 24px;
    }
  }
`;

export default Signup;
