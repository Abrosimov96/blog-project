import React from 'react'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { ThemeSwicher } from 'widgets/ThemeSwicher'
import AboutIcon from 'shared/assets/icons/about_icon.svg'
import MainIcon from 'shared/assets/icons/main_icon.svg'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {

    const { t } = useTranslation()

    const [collapsed, setCollapsed] = React.useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])} >
            <Button
                data-testid='sidebar-toggle'
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Main')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('About Us')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwicher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    )
}