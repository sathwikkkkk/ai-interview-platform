import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config';

function InterviewHistory() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) {
      navigate('/');
      return;
    }

    setUser(userData);

    const fetchInterviews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/interviews/user/${userData.id}`);
        setInterviews(response.data.interviews || []);
      } catch (error) {
        console.error('Error fetching interviews:', error);
        setError('Could not load your interview history. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchInterviews();
  }, [navigate]);

  const stats = useMemo(() => {
    const completed = interviews.filter((interview) => !interview.isStart).length;
    const inProgress = interviews.filter((interview) => interview.isStart).length;
    const totalMessages = interviews.reduce((sum, interview) => {
      return sum + (interview.chatTranscript?.length || 0);
    }, 0);

    return [
      { label: 'Total Interviews', value: interviews.length },
      { label: 'Completed', value: completed },
      { label: 'In Progress', value: inProgress },
      { label: 'Transcript Items', value: totalMessages }
    ];
  }, [interviews]);

  const formatDate = (dateString) => {
    if (!dateString) return 'Not available';

    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <main className="history-page history-center">
        <style>{historyStyles}</style>
        <div className="loading-card">
          <div className="loading-orbit"></div>
          <h1>Loading history</h1>
          <p>Collecting your saved interviews and reports.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="history-page">
      <style>{historyStyles}</style>

      <nav className="history-nav">
        <div>
          <span className="eyebrow dark">Practice Archive</span>
          <h1>Interview History</h1>
        </div>
        <button className="button secondary" onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </button>
      </nav>

      <section className="history-hero">
        <div className="hero-copy">
          <span className="eyebrow">Progress Tracker</span>
          <h2>{user?.firstName || 'Your'} practice timeline.</h2>
          <p>
            Review completed interviews, continue active sessions, and open analysis reports
            whenever you want to study your progress.
          </p>
        </div>

        <div className="timeline-visual" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      {error && <div className="message error">{error}</div>}

      <section className="stats-grid" aria-label="Interview history statistics">
        {stats.map((stat, index) => (
          <div className="stat-card" style={{ animationDelay: `${index * 90}ms` }} key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </section>

      <section className="history-content">
        <div className="section-heading">
          <span className="eyebrow dark">Saved Sessions</span>
          <h2>Your Interviews</h2>
        </div>

        {interviews.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">AI</div>
            <h3>No interviews yet</h3>
            <p>Start your first practice interview from the dashboard. It will appear here after creation.</p>
            <button className="button primary" onClick={() => navigate('/dashboard')}>
              Go to Dashboard
            </button>
          </div>
        ) : (
          <div className="interview-list">
            {interviews.map((interview, index) => {
              const messageCount = interview.chatTranscript?.length || 0;
              const canViewReport = !interview.isStart && messageCount > 0;

              return (
                <article
                  className="interview-card"
                  style={{ animationDelay: `${index * 80}ms` }}
                  key={interview._id}
                >
                  <div className="card-main">
                    <div className="status-line">
                      <span className={`status-pill ${interview.isStart ? 'active' : 'complete'}`}>
                        {interview.isStart ? 'In Progress' : 'Completed'}
                      </span>
                      <span className="date-text">{formatDate(interview.createdAt)}</span>
                    </div>

                    <h3>{interview.position}</h3>

                    <div className="detail-grid">
                      <div>
                        <span>Experience</span>
                        <strong>{interview.experience}</strong>
                      </div>
                      <div>
                        <span>Difficulty</span>
                        <strong>{interview.difficulty}</strong>
                      </div>
                      <div>
                        <span>Transcript</span>
                        <strong>{messageCount} items</strong>
                      </div>
                    </div>
                  </div>

                  <div className="card-actions">
                    {interview.isStart && (
                      <button className="button primary" onClick={() => navigate(`/interview/${interview._id}`)}>
                        Continue
                      </button>
                    )}
                    {canViewReport && (
                      <button className="button primary" onClick={() => navigate(`/report/${interview._id}`)}>
                        View Report
                      </button>
                    )}
                    {!interview.isStart && !canViewReport && (
                      <button className="button disabled" disabled>
                        No Transcript
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

const historyStyles = `
  .history-page {
    min-height: 100vh;
    padding: 28px;
    color: #172033;
    background: linear-gradient(180deg, #eef5ff 0%, #f8fafc 54%, #edf2f7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .history-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .history-nav,
  .history-hero,
  .stats-grid,
  .history-content,
  .message {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }

  .history-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-bottom: 22px;
    padding: 18px 20px;
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
    animation: fadeUp 620ms ease both;
  }

  .history-nav h1 {
    margin: 8px 0 0;
    font-size: clamp(24px, 4vw, 34px);
  }

  .history-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 24px;
    margin-bottom: 22px;
    padding: 34px;
    border-radius: 26px;
    color: #ffffff;
    background: linear-gradient(135deg, #172033 0%, #2563eb 58%, #14b8a6 100%);
    box-shadow: 0 24px 60px rgba(30, 41, 59, 0.2);
    overflow: hidden;
    animation: fadeUp 720ms 80ms ease both;
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

  .hero-copy h2 {
    max-width: 700px;
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

  .timeline-visual {
    display: grid;
    align-content: center;
    gap: 18px;
  }

  .timeline-visual span {
    display: block;
    height: 54px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.16);
    border: 1px solid rgba(255, 255, 255, 0.22);
    backdrop-filter: blur(10px);
    animation: slideIn 680ms ease both;
  }

  .timeline-visual span:nth-child(2) {
    width: 82%;
    margin-left: auto;
    animation-delay: 120ms;
  }

  .timeline-visual span:nth-child(3) {
    width: 64%;
    animation-delay: 240ms;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
    margin-bottom: 24px;
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
  .interview-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 54px rgba(15, 23, 42, 0.12);
  }

  .stat-card span,
  .detail-grid span {
    display: block;
    margin-bottom: 8px;
    color: #64748b;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .stat-card strong {
    display: block;
    font-size: 34px;
    line-height: 1;
  }

  .history-content {
    padding: 28px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.82);
    box-shadow: 0 18px 46px rgba(15, 23, 42, 0.08);
    animation: fadeUp 740ms 120ms ease both;
  }

  .section-heading {
    margin-bottom: 22px;
  }

  .section-heading h2 {
    margin: 14px 0 0;
    font-size: 28px;
  }

  .interview-list {
    display: grid;
    gap: 16px;
  }

  .interview-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 18px;
    align-items: center;
    padding: 22px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 18px;
    background: #ffffff;
    box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
    animation: fadeUp 620ms ease both;
    transition: transform 200ms ease, box-shadow 200ms ease;
  }

  .status-line {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .status-pill {
    display: inline-flex;
    padding: 7px 10px;
    border-radius: 999px;
    color: #ffffff;
    font-size: 12px;
    font-weight: 900;
  }

  .status-pill.complete {
    background: #10b981;
  }

  .status-pill.active {
    background: #f59e0b;
  }

  .date-text {
    color: #64748b;
    font-size: 13px;
    font-weight: 700;
  }

  .interview-card h3 {
    margin: 0 0 16px;
    color: #172033;
    font-size: 23px;
    overflow-wrap: anywhere;
  }

  .detail-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .detail-grid div {
    padding: 14px;
    border-radius: 14px;
    background: #f8fafc;
  }

  .detail-grid strong {
    display: block;
    color: #172033;
    overflow-wrap: anywhere;
  }

  .card-actions {
    min-width: 150px;
  }

  .empty-state,
  .loading-card {
    text-align: center;
    padding: 38px;
    border-radius: 22px;
    background: #ffffff;
    box-shadow: 0 18px 46px rgba(15, 23, 42, 0.08);
    animation: fadeUp 680ms ease both;
  }

  .empty-icon {
    width: 78px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 18px;
    border-radius: 24px;
    background: #e7f0ff;
    color: #2563eb;
    font-size: 26px;
    font-weight: 900;
    animation: float 3s ease-in-out infinite;
  }

  .empty-state h3,
  .loading-card h1 {
    margin: 0 0 10px;
    color: #172033;
    font-size: 30px;
  }

  .empty-state p,
  .loading-card p {
    max-width: 560px;
    margin: 0 auto 22px;
    color: #64748b;
    line-height: 1.7;
  }

  .loading-orbit {
    width: 70px;
    height: 70px;
    margin: 0 auto 18px;
    border-radius: 50%;
    border: 7px solid #dbeafe;
    border-top-color: #2563eb;
    animation: spin 900ms linear infinite;
  }

  .message {
    margin-bottom: 18px;
    padding: 13px 15px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 800;
  }

  .message.error {
    background: #fee2e2;
    color: #991b1b;
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

  .button.primary {
    width: 100%;
    background: #2563eb;
    color: #ffffff;
    box-shadow: 0 16px 34px rgba(37, 99, 235, 0.28);
  }

  .button.secondary {
    background: #ffffff;
    color: #2563eb;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
  }

  .button.disabled {
    width: 100%;
    cursor: not-allowed;
    background: #e2e8f0;
    color: #64748b;
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
      transform: translateX(24px);
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
      transform: translateY(-9px);
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 920px) {
    .history-nav,
    .history-hero,
    .interview-card {
      grid-template-columns: 1fr;
    }

    .history-nav {
      align-items: flex-start;
      flex-direction: column;
    }

    .stats-grid,
    .detail-grid {
      grid-template-columns: 1fr 1fr;
    }

    .timeline-visual {
      display: none;
    }

    .card-actions {
      min-width: 0;
    }
  }

  @media (max-width: 560px) {
    .history-page {
      padding: 12px;
    }

    .history-nav,
    .history-hero,
    .history-content {
      padding: 20px;
      border-radius: 18px;
    }

    .stats-grid,
    .detail-grid {
      grid-template-columns: 1fr;
    }

    .button {
      width: 100%;
    }
  }
`;

export default InterviewHistory;
