import { queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import AddJob from '../../components/Customer/AddJob/AddJob';


describe('Job Component', () => {
    
    const {container} = render(<MemoryRouter><AddJob /></MemoryRouter>)

    test('FE_react_customer_addJob', () => {
       const  jobTitle = screen.queryByTestId('jobTitle');
       const  startDate = screen.queryByTestId('startDate');
       const  endDate = screen.queryByTestId('endDate');
       const  role = screen.queryByTestId('role');
	   
	   expect(jobTitle).toBeTruthy();
	   expect(startDate).toBeTruthy();
       expect(endDate).toBeTruthy();
	   expect(role).toBeTruthy();
    })

})