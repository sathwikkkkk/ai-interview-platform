import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import axios from 'axios';
import { API_URL, SOCKET_URL } from '../config';

function Interview() {
  const { interviewId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isEnding, setIsEnding] = useState(false);
  const socketRef = useRef(null);
  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    socketRef.current = io(SOCKET_URL);
    socketRef.current.emit('join-interview', { interviewId });

    socketRef.current.on('ai-response', (data) => {
      setMessages((prev) => [...prev, { role: 'ai', text: data.message }]);
      speakText(data.message);
    });

    if ('webkitSpeechRecognition' in window) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setMessages((prev) => [...prev, { role: 'user', text: transcript }]);
        socketRef.current.emit('user-message', { interviewId, message: transcript });
        setIsRecording(false);
      };

      recognitionRef.current.onerror = (event) => {
        setIsRecording(false);
        if (event.error !== 'no-speech') alert('Speech recognition error. Please try again.');
      };

      recognitionRef.current.onend = () => setIsRecording(false);
    }

    return () => {
      socketRef.current?.disconnect();
      window.speechSynthesis?.cancel();
    };
  }, [interviewId]);

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const startRecording = () => {
    if (!recognitionRef.current) return alert('Speech recognition only works in Chrome');
    setIsRecording(true);
    try {
      recognitionRef.current.start();
    } catch {
      setIsRecording(false);
    }
  };

  const handleCompleteInterview = async () => {
    if (isEnding) return;

    try {
      setIsEnding(true);
      try {
        recognitionRef.current?.stop?.();
      } catch {
        // The browser can throw if recognition has already stopped.
      }
      setIsRecording(false);
      await axios.post(`${API_URL}/api/interview/stop/${interviewId}`);
      window.speechSynthesis?.cancel();
      socketRef.current?.disconnect();
      navigate(`/report/${interviewId}`, { replace: true });
    } catch {
      setIsEnding(false);
      alert('Error stopping interview');
    }
  };

  return (
    <main className="interview-page">
      <style>{interviewStyles}</style>

      <section className="interviewer-banner">
        <div className="interviewer-avatar" aria-hidden="true">AI</div>
        <div>
          <span className="eyebrow dark">Live Interview</span>
          <h1>Your AI Interviewer</h1>
          <p>I will ask questions and guide your interview. Speak clearly and answer naturally.</p>
        </div>
      </section>

      <section className="interview-shell">
        <header className="interview-header">
          <div>
            <span className="eyebrow">In Progress</span>
            <h2>Interview Session</h2>
          </div>
          <button
            className="complete-button"
            onClick={handleCompleteInterview}
            disabled={isEnding}
          >
            {isEnding ? 'Completing Interview...' : 'Complete Interview & Get Report'}
          </button>
        </header>

        <div className="chat-container">
          {messages.length === 0 && (
            <div className="welcome-message">Waiting for the AI interviewer to begin...</div>
          )}

          {messages.map((msg, index) => (
            <article className={`message ${msg.role === 'user' ? 'user' : 'ai'}`} key={`${msg.role}-${index}`}>
              <strong>{msg.role === 'user' ? 'You' : 'AI Interviewer'}</strong>
              <p>{msg.text}</p>
            </article>
          ))}

          <div ref={messagesEndRef} />
        </div>

        <footer className="interview-controls">
          <p>
            {isRecording
              ? 'Listening... speak now.'
              : 'Answer the question, then complete the interview to get your analysis report.'}
          </p>
          <button
            className={`record-button ${isRecording ? 'recording' : ''}`}
            onClick={startRecording}
            disabled={isRecording || isEnding}
          >
            {isRecording ? 'Recording...' : 'Start Speaking'}
          </button>
        </footer>
      </section>
    </main>
  );
}

