import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config';

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [interviews, setInterviews] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState('');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      navigate('/');
      return;
    }

    const loadProfile = async () => {
      try {
        setLoading(true);
        const [userResponse, interviewsResponse] = await Promise.all([
          axios.get(`${API_URL}/api/user/${storedUser.id}`),
          axios.get(`${API_URL}/api/interviews/user/${storedUser.id}`)
        ]);

        const nextUser = {
          id: userResponse.data._id || userResponse.data.id,
          firstName: userResponse.data.firstName,
          lastName: userResponse.data.lastName,
          email: userResponse.data.email
        };

        setUser(nextUser);
        setFormData({
          firstName: nextUser.firstName || '',
          lastName: nextUser.lastName || '',
          email: nextUser.email || '',
          password: ''
        });
        setInterviews(interviewsResponse.data.interviews || []);
      } catch (error) {
        console.error('Error loading profile:', error);
        setUser(storedUser);
        setFormData({
          firstName: storedUser.firstName || '',
          lastName: storedUser.lastName || '',
          email: storedUser.email || '',
          password: ''
        });
        setError('Could not refresh profile details. Showing saved local data.');
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setMessage('');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      setError('First name, last name, and email are required.');
      return;
    }

    try {
      setSaving(true);
      setError('');
      setMessage('');

      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email
      };

      if (formData.password.trim()) {
        payload.password = formData.password;
      }

      const response = await axios.put(`${API_URL}/api/user/${user.id}`, payload);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setUser(response.data.user);
      setFormData({
        firstName: response.data.user.firstName || '',
        lastName: response.data.user.lastName || '',
        email: response.data.user.email || '',
        password: ''
      });
      setMessage('Profile updated successfully.');
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(error.response?.data?.message || 'Could not update profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirm !== 'DELETE' || deleting) return;

    const confirmed = window.confirm('This will permanently delete your account and interview history. Continue?');
    if (!confirmed) return;

    try {
      setDeleting(true);
      await axios.delete(`${API_URL}/api/user/${user.id}`);
      localStorage.removeItem('user');
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error deleting account:', error);
      setDeleting(false);
      setError(error.response?.data?.message || 'Could not delete account. Please try again.');
    }
  };

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  if (loading || !user) {
    return (
      <main className="profile-page profile-center">
        <style>{profileStyles}</style>
        <div className="loading-card">
          <div className="loading-orbit"></div>
          <h1>Loading profile</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="profile-page">
      <style>{profileStyles}</style>

      <nav className="profile-nav">
        <div>
          <span className="eyebrow dark">User Profile</span>
          <h1>Account Settings</h1>
        </div>
        <div className="nav-actions">
          <button className="button secondary" onClick={() => navigate('/dashboard')}>
            Dashboard
          </button>
          <button className="button secondary" onClick={() => navigate('/history')}>
            History
          </button>
          <button className="button muted" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <section className="profile-hero">
        <div className="hero-copy">
          <span className="eyebrow">Profile Center</span>
          <h2>Manage your account, {user.firstName}.</h2>
          <p>
            View your profile details, update personal information, change your password,
            or permanently delete your account.
          </p>
        </div>

        <div className="identity-card">
          <div className="avatar">{user.firstName?.charAt(0)?.toUpperCase() || 'U'}</div>
          <div>
            <span>Signed In As</span>
            <strong>{user.firstName} {user.lastName}</strong>
            <p>{user.email}</p>
          </div>
        </div>
      </section>

      {(message || error) && (
        <div className={`message ${error ? 'error' : 'success'}`}>
          {error || message}
        </div>
      )}

      <section className="profile-stats" aria-label="Profile statistics">
        {stats.map((stat, index) => (
          <div className="stat-card" style={{ animationDelay: `${index * 90}ms` }} key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </section>

      <section className="profile-grid">
        <article className="panel">
          <div className="panel-heading">
            <span className="eyebrow dark">Edit Profile</span>
            <h2>Personal Details</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <label className="field">
                <span>First Name</span>
                <input
                  type="text"
                  name="firstName"
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
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="field">
              <span>New Password</span>
              <input
                type="password"
                name="password"
                placeholder="Leave blank to keep current password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>

            <button className="button primary wide" type="submit" disabled={saving}>
              {saving ? 'Saving Changes...' : 'Save Changes'}
            </button>
          </form>
        </article>

        <aside className="panel summary-panel">
          <div className="panel-heading">
            <span className="eyebrow dark">Account Summary</span>
            <h2>Profile Preview</h2>
          </div>

          <div className="preview-card">
            <div className="avatar large">{formData.firstName?.charAt(0)?.toUpperCase() || 'U'}</div>
            <span>Candidate</span>
            <strong>{formData.firstName || 'First'} {formData.lastName || 'Last'}</strong>
            <p>{formData.email || 'email@example.com'}</p>
          </div>

          <div className="danger-zone">
            <span className="eyebrow danger">Danger Zone</span>
            <h3>Delete Account</h3>
            <p>This permanently deletes your account and interview history.</p>
            <label className="field">
              <span>Type DELETE to confirm</span>
              <input
                type="text"
                value={deleteConfirm}
                onChange={(e) => setDeleteConfirm(e.target.value)}
                placeholder="DELETE"
              />
            </label>
            <button
              className="button danger-button wide"
              onClick={handleDeleteAccount}
              disabled={deleteConfirm !== 'DELETE' || deleting}
            >
              {deleting ? 'Deleting Account...' : 'Delete Account'}
            </button>
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

const profileStyles = `
  .profile-page {
    min-height: 100vh;
    padding: 28px;
    color: #172033;
    background:
      radial-gradient(circle at 12% 12%, rgba(20, 184, 166, 0.18), transparent 30%),
      radial-gradient(circle at 88% 8%, rgba(37, 99, 235, 0.17), transparent 28%),
      linear-gradient(180deg, #eef5ff 0%, #f8fafc 56%, #edf2f7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .profile-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile-nav,
  .profile-hero,
  .profile-stats,
  .profile-grid,
  .message {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }

  .profile-nav {
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

  .profile-nav h1 {
    margin: 8px 0 0;
    font-size: clamp(24px, 4vw, 34px);
  }

  .nav-actions {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 10px;
  }

  .profile-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 340px;
    gap: 22px;
    margin-bottom: 22px;
    padding: 34px;
    border-radius: 26px;
    color: #ffffff;
    background: linear-gradient(135deg, #172033 0%, #2563eb 58%, #14b8a6 100%);
    box-shadow: 0 24px 60px rgba(30, 41, 59, 0.2);
    position: relative;
    overflow: hidden;
    animation: fadeUp 720ms 80ms ease both;
  }

  .profile-hero::after {
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
  .identity-card {
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

  .identity-card {
    display: grid;
    grid-template-columns: 76px minmax(0, 1fr);
    gap: 16px;
    align-self: center;
    padding: 18px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
  }

  .identity-card span,
  .preview-card span,
  .stat-card span {
    display: block;
    margin-bottom: 7px;
    color: #64748b;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .identity-card span {
    color: rgba(255, 255, 255, 0.72);
  }

  .identity-card strong {
    display: block;
    overflow-wrap: anywhere;
    font-size: 18px;
  }

  .identity-card p {
    margin: 6px 0 0;
    overflow-wrap: anywhere;
    color: rgba(255, 255, 255, 0.72);
  }

  .avatar {
    width: 76px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 22px;
    background: #ffffff;
    color: #2563eb;
    font-size: 32px;
    font-weight: 900;
    animation: float 3s ease-in-out infinite;
  }

  .avatar.large {
    width: 92px;
    height: 92px;
    margin: 0 auto 18px;
    background: #e7f0ff;
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

  .eyebrow.danger {
    background: #fee2e2;
    color: #b91c1c;
  }

  .profile-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin-bottom: 22px;
  }

  .stat-card,
  .panel {
    border: 1px solid rgba(148, 163, 184, 0.18);
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 18px 46px rgba(15, 23, 42, 0.08);
    animation: fadeUp 740ms 120ms ease both;
    transition: transform 200ms ease, box-shadow 200ms ease;
  }

  .stat-card {
    padding: 22px;
    border-radius: 18px;
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

  .profile-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.85fr);
    gap: 20px;
  }

  .panel {
    padding: 28px;
    border-radius: 20px;
  }

  .panel-heading {
    margin-bottom: 22px;
  }

  .panel-heading h2 {
    margin: 14px 0 0;
    font-size: 28px;
    line-height: 1.1;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .field {
    display: grid;
    gap: 9px;
    margin-bottom: 18px;
    color: #334155;
    font-weight: 900;
  }

  .field input {
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

  .field input:focus {
    border-color: #2563eb;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
  }

  .preview-card {
    padding: 24px;
    border-radius: 18px;
    background: #f8fafc;
    text-align: center;
    animation: slideIn 520ms ease both;
  }

  .preview-card strong {
    display: block;
    overflow-wrap: anywhere;
    color: #172033;
    font-size: 20px;
  }

  .preview-card p {
    margin: 8px 0 0;
    overflow-wrap: anywhere;
    color: #64748b;
  }

  .danger-zone {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #fecaca;
    border-radius: 18px;
    background: #fff7f7;
  }

  .danger-zone h3 {
    margin: 14px 0 8px;
    color: #991b1b;
    font-size: 22px;
  }

  .danger-zone p {
    margin: 0 0 18px;
    color: #7f1d1d;
    line-height: 1.6;
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
    opacity: 0.62;
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

  @media (max-width: 940px) {
    .profile-nav,
    .profile-hero,
    .profile-grid {
      grid-template-columns: 1fr;
    }

    .profile-nav {
      align-items: flex-start;
      flex-direction: column;
    }

    .nav-actions {
      width: 100%;
      justify-content: flex-start;
    }

    .profile-stats,
    .form-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 560px) {
    .profile-page {
      padding: 12px;
    }

    .profile-hero,
    .panel,
    .profile-nav {
      padding: 20px;
      border-radius: 18px;
    }

    .identity-card {
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

export default Profile;
