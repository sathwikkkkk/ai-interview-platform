import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [interviews, setInterviews] = useState([]);
  const [formError, setFormError] = useState('');
  const [isStarting, setIsStarting] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [interviewData, setInterviewData] = useState({
    position: '',
    experience: '',
    difficulty: ''
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) {
      navigate('/');
      return;
    }

    setUser(userData);

    const fetchInterviews = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/interviews/user/${userData.id}`);
        setInterviews(response.data.interviews || []);
      } catch (error) {
        console.error('Error fetching dashboard interviews:', error);
      }
    };

    fetchInterviews();
  }, [navigate]);

  const stats = useMemo(() => {
    const completed = interviews.filter((interview) => !interview.isStart).length;
    const inProgress = interviews.filter((interview) => interview.isStart).length;

    return [
      { label: 'Total Sessions', value: interviews.length },
      { label: 'Completed', value: completed },
      { label: 'In Progress', value: inProgress }
    ];
  }, [interviews]);

  const latestInterview = interviews[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInterviewData({ ...interviewData, [name]: value });
    setFormError('');
  };

  const handleStartInterview = async (e) => {
    e.preventDefault();

    if (!interviewData.position || !interviewData.experience || !interviewData.difficulty) {
      setFormError('Please complete all fields before starting the interview.');
      return;
    }

    try {
      setIsStarting(true);
      const response = await axios.post(`${API_URL}/api/interview/start`, {
        userId: user.id,
        ...interviewData
      });
      navigate(`/interview/${response.data.interviewId}`);
    } catch (error) {
      console.error('Error starting interview:', error);
      setIsStarting(false);
      setFormError('Error starting interview. Please try again.');
    }
  };

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  if (!user) {
    return (
      <main className="dashboard-page dashboard-loading">
        <style>{dashboardStyles}</style>
        <div className="loading-card">
          <div className="loading-orbit"></div>
          <h1>Loading dashboard</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="dashboard-page">
      <style>{dashboardStyles}</style>

      <nav className="dash-nav">
        <div>
          <span className="eyebrow dark">AI Interviewer</span>
          <h1>Practice Dashboard</h1>
        </div>
        <div className="nav-actions">
          <button className="button secondary" onClick={() => navigate('/profile')}>
            Profile
          </button>
          <button className="button secondary" onClick={() => navigate('/history')}>
            View History
          </button>
          <button className="button muted" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <section className="dashboard-hero">
        <div className="hero-copy">
          <span className="eyebrow">Welcome Back</span>
          <h2>{user.firstName}, set up your next interview.</h2>
          <p>
            Choose the role, experience level, and difficulty. The session will be saved
            so your report can be generated after completion.
          </p>
        </div>

        <div className="profile-panel">
          <div className="avatar">{user.firstName?.charAt(0)?.toUpperCase() || 'U'}</div>
          <div>
            <span>Candidate</span>
            <strong>{user.firstName} {user.lastName}</strong>
            <p>{user.email}</p>
            <button className="profile-link" onClick={() => navigate('/profile')}>
              Manage Profile
            </button>
          </div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Practice statistics">
        {stats.map((stat, index) => (
          <div className="stat-card" style={{ animationDelay: `${index * 90}ms` }} key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </section>

      <section className="dashboard-grid">
        <article className="panel setup-panel">
          <div className="panel-heading">
            <span className="eyebrow dark">Interview Setup</span>
            <h2>Session Details</h2>
          </div>

          {formError && <div className="message error">{formError}</div>}

          <form onSubmit={handleStartInterview}>
            <label className="field">
              <span>Position</span>
              <input
                type="text"
                name="position"
                placeholder="Software Intern, Data Analyst, Product Manager"
                value={interviewData.position}
                onChange={handleInputChange}
                required
              />
            </label>

            <div className="form-grid">
              <label className="field">
                <span>Experience Level</span>
                <select
                  name="experience"
                  value={interviewData.experience}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select experience</option>
                  <option value="Fresher">Fresher</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>
              </label>

              <label className="field">
                <span>Difficulty Level</span>
                <select
                  name="difficulty"
                  value={interviewData.difficulty}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </label>
            </div>

            <button className="button primary wide" type="submit" disabled={isStarting}>
              {isStarting ? 'Starting Interview...' : 'Start Interview'}
            </button>
          </form>
        </article>

        <aside className="panel snapshot-panel">
          <div className="panel-heading">
            <span className="eyebrow dark">Session Snapshot</span>
            <h2>Current Focus</h2>
          </div>

          <div className="focus-stack">
            <div className="focus-card">
              <span>Role</span>
              <strong>{interviewData.position || 'Not selected'}</strong>
            </div>
            <div className="focus-card">
              <span>Experience</span>
              <strong>{interviewData.experience || 'Not selected'}</strong>
            </div>
            <div className="focus-card">
              <span>Difficulty</span>
              <strong>{interviewData.difficulty || 'Not selected'}</strong>
            </div>
          </div>

          <div className="latest-card">
            <span>Latest Session</span>
            {latestInterview ? (
              <>
                <strong>{latestInterview.position}</strong>
                <p>{latestInterview.isStart ? 'In progress' : 'Completed'}</p>
              </>
            ) : (
              <>
                <strong>No sessions yet</strong>
                <p>Your first session will appear here.</p>
              </>
            )}
          </div>
        </aside>
      </section>

      {showLogoutConfirm && (
        <div className="logout-overlay" role="dialog" aria-modal="true" aria-labelledby="logout-title">
          <div className="logout-dialog">
            <span className="eyebrow dark">Confirm Logout</span>
            <h2 id="logout-title">Are you sure you want to logout?</h2>
            <p>Your current session will end and you will need to sign in again.</p>
            <div className="logout-actions">
              <button className="button secondary" onClick={() => setShowLogoutConfirm(false)}>
                Cancel
              </button>
              <button className="button danger-button" onClick={confirmLogout}>
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

const dashboardStyles = `
  .dashboard-page {
    min-height: 100vh;
    padding: 28px;
    color: #172033;
    background:
      radial-gradient(circle at 12% 12%, rgba(20, 184, 166, 0.18), transparent 30%),
      radial-gradient(circle at 88% 8%, rgba(37, 99, 235, 0.17), transparent 28%),
      linear-gradient(180deg, #eef5ff 0%, #f8fafc 56%, #edf2f7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .dashboard-loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loading-card {
    padding: 34px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
    text-align: center;
    animation: fadeUp 680ms ease both;
  }

  .loading-card h1 {
    margin: 18px 0 0;
    font-size: 28px;
  }

  .loading-orbit {
    width: 70px;
    height: 70px;
    margin: 0 auto;
    border-radius: 50%;
    border: 7px solid #dbeafe;
    border-top-color: #2563eb;
    animation: spin 900ms linear infinite;
  }

  .dash-nav,
  .dashboard-hero,
  .stats-grid,
  .dashboard-grid {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }

  .dash-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    margin-bottom: 22px;
    padding: 18px 20px;
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
    animation: fadeUp 620ms ease both;
  }

  .dash-nav h1 {
    margin: 8px 0 0;
    font-size: clamp(24px, 4vw, 34px);
  }

  .nav-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-end;
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

  .dashboard-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 22px;
    margin-bottom: 22px;
    padding: 34px;
    border-radius: 26px;
    color: #ffffff;
    background:
      linear-gradient(135deg, rgba(23, 32, 51, 0.98), rgba(37, 99, 235, 0.9) 58%, rgba(20, 184, 166, 0.92));
    box-shadow: 0 24px 60px rgba(30, 41, 59, 0.2);
    position: relative;
    overflow: hidden;
    animation: fadeUp 720ms 80ms ease both;
  }

  .dashboard-hero::after {
    content: "";
    position: absolute;
    width: 340px;
    height: 340px;
    right: -160px;
    top: -160px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.13);
    animation: slowPulse 4s ease-in-out infinite;
  }

  .hero-copy,
  .profile-panel {
    position: relative;
    z-index: 1;
  }

  .hero-copy h2 {
    max-width: 760px;
    margin: 16px 0 0;
    font-size: clamp(34px, 6vw, 58px);
    line-height: 1;
    letter-spacing: 0;
  }

  .hero-copy p {
    max-width: 660px;
    margin: 18px 0 0;
    color: rgba(255, 255, 255, 0.84);
    line-height: 1.7;
  }

  .profile-panel {
    display: grid;
    grid-template-columns: 70px minmax(0, 1fr);
    gap: 16px;
    align-self: center;
    padding: 18px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
  }

  .avatar {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: #ffffff;
    color: #2563eb;
    font-size: 30px;
    font-weight: 900;
    animation: float 3s ease-in-out infinite;
  }

  .profile-panel span,
  .stat-card span,
  .focus-card span,
  .latest-card span {
    display: block;
    margin-bottom: 7px;
    color: #64748b;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .profile-panel span {
    color: rgba(255, 255, 255, 0.72);
  }

  .profile-panel strong {
    display: block;
    overflow-wrap: anywhere;
    font-size: 18px;
  }

  .profile-panel p {
    margin: 6px 0 0;
    overflow-wrap: anywhere;
    color: rgba(255, 255, 255, 0.72);
  }

  .profile-link {
    margin-top: 12px;
    border: 0;
    border-radius: 999px;
    padding: 9px 12px;
    background: rgba(255, 255, 255, 0.18);
    color: #ffffff;
    cursor: pointer;
    font-weight: 900;
    transition: transform 180ms ease, background 180ms ease;
  }

  .profile-link:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.24);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin-bottom: 22px;
  }

  .stat-card {
    padding: 22px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
    animation: fadeUp 640ms ease both;
    transition: transform 200ms ease, box-shadow 200ms ease;
  }

  .stat-card:hover,
  .panel:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 54px rgba(15, 23, 42, 0.12);
  }

  .stat-card strong {
    display: block;
    font-size: 36px;
    line-height: 1;
  }

  .dashboard-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(300px, 0.8fr);
    gap: 20px;
  }

  .panel {
    padding: 28px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 18px 46px rgba(15, 23, 42, 0.08);
    animation: fadeUp 740ms 120ms ease both;
    transition: transform 200ms ease, box-shadow 200ms ease;
  }

  .panel-heading {
    margin-bottom: 22px;
  }

  .panel-heading h2 {
    margin: 14px 0 0;
    font-size: 28px;
    line-height: 1.1;
  }

  .field {
    display: grid;
    gap: 9px;
    margin-bottom: 18px;
    color: #334155;
    font-weight: 900;
  }

  .field input,
  .field select {
    width: 100%;
    min-height: 52px;
    border: 1px solid #dbe3ef;
    border-radius: 14px;
    padding: 0 15px;
    color: #172033;
    background: #f8fafc;
    font-size: 15px;
    outline: none;
    transition: border 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }

  .field select {
    cursor: pointer;
  }

  .field input:focus,
  .field select:focus {
    border-color: #2563eb;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .focus-stack {
    display: grid;
    gap: 12px;
  }

  .focus-card,
  .latest-card {
    padding: 16px;
    border-radius: 16px;
    background: #f8fafc;
    animation: slideIn 520ms ease both;
  }

  .focus-card strong,
  .latest-card strong {
    display: block;
    overflow-wrap: anywhere;
    color: #172033;
    font-size: 17px;
  }

  .latest-card {
    margin-top: 18px;
    border: 1px solid #dbeafe;
    background: #eff6ff;
  }

  .latest-card p {
    margin: 8px 0 0;
    color: #64748b;
  }

  .button {
    min-height: 46px;
    border: 0;
    border-radius: 13px;
    padding: 12px 18px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 900;
    transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
  }

  .button:hover {
    transform: translateY(-2px);
  }

  .button:disabled {
    cursor: not-allowed;
    opacity: 0.72;
  }

  .button.primary {
    background: #2563eb;
    color: #ffffff;
    box-shadow: 0 16px 34px rgba(37, 99, 235, 0.28);
  }

  .button.secondary {
    background: #ffffff;
    color: #2563eb;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
  }

  .button.muted {
    background: #172033;
    color: #ffffff;
    box-shadow: 0 14px 30px rgba(23, 32, 51, 0.2);
  }

  .button.danger-button {
    background: #dc2626;
    color: #ffffff;
    box-shadow: 0 16px 34px rgba(220, 38, 38, 0.24);
  }

  .button.wide {
    width: 100%;
    min-height: 54px;
    margin-top: 8px;
    font-size: 16px;
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

  .logout-overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(15, 23, 42, 0.56);
    backdrop-filter: blur(10px);
    animation: fadeIn 180ms ease both;
  }

  .logout-dialog {
    width: min(460px, 100%);
    padding: 28px;
    border: 1px solid rgba(148, 163, 184, 0.22);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 28px 70px rgba(15, 23, 42, 0.28);
    animation: modalPop 240ms ease both;
  }

  .logout-dialog h2 {
    margin: 16px 0 8px;
    color: #172033;
    font-size: 28px;
    line-height: 1.12;
  }

  .logout-dialog p {
    margin: 0;
    color: #64748b;
    line-height: 1.6;
  }

  .logout-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 24px;
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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes modalPop {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-12px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes shakeIn {
    from {
      opacity: 0;
      transform: translateX(-8px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
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

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 900px) {
    .dash-nav,
    .dashboard-hero,
    .dashboard-grid {
      grid-template-columns: 1fr;
    }

    .dash-nav {
      align-items: flex-start;
      flex-direction: column;
    }

    .nav-actions {
      width: 100%;
      justify-content: flex-start;
    }

    .stats-grid,
    .form-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 560px) {
    .dashboard-page {
      padding: 12px;
    }

    .dashboard-hero,
    .panel,
    .dash-nav {
      padding: 20px;
      border-radius: 18px;
    }

    .profile-panel {
      grid-template-columns: 1fr;
    }

    .nav-actions,
    .logout-actions,
    .button {
      width: 100%;
    }

    .logout-actions {
      flex-direction: column-reverse;
    }
  }
`;

export default Dashboard;
