import PropTypes from 'prop-types';
import { ArrowUpRight, FolderClosed } from 'lucide-react';

const Projects = ({ projects }) => {
  return (
    <section id='projects' className='py-20 border-b border-zinc-800 bg-zinc-950 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='flex items-center gap-4 mb-12'>
          <h2 className='text-2xl font-bold tracking-tight text-white font-sans'>
            Featured Projects
          </h2>
          <div className='flex-grow h-px bg-zinc-800' />
          <span className='text-xs font-mono text-zinc-500'>// showcase.sys</span>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative bg-zinc-900/10 border border-zinc-800 rounded-xl overflow-hidden hover:border-emerald-500/40 hover:bg-zinc-900/20 transition-all duration-500 flex flex-col justify-between'
            >
              {/* Outer Glow on hover */}
              <div className='absolute -inset-px rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-10 blur-sm transition duration-500 pointer-events-none' />

              <div className='p-6 md:p-8 relative z-10 flex-grow flex flex-col justify-between'>
                <div>
                  {/* Card Header metadata */}
                  <div className='flex justify-between items-center mb-6 font-mono text-xs text-zinc-500'>
                    <div className='flex items-center gap-2'>
                      <FolderClosed className='w-4 h-4 text-emerald-400' />
                      <span>PROJECT_0{index + 1}</span>
                    </div>
                    <span>{project.duration}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className='text-xl font-bold text-white transition-colors duration-300 font-sans'>
                    {project.link ? (
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-emerald-400 flex items-center gap-1.5 group/link'
                      >
                        {project.title}
                        <ArrowUpRight className='w-4 h-4 text-zinc-500 group-hover/link:text-emerald-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300' />
                      </a>
                    ) : (
                      <span className='group-hover:text-emerald-400 flex items-center gap-1.5'>
                        {project.title}
                        <ArrowUpRight className='w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300' />
                      </span>
                    )}
                  </h3>

                  {/* Description */}
                  <p className='text-zinc-400 text-sm leading-relaxed mt-3 mb-6'>
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <ul className='space-y-2 mb-6'>
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className='text-zinc-400 text-xs flex items-start leading-relaxed'>
                        <span className='text-emerald-400 mr-2 font-mono'>▫</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className='flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60'>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='bg-zinc-950 border border-zinc-800 text-zinc-400 text-[10px] font-mono px-2 py-0.5 rounded uppercase'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default Projects;
