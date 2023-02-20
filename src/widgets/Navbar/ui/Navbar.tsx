
import { t } from 'i18next';
import { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])


    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Log in')}
            </Button >
            <Modal isOpen={isAuthModal} onClose={onToggleModal} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Hic debitis culpa magni facere ad voluptas maxime deserunt
                natus ullam perspiciatis molestias,
                voluptate perferendis iure nam, repellendus nesciunt quod eligendi architecto.
            </Modal>
        </div>
    )
}
