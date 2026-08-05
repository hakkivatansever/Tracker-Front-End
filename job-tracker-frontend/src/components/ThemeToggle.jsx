import { useTheme } from '../ThemeContext'

export default function ThemeToggle() {
  const { dark, toggle } = useTheme()

  return (
    <button onClick={toggle} style={{
      width: '44px', height: '24px',
      borderRadius: '100px', border: 'none',
      background: dark ? 'dodgerblue' : 'whitesmoke',
      cursor: 'pointer', position: 'relative',
      transition: 'background 0.3s ease',
      flexShrink: 0
    }}>
      <div style={{
        position: 'absolute',
        top: '3px',
        left: dark ? '22px' : '3px',
        width: '18px', height: '18px',
        borderRadius: '50%',
        background: 'white',
        transition: 'left 0.3s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '10px'
      }}>
        {dark ? '🌙' : '☀️'}
      </div>
    </button>
  )
}