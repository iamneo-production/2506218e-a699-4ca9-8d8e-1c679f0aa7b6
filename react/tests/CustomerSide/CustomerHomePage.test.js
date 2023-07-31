import { queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import CustomerHomePage from '../../components/Customer/HomePage/HomePage';


describe('HomePage Component', () => {
    
    render(<MemoryRouter><CustomerHomePage /></MemoryRouter>)

    test('FE_react_customer_homePage', () => {
       const  homepage = screen.queryByTestId('homePage');
       const  jobSeekerName = screen.queryByTestId('jobSeekerName');

       expect(homepage).toBeTruthy();
       expect(jobSeekerName).toBeTruthy();
    })

})