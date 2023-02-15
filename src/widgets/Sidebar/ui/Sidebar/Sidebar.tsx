import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { ThemeSwicher } from 'widgets/ThemeSwicher'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {

    const [collapsed, setCollapsed] = React.useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])} >
            <button
                data-testid='sidebar-toggle'
                onClick={onToggle}
            >
                Toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwicher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
}