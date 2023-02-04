import React, { FC } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider : FC = ({children}) => {
    const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  const defaultProps = React.useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
        {children}
    </ThemeContext.Provider>
  )
}
