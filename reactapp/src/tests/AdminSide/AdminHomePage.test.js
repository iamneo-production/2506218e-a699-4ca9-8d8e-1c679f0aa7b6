import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminHomePage from '../../components/Admin/AdminHomePage/AdminHomePage';
import { MemoryRouter } from 'react-router';

describe('<Admin HomePage />', () => {
  test('FE_react_admin_homepage', () => {
    render(<MemoryRouter><AdminHomePage /></MemoryRouter>);

    const customerName = screen.getByTestId('customerName');
    const totalJobs = screen.getByTestId('totalJobs');
    const removeCustomerButton = screen.getByTestId('removeCustomerButton');

    expect(customerName).toBeTruthy();
    expect(totalJobs).toBeTruthy();
    expect(removeCustomerButton).toBeTruthy();
  });
});