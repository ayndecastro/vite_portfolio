import PropTypes from 'prop-types';

const Experience = ({ experiences }) => {
  return (
    <section id='experience' className='py-20 border-b border-zinc-800 bg-zinc-950 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='flex items-center gap-4 mb-12'>
          <h2 className='text-2xl font-bold tracking-tight text-white font-sans'>
            Professional Experience
          </h2>
          <div className='flex-grow h-px bg-zinc-800' />
          <span className='text-xs font-mono text-zinc-500'>// history.log</span>
        </div>

        {/* Experience Bento/Grid List */}
        <div className='border border-zinc-800 rounded-lg overflow-hidden divide-y divide-zinc-800 bg-zinc-900/10 backdrop-blur-sm'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='grid grid-cols-1 lg:grid-cols-4 hover:bg-zinc-900/30 transition-all duration-300'
            >
              {/* Left Column: Organization & Timeframe */}
              <div className='lg:col-span-1 p-6 md:p-8 bg-zinc-950/40 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-between'>
                <div>
                  <h4 className='text-lg font-bold text-white font-sans'>{exp.company}</h4>
                  <p className='text-xs font-mono text-zinc-500 mt-1 uppercase tracking-wider'>{exp.location}</p>
                </div>
                <div className='mt-4 lg:mt-0'>
                  <span className='inline-block bg-emerald-950/20 border border-emerald-800/30 px-3 py-1 rounded-md text-xs font-mono text-emerald-400'>
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Right Column: Title & Achievements */}
              <div className='lg:col-span-3 p-6 md:p-8 flex flex-col justify-between'>
                <div>
                  <h3 className='text-xl font-bold text-white font-sans mb-4 flex items-center gap-2'>
                    <span className='h-1.5 w-1.5 rounded-full bg-emerald-400'></span>
                    {exp.title}
                  </h3>
                  <ul className='space-y-3'>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className='text-zinc-400 text-sm leading-relaxed flex items-start'>
                        <span className='text-emerald-400 font-mono mr-2.5 mt-1 text-xs'>❯</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stacks/Technologies */}
                <div className='mt-8 pt-6 border-t border-zinc-800/60'>
                  <div className='text-xs font-mono text-zinc-500 mb-3'>[technologies_utilized]</div>
                  <div className='flex flex-wrap gap-2'>
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className='bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono px-2.5 py-1 rounded'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Experience.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Experience;
