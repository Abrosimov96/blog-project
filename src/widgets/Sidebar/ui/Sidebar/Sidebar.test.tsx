
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { renderWithTranslation }
    from 'shared/lib/classNames/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';
describe('Sidebar', () => {
    test('Sidebar test', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Sidebar toggle', () => {
        renderWithTranslation(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    });
})