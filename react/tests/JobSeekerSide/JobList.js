import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JobList from '../../components/JobSeeker/JobList/JobList';
import { MemoryRouter } from 'react-router';

describe('jobList', () => {
  test('FE_react_jobSeeker_homePage', () => {
    render(<MemoryRouter><JobList /></MemoryRouter>);

    const jobName = screen.getByTestId('jobName');
    const role = screen.getByTestId('role');

    expect(jobName).toBeTruthy();
    expect(role).toBeTruthy();

  });
});