import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true)
  const toggle = () => setDark(d => !d)

  const theme = {
    dark,
    toggle,
    bg: dark ? 'black' : 'whitesmoke',
    bgCard: dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
    border: dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
    text: dark ? 'whitesmoke' : 'navy',
    textMuted: dark ? 'slategray' : 'lightslategray',
    textLight: dark ? 'lightslategray' : 'lightsteelblue',
    navBg: dark ? 'rgba(6,9,16,0.85)' : 'rgba(248,250,252,0.85)',
    inputBg: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
    inputBorder: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)',
  }

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)