const interviewStyles = `
  .interview-page {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 18px;
    color: #172033;
    background:
      radial-gradient(circle at 12% 8%, rgba(20, 184, 166, 0.14), transparent 28%),
      linear-gradient(180deg, #eef5ff 0%, #f8fafc 56%, #edf2f7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden;
  }

  .interviewer-banner,
  .interview-shell {
    width: min(1100px, 100%);
    margin: 0 auto;
  }

  .interviewer-banner {
    display: grid;
    grid-template-columns: 74px minmax(0, 1fr);
    gap: 16px;
    align-items: center;
    padding: 18px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
    animation: fadeUp 620ms ease both;
  }

  .interviewer-avatar {
    width: 74px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 22px;
    background: #2563eb;
    color: #ffffff;
    font-size: 24px;
    font-weight: 900;
    box-shadow: 0 16px 34px rgba(37, 99, 235, 0.24);
    animation: float 3s ease-in-out infinite;
  }

  .eyebrow {
    display: inline-flex;
    width: fit-content;
    padding: 7px 11px;
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

  .interviewer-banner h1 {
    margin: 9px 0 4px;
    font-size: 26px;
    line-height: 1.1;
  }

  .interviewer-banner p {
    margin: 0;
    color: #64748b;
    line-height: 1.55;
  }

  .interview-shell {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 20px 52px rgba(15, 23, 42, 0.1);
    animation: fadeUp 680ms 80ms ease both;
  }

  .interview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 20px;
    color: #ffffff;
    background: linear-gradient(135deg, #172033 0%, #2563eb 64%, #14b8a6 100%);
  }

  .interview-header h2 {
    margin: 9px 0 0;
    font-size: 26px;
    line-height: 1.1;
  }

  .complete-button,
  .record-button {
    min-height: 46px;
    border: 0;
    border-radius: 13px;
    padding: 12px 18px;
    color: #ffffff;
    cursor: pointer;
    font-weight: 900;
    transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
  }

  .complete-button {
    flex: 0 0 auto;
    background: #dc2626;
    box-shadow: 0 16px 34px rgba(220, 38, 38, 0.26);
  }

  .record-button {
    min-width: 190px;
    background: #16a34a;
    box-shadow: 0 16px 34px rgba(22, 163, 74, 0.24);
  }

  .record-button.recording {
    background: #dc2626;
  }

  .complete-button:hover,
  .record-button:hover {
    transform: translateY(-2px);
  }

  .complete-button:disabled,
  .record-button:disabled {
    cursor: not-allowed;
    opacity: 0.72;
    transform: none;
  }

  .chat-container {
    flex: 1;
    min-height: 280px;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 14px;
    background:
      linear-gradient(180deg, rgba(248, 250, 252, 0.9), rgba(239, 246, 255, 0.82));
  }

  .welcome-message {
    align-self: center;
    max-width: 520px;
    margin-top: 40px;
    padding: 18px;
    border-radius: 16px;
    color: #64748b;
    background: #ffffff;
    text-align: center;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
  }

  .message {
    max-width: min(78%, 760px);
    padding: 14px 16px;
    border-radius: 16px;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
    animation: fadeUp 260ms ease both;
    overflow-wrap: anywhere;
  }

  .message.user {
    align-self: flex-end;
    color: #ffffff;
    background: #2563eb;
    border-bottom-right-radius: 6px;
  }

  .message.ai {
    align-self: flex-start;
    color: #172033;
    background: #ffffff;
    border-bottom-left-radius: 6px;
  }

  .message strong {
    display: block;
    margin-bottom: 7px;
    font-size: 14px;
  }

  .message p {
    margin: 0;
    line-height: 1.55;
  }

  .interview-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 18px 20px;
    border-top: 1px solid #dbe3ef;
    background: #ffffff;
  }

  .interview-controls p {
    margin: 0;
    color: #475569;
    line-height: 1.55;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(14px);
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
      transform: translateY(-8px);
    }
  }

  @media (max-width: 760px) {
    .interview-page {
      padding: 12px;
      gap: 12px;
    }

    .interviewer-banner {
      grid-template-columns: 58px minmax(0, 1fr);
      padding: 14px;
      border-radius: 18px;
    }

    .interviewer-avatar {
      width: 58px;
      height: 58px;
      border-radius: 18px;
      font-size: 20px;
    }

    .interviewer-banner h1,
    .interview-header h2 {
      font-size: 22px;
    }

    .interview-header,
    .interview-controls {
      align-items: stretch;
      flex-direction: column;
    }

    .complete-button,
    .record-button {
      width: 100%;
      min-width: 0;
    }

    .chat-container {
      padding: 14px;
      min-height: 340px;
    }

    .message {
      max-width: 92%;
    }
  }

  @media (max-width: 420px) {
    .interviewer-banner {
      grid-template-columns: 1fr;
    }

    .interviewer-avatar {
      width: 52px;
      height: 52px;
    }

    .message {
      max-width: 100%;
    }
  }
`;

export default Interview;
