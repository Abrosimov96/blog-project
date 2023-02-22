
import { screen } from '@testing-library/react';
import React from 'react';
import { componetRender } from 'shared/lib/tests/componentRender/componentsRender';
import userEvent from '@testing-library/user-event'
import { Counter } from './Counter';

describe('Counter', () => {
    test('Counter test', () => {
        componetRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('Counter increment', () => {
        componetRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        userEvent.click(screen.getByTestId('increment-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('Counter decrement', () => {
        componetRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        userEvent.click(screen.getByTestId('decrement-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
})