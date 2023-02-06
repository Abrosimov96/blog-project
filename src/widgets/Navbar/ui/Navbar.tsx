
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwicher } from 'widgets/ThemeSwicher';
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}:NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <ThemeSwicher />
        <div className={cls.links}>
            <AppLink 
                theme={AppLinkTheme.INVERTED} 
                to={'/'} 
                className={cls.mainLink}
            >
                Main
            </AppLink>
            <AppLink 
                theme={AppLinkTheme.INVERTED} 
                to={'/about'}
                >
                    About
            </AppLink>
        </div>
    </div>
  )
}
