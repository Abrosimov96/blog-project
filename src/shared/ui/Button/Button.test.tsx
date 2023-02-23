
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button, ButtonTheme } from './Button'
describe('Button', () => {
    test('test Button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('test Button Clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
})