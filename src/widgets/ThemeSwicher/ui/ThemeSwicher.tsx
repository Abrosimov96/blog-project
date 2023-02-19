import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ThemeSwicherProps {
    className?: string;
}

export const ThemeSwicher = ({ className }: ThemeSwicherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}