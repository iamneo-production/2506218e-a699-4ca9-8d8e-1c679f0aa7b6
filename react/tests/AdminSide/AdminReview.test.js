import { getByTestId, queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import Review from '../../components/Admin/Review/Review';

describe('Product Review Component', () => {
    render(<MemoryRouter><Review /></MemoryRouter>);

    test('FE_react_admin_review', () => {
        const userId = screen.queryByTestId('userId');

        expect(userId).toBeTruthy();
    })
    
})