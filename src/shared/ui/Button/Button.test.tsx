
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button, ThemeButton } from './Button'
describe('Button', () => {
    test('test Button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('test Button Clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
})