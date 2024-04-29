import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JobDetailsPage = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobPointName, setJobPointName] = useState('');
  const [monthlySalary, setMonthlySalary] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    // Add validation logic here if needed

    // Navigate to the FamilyDetailsPage
    navigate('/family-details');
  };

  return (
    <div>
      <h2>Job Details</h2>
      <div>
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="jobPointName">Name of Job Point:</label>
        <input
          type="text"
          id="jobPointName"
          value={jobPointName}
          onChange={(e) => setJobPointName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="monthlySalary">Monthly Salary (LKR):</label>
        <input
          type="text"
          id="monthlySalary"
          value={monthlySalary}
          onChange={(e) => setMonthlySalary(e.target.value)}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default JobDetailsPage;
