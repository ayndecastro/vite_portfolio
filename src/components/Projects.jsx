import PropTypes from 'prop-types';

const Projects = ({ projects }) => {
  return (
    <>
      {/* Experience Section */}
      <section id='projects' className='py-16 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-white mb-8'>
            Featured Projects
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='bg-gray-800 rounded-lg shadow-lg overflow-hidden'
              >
                <div className='p-6'>
                  <div className='flex justify-between items-start mb-4'>
                    <h3 className='text-xl font-semibold text-white'>
                      {project.title}
                    </h3>
                    <span className='text-sm text-gray-400'>
                      {project.duration}
                    </span>
                  </div>
                  <p className='text-gray-300 mb-4'>{project.description}</p>
                  <ul className='mb-4 space-y-2'>
                    {project.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className='text-gray-300 flex items-start text-sm'
                      >
                        <span className='text-blue-400 mr-2'>•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className='flex flex-wrap gap-2 mt-4'>
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className='bg-blue-900 text-blue-200 text-sm px-3 py-1 rounded-full'
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
    </>
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
    })
  ).isRequired,
};

export default Projects;
