import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import AppliedJobs from '../../components/Customer/AppliedJobs/AppliedJobs';

describe ('AppliedJobs Component' ,() => {
	const {  container } = render(<MemoryRouter><AppliedJobs /></MemoryRouter>) ;
        
    test('FE_react_customer_appliedJobs', () => {
       const  jobId = screen.queryByTestId('jobId');
       const  jobSeekerId = screen.queryByTestId('jobSeekerId');
	   
	   expect(jobId).toBeTruthy();
	   expect(jobSeekerId).toBeTruthy();
    })
})