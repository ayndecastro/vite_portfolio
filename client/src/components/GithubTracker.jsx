import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const GithubTracker = () => {
  return (
    <section className='py-20 border-b border-zinc-800 bg-zinc-950 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='flex items-center gap-4 mb-12'>
          <h2 className='text-2xl font-bold tracking-tight text-white font-sans'>
            Contributions Activity
          </h2>
          <div className='flex-grow h-px bg-zinc-800' />
          <span className='text-xs font-mono text-zinc-500'>// github.api</span>
        </div>

        {/* Calendar Wrapper */}
        <div className='border border-zinc-800 rounded-xl p-6 md:p-8 bg-zinc-900/10 backdrop-blur-sm flex justify-center items-center overflow-x-auto'>
          <div className='min-w-[800px] flex flex-col items-start w-full max-w-4xl'>
            <div className='text-xs font-mono text-zinc-500 mb-6'>
              [repository_contribution_log_loaded]
            </div>
            <GitHubCalendar
              username='ayndecastro'
              fontSize={12}
              blockSize={12}
              blockMargin={4}
              colorScheme='dark'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubTracker;
