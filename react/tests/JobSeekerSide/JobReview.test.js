import { getByTestId, queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import Review from '../../components/JobSeeker/Review/Review';

describe('Review Component', () => {
    render(<MemoryRouter><Review /></MemoryRouter>);

    test('FE_react_jobSeeker_review', () => {
        const comments = screen.queryByTestId('comments');

        expect(comments).toBeTruthy();
    })
    
})