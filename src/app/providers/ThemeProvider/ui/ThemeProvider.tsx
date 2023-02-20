import React, { FC } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
    initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        initialTheme,
        children
    } = props

    const [theme, setTheme] = React.useState<Theme>(initialTheme || defaultTheme)



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
