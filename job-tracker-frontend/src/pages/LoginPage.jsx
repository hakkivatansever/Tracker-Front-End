import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useTheme } from '../ThemeContext'
import ThemeToggle from '../components/ThemeToggle'

export default function LoginPage() {
  const navigate = useNavigate()
  const t = useTheme()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post('http://localhost:5041/api/Auth/login', form)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify({ fullName: res.data.fullName, email: res.data.email }))
      navigate('/dashboard')
    } catch {
      setError('Email or password is incorrect.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', padding: '11px 14px',
    background: t.inputBg, border: `1px solid ${t.inputBorder}`,
    borderRadius: '8px', color: t.text,
    fontSize: '14px', outline: 'none',
    boxSizing: 'border-box', transition: 'all 0.3s ease'
  }

  return (
    <div style={{
      width: '100%', minHeight: '100vh',
      background: t.bg, color: t.text,
      display: 'flex', flexDirection: 'column',
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      transition: 'background 0.3s ease'
    }}>

      <nav style={{
        padding: '18px 60px',
        borderBottom: `1px solid ${t.border}`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: t.navBg, backdropFilter: 'blur(20px)'
      }}>
        <div onClick={() => navigate('/')} style={{
          fontSize: '20px', fontWeight: 800,
          color: t.text, cursor: 'pointer', letterSpacing: '-0.5px'
        }}>
          Job<span style={{ color: '#3b82f6' }}>Tracker</span>
        </div>
        <ThemeToggle />
      </nav>

      <div style={{
        flex: 1, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        padding: '40px 20px'
      }}>
        <div style={{
          width: '100%', maxWidth: '420px',
          background: t.bgCard, border: `1px solid ${t.border}`,
          borderRadius: '20px', padding: '44px',
          transition: 'all 0.3s ease'
        }}>
          <h1 style={{ fontSize: '26px', fontWeight: 800, color: t.text, marginBottom: '6px', letterSpacing: '-0.5px' }}>
            Welcome back
          </h1>
          <p style={{ fontSize: '14px', color: t.textMuted, marginBottom: '32px' }}>
            Sign in to your account
          </p>

          {error && (
            <div style={{
              background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '8px', padding: '10px 14px',
              color: '#f87171', fontSize: '13px', marginBottom: '20px'
            }}>{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '13px', color: t.textMuted, fontWeight: 500, display: 'block', marginBottom: '6px' }}>Email</label>
              <input type="email" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com" required style={inputStyle} />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '13px', color: t.textMuted, fontWeight: 500, display: 'block', marginBottom: '6px' }}>Password</label>
              <input type="password" value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••" required style={inputStyle} />
            </div>

            <button type="submit" disabled={loading} style={{
              width: '100%', padding: '13px',
              background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
              border: 'none', borderRadius: '8px', color: 'white',
              fontSize: '15px', fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 0 30px rgba(37,99,235,0.3)',
              opacity: loading ? 0.7 : 1
            }}>
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '13px', color: t.textMuted }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: '#3b82f6', fontWeight: 600, textDecoration: 'none' }}>
              Create one free
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}