import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubTracker = () => {
  return (
    <div className='github-tracker flex justify-center py-8'>
      <div className='w-full max-w-4xl flex flex-col items-start px-6'>
        <h2 className='text-2xl font-bold mb-4'>GitHub Contributions</h2>
        <GitHubCalendar username='ayndecastro' />
      </div>
    </div>
  );
};

export default GithubTracker;
