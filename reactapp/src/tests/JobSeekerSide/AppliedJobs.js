import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import AppliedJobs from '../../components/JobSeeker/AppliedJobs/AppliedJobs';

describe ('AppliedJobs Component' ,() => {
	const {  container } = render(<MemoryRouter><AppliedJobs /></MemoryRouter>) ;
        
    test('FE_react_jobSeeker_appliedJobs', () => {
       const  jobName = screen.queryByTestId('jobName');
       const  role = screen.queryByTestId('role');
	   
	   expect(jobName).toBeTruthy();
	   expect(role).toBeTruthy();
    })
})