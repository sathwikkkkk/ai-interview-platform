import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config';

const clampScore = (score) => {
  const value = Number(score);
  if (Number.isNaN(value)) return 0;
  return Math.min(100, Math.max(0, value));
};

const getScoreColor = (score) => {
  if (score >= 80) return '#10b981';
  if (score >= 60) return '#f59e0b';
  return '#ef4444';
};

const getPerformanceClass = (level = '') => {
  return level.toLowerCase().replace(/\s+/g, '-');
};

const formatDate = (dateString) => {
  if (!dateString) return 'Not available';

  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const fallbackItems = {
  strengths: ['Completed the interview', 'Responded to the interviewer', 'Built useful practice momentum'],
  weaknesses: ['Add more examples to future answers', 'Use clearer structure in responses', 'Practice concise technical explanations'],
  recommendations: ['Practice role-specific questions', 'Use the STAR format for behavioral answers', 'Review technical fundamentals before the next session']
};

function Report() {
  const { interviewId } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const generateReport = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.post(`${API_URL}/api/interview/report/${interviewId}`);
        setReport(response.data.report);
      } catch (error) {
        console.error('Error generating report:', error);
        setError('Failed to generate report. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    generateReport();
  }, [interviewId]);

  const preparedReport = useMemo(() => {
    if (!report) return null;

    const overallScore = clampScore(report.overallScore);
    const performanceLevel = report.performanceLevel || 'Completed';

    return {
      ...report,
      overallScore,
      performanceLevel,
      strengths: Array.isArray(report.strengths) && report.strengths.length ? report.strengths : fallbackItems.strengths,
      weaknesses: Array.isArray(report.weaknesses) && report.weaknesses.length ? report.weaknesses : fallbackItems.weaknesses,
      recommendations: Array.isArray(report.recommendations) && report.recommendations.length ? report.recommendations : fallbackItems.recommendations,
      technicalScore: clampScore(report.technicalScore),
      communicationScore: clampScore(report.communicationScore),
      confidenceScore: clampScore(report.confidenceScore),
      problemSolvingScore: clampScore(report.problemSolvingScore)
    };
  }, [report]);

  if (loading) {
    return (
      <main className="report-page report-center">
        <style>{reportStyles}</style>
        <div className="loading-card">
          <div className="loading-orbit">
            <span></span>
          </div>
          <h1>Generating your analysis report</h1>
          <p>The AI is reviewing your interview transcript, scoring your answers, and preparing recommendations.</p>
          <div className="loading-bars">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="report-page report-center">
        <style>{reportStyles}</style>
        <div className="state-card">
          <span className="state-label">Report issue</span>
          <h1>Could not generate the report</h1>
          <p>{error}</p>
          <div className="button-row">
            <button className="button primary" onClick={() => window.location.reload()}>
              Try Again
            </button>
            <button className="button secondary" onClick={() => navigate('/history')}>
              Back to History
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (!preparedReport) {
    return (
      <main className="report-page report-center">
        <style>{reportStyles}</style>
        <div className="state-card">
          <span className="state-label">No report</span>
          <h1>No report available</h1>
          <p>There is no analysis data for this interview yet.</p>
          <button className="button primary" onClick={() => navigate('/history')}>
            Back to History
          </button>
        </div>
      </main>
    );
  }

  const scoreBreakdown = [
    { label: 'Technical Skills', value: preparedReport.technicalScore },
    { label: 'Communication', value: preparedReport.communicationScore },
    { label: 'Confidence', value: preparedReport.confidenceScore },
    { label: 'Problem Solving', value: preparedReport.problemSolvingScore }
  ];

  const stats = [
    { label: 'Questions Asked', value: preparedReport.questionsAsked ?? 0 },
    { label: 'Answers Given', value: preparedReport.answersGiven ?? 0 },
    { label: 'Avg Response', value: preparedReport.averageResponseLength || 'Medium' },
    { label: 'Duration', value: preparedReport.interviewDuration || '15-20 min' }
  ];

  const radius = 82;
  const circumference = 2 * Math.PI * radius;
  const scoreOffset = circumference - (preparedReport.overallScore / 100) * circumference;
  const scoreColor = getScoreColor(preparedReport.overallScore);
  const performanceClass = getPerformanceClass(preparedReport.performanceLevel);

  return (
    <main className="report-page">
      <style>{reportStyles}</style>

      <section className="report-hero">
        <div className="hero-copy">
          <span className="eyebrow">Analysis Report</span>
          <h1>Interview Performance</h1>
          <p>
            A focused review of your interview performance, with scores, strengths,
            improvement areas, and next-step recommendations.
          </p>

          <div className="meta-grid">
            <div>
              <span>Position</span>
              <strong>{preparedReport.position}</strong>
            </div>
            <div>
              <span>Experience</span>
              <strong>{preparedReport.experience}</strong>
            </div>
            <div>
              <span>Difficulty</span>
              <strong>{preparedReport.difficulty}</strong>
            </div>
            <div>
              <span>Date</span>
              <strong>{formatDate(preparedReport.interviewDate)}</strong>
            </div>
          </div>
        </div>

        <div className="score-panel">
          <div className="score-ring">
            <svg viewBox="0 0 220 220" aria-hidden="true">
              <circle className="score-track" cx="110" cy="110" r={radius} />
              <circle
                className="score-progress"
                cx="110"
                cy="110"
                r={radius}
                style={{
                  stroke: scoreColor,
                  strokeDasharray: circumference,
                  '--score-offset': scoreOffset
                }}
              />
            </svg>
            <div className="score-center">
              <strong>{preparedReport.overallScore}</strong>
              <span>out of 100</span>
            </div>
          </div>
          <span className={`performance-pill ${performanceClass}`}>
            {preparedReport.performanceLevel}
          </span>
        </div>
      </section>

      <section className="stats-strip" aria-label="Interview statistics">
        {stats.map((stat, index) => (
          <div className="stat-tile" style={{ animationDelay: `${index * 90}ms` }} key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </section>

      <section className="content-grid">
        <article className="panel score-breakdown">
          <div className="panel-heading">
            <span className="eyebrow dark">Score Breakdown</span>
            <h2>Skill Signals</h2>
          </div>

          <div className="score-list">
            {scoreBreakdown.map((item, index) => (
              <div className="score-row" key={item.label}>
                <div className="score-row-top">
                  <span>{item.label}</span>
                  <strong style={{ color: getScoreColor(item.value) }}>{item.value}%</strong>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${item.value}%`,
                      background: getScoreColor(item.value),
                      animationDelay: `${250 + index * 140}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel feedback-panel">
          <div className="panel-heading">
            <span className="eyebrow dark">Detailed Feedback</span>
            <h2>Evaluator Notes</h2>
          </div>
          <p>{preparedReport.detailedFeedback}</p>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <span className="eyebrow dark">Strengths</span>
            <h2>What Went Well</h2>
          </div>
          <ul className="insight-list positive">
            {preparedReport.strengths.map((strength, index) => (
              <li style={{ animationDelay: `${index * 80}ms` }} key={`${strength}-${index}`}>
                {strength}
              </li>
            ))}
          </ul>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <span className="eyebrow dark">Improvements</span>
            <h2>Focus Areas</h2>
          </div>
          <ul className="insight-list warning">
            {preparedReport.weaknesses.map((weakness, index) => (
              <li style={{ animationDelay: `${index * 80}ms` }} key={`${weakness}-${index}`}>
                {weakness}
              </li>
            ))}
          </ul>
        </article>

        <article className="panel recommendations">
          <div className="panel-heading">
            <span className="eyebrow dark">Recommendations</span>
            <h2>Next Practice Steps</h2>
          </div>
          <div className="recommendation-list">
            {preparedReport.recommendations.map((recommendation, index) => (
              <div
                className="recommendation-item"
                style={{ animationDelay: `${index * 90}ms` }}
                key={`${recommendation}-${index}`}
              >
                <span>{index + 1}</span>
                <p>{recommendation}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <div className="action-bar">
        <button className="button secondary" onClick={() => navigate('/history')}>
          Back to History
        </button>
        <button className="button muted" onClick={() => window.print()}>
          Print Report
        </button>
        <button className="button primary" onClick={() => navigate('/dashboard')}>
          Start New Interview
        </button>
      </div>
    </main>
  );
}

const reportStyles = `
  .report-page {
    min-height: 100vh;
    padding: 28px;
    color: #172033;
    background:
      radial-gradient(circle at top left, rgba(20, 184, 166, 0.18), transparent 30%),
      linear-gradient(180deg, #eef5ff 0%, #f7fafc 45%, #edf2f7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .report-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .report-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 28px;
    max-width: 1180px;
    margin: 0 auto 24px;
    padding: 34px;
    color: #ffffff;
    background:
      linear-gradient(135deg, rgba(23, 32, 51, 0.98), rgba(37, 99, 235, 0.9) 58%, rgba(20, 184, 166, 0.92));
    border-radius: 24px;
    box-shadow: 0 24px 60px rgba(30, 41, 59, 0.22);
    overflow: hidden;
    position: relative;
    animation: fadeUp 680ms ease both;
  }

  .report-hero::after {
    content: "";
    position: absolute;
    width: 360px;
    height: 360px;
    right: -170px;
    top: -170px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.14);
    animation: slowPulse 4s ease-in-out infinite;
  }

  .hero-copy,
  .score-panel {
    position: relative;
    z-index: 1;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    margin-bottom: 14px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.92);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .eyebrow.dark {
    background: #e7f0ff;
    color: #2563eb;
  }

  .hero-copy h1 {
    margin: 0;
    font-size: clamp(36px, 6vw, 64px);
    line-height: 1;
    letter-spacing: 0;
  }

  .hero-copy p {
    max-width: 680px;
    margin: 18px 0 0;
    color: rgba(255, 255, 255, 0.86);
    font-size: 16px;
    line-height: 1.7;
  }

  .meta-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(120px, 1fr));
    gap: 12px;
    margin-top: 30px;
  }

  .meta-grid div {
    min-width: 0;
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
  }

  .meta-grid span,
  .stat-tile span {
    display: block;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.72);
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0;
  }

  .meta-grid strong {
    display: block;
    overflow-wrap: anywhere;
    font-size: 15px;
  }

  .score-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    min-height: 300px;
  }

  .score-ring {
    position: relative;
    width: 230px;
    height: 230px;
    filter: drop-shadow(0 22px 34px rgba(0, 0, 0, 0.22));
  }

  .score-ring svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .score-track,
  .score-progress {
    fill: none;
    stroke-width: 20;
  }

  .score-track {
    stroke: rgba(255, 255, 255, 0.18);
  }

  .score-progress {
    stroke-linecap: round;
    stroke-dashoffset: var(--score-offset);
    animation: drawRing 1400ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }

  .score-center {
    position: absolute;
    inset: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.95);
    color: #172033;
  }

  .score-center strong {
    font-size: 58px;
    line-height: 1;
  }

  .score-center span {
    margin-top: 6px;
    color: #64748b;
    font-weight: 700;
  }

  .performance-pill {
    display: inline-flex;
    justify-content: center;
    min-width: 160px;
    padding: 11px 18px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.18);
    color: #ffffff;
    font-weight: 800;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.22);
    animation: badgePop 900ms 420ms ease both;
  }

  .performance-pill.excellent,
  .performance-pill.good {
    background: rgba(16, 185, 129, 0.25);
  }

  .performance-pill.average {
    background: rgba(245, 158, 11, 0.28);
  }

  .performance-pill.needs-improvement {
    background: rgba(239, 68, 68, 0.28);
  }

  .stats-strip {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
    max-width: 1180px;
    margin: 0 auto 24px;
  }

  .stat-tile {
    padding: 22px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.86);
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
    animation: fadeUp 640ms ease both;
    transition: transform 220ms ease, box-shadow 220ms ease;
  }

  .stat-tile:hover,
  .panel:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 52px rgba(15, 23, 42, 0.12);
  }

  .stat-tile span {
    color: #64748b;
  }

  .stat-tile strong {
    display: block;
    color: #172033;
    font-size: clamp(22px, 3vw, 34px);
    line-height: 1.1;
    overflow-wrap: anywhere;
  }

  .content-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    max-width: 1180px;
    margin: 0 auto;
  }

  .panel {
    padding: 26px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 16px 44px rgba(15, 23, 42, 0.08);
    animation: fadeUp 740ms ease both;
    transition: transform 220ms ease, box-shadow 220ms ease;
  }

  .score-breakdown,
  .feedback-panel,
  .recommendations {
    grid-column: span 2;
  }

  .panel-heading {
    margin-bottom: 20px;
  }

  .panel-heading h2 {
    margin: 0;
    color: #172033;
    font-size: 24px;
    letter-spacing: 0;
  }

  .score-list {
    display: grid;
    gap: 18px;
  }

  .score-row-top {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 10px;
    color: #334155;
    font-weight: 800;
  }

  .bar-track {
    height: 13px;
    overflow: hidden;
    border-radius: 999px;
    background: #e2e8f0;
  }

  .bar-fill {
    height: 100%;
    border-radius: inherit;
    transform: scaleX(0);
    transform-origin: left;
    animation: growBar 920ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  }

  .feedback-panel p {
    margin: 0;
    color: #475569;
    font-size: 16px;
    line-height: 1.8;
  }

  .insight-list {
    display: grid;
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .insight-list li {
    position: relative;
    padding: 14px 14px 14px 42px;
    border-radius: 14px;
    color: #334155;
    background: #f8fafc;
    line-height: 1.6;
    animation: slideIn 520ms ease both;
  }

  .insight-list li::before {
    content: "";
    position: absolute;
    left: 16px;
    top: 22px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .insight-list.positive li::before {
    background: #10b981;
    box-shadow: 0 0 0 5px rgba(16, 185, 129, 0.14);
  }

  .insight-list.warning li::before {
    background: #f59e0b;
    box-shadow: 0 0 0 5px rgba(245, 158, 11, 0.16);
  }

  .recommendation-list {
    display: grid;
    gap: 14px;
  }

  .recommendation-item {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 14px;
    align-items: start;
    padding: 16px;
    border-radius: 16px;
    background: #f8fafc;
    animation: slideIn 520ms ease both;
  }

  .recommendation-item span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 14px;
    background: #2563eb;
    color: #ffffff;
    font-weight: 900;
  }

  .recommendation-item p {
    margin: 0;
    color: #334155;
    line-height: 1.6;
  }

  .action-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    max-width: 1180px;
    margin: 28px auto 0;
    animation: fadeUp 720ms 220ms ease both;
  }

  .button {
    min-height: 46px;
    padding: 12px 22px;
    border: 0;
    border-radius: 12px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 800;
    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }

  .button:hover {
    transform: translateY(-2px);
  }

  .button.primary {
    background: #2563eb;
    color: #ffffff;
    box-shadow: 0 14px 30px rgba(37, 99, 235, 0.28);
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

  .loading-card,
  .state-card {
    width: min(560px, 100%);
    padding: 38px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
    text-align: center;
    animation: fadeUp 680ms ease both;
  }

  .loading-card h1,
  .state-card h1 {
    margin: 18px 0 10px;
    color: #172033;
    font-size: clamp(28px, 5vw, 42px);
    line-height: 1.1;
  }

  .loading-card p,
  .state-card p {
    margin: 0;
    color: #64748b;
    line-height: 1.7;
  }

  .loading-orbit {
    position: relative;
    width: 84px;
    height: 84px;
    margin: 0 auto;
    border-radius: 50%;
    border: 8px solid #dbeafe;
    border-top-color: #2563eb;
    animation: spin 1s linear infinite;
  }

  .loading-orbit span {
    position: absolute;
    inset: 22px;
    border-radius: 50%;
    background: #14b8a6;
    animation: slowPulse 1.3s ease-in-out infinite;
  }

  .loading-bars {
    display: grid;
    gap: 10px;
    margin-top: 28px;
  }

  .loading-bars span {
    display: block;
    height: 12px;
    border-radius: 999px;
    background: linear-gradient(90deg, #e2e8f0, #bfdbfe, #e2e8f0);
    background-size: 220% 100%;
    animation: shimmer 1.2s ease-in-out infinite;
  }

  .loading-bars span:nth-child(2) {
    width: 76%;
    margin: 0 auto;
    animation-delay: 120ms;
  }

  .loading-bars span:nth-child(3) {
    width: 54%;
    margin: 0 auto;
    animation-delay: 240ms;
  }

  .state-label {
    display: inline-flex;
    padding: 8px 12px;
    border-radius: 999px;
    background: #fee2e2;
    color: #b91c1c;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .button-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
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

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-14px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes growBar {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  @keyframes drawRing {
    from {
      stroke-dashoffset: 515.22;
    }
    to {
      stroke-dashoffset: var(--score-offset);
    }
  }

  @keyframes badgePop {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes shimmer {
    from {
      background-position: 120% 0;
    }
    to {
      background-position: -120% 0;
    }
  }

  @keyframes slowPulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.85;
    }
    50% {
      transform: scale(1.08);
      opacity: 1;
    }
  }

  @media (max-width: 900px) {
    .report-page {
      padding: 18px;
    }

    .report-hero {
      grid-template-columns: 1fr;
      padding: 26px;
    }

    .meta-grid,
    .stats-strip,
    .content-grid {
      grid-template-columns: 1fr 1fr;
    }

    .score-panel {
      min-height: auto;
    }

    .score-breakdown,
    .feedback-panel,
    .recommendations {
      grid-column: span 2;
    }
  }

  @media (max-width: 620px) {
    .report-page {
      padding: 12px;
    }

    .report-hero {
      padding: 22px;
      border-radius: 18px;
    }

    .meta-grid,
    .stats-strip,
    .content-grid {
      grid-template-columns: 1fr;
    }

    .score-breakdown,
    .feedback-panel,
    .recommendations {
      grid-column: span 1;
    }

    .score-ring {
      width: 200px;
      height: 200px;
    }

    .score-center strong {
      font-size: 48px;
    }

    .panel,
    .loading-card,
    .state-card {
      padding: 22px;
      border-radius: 16px;
    }

    .button {
      width: 100%;
    }
  }

  @media print {
    .report-page {
      padding: 0;
      background: #ffffff;
    }

    .report-hero,
    .panel,
    .stat-tile {
      box-shadow: none;
      break-inside: avoid;
    }

    .action-bar {
      display: none;
    }
  }
`;

export default Report;
