import { getByTestId, queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import Review from '../../components/Customer/Review/Review';

describe('Review Component', () => {
    render(<MemoryRouter><Review /></MemoryRouter>);

    test('FE_react_customer_review', () => {
        const userId = screen.queryByTestId('userId');

        expect(userId).toBeTruthy();
    })
    
})