import PropTypes from 'prop-types';

const Experience = ({ experiences }) => {
  return (
    <>
      {/* Experience Section */}
      <section id='experience' className='py-16 bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-white mb-8'>
            Professional Experience
          </h2>
          <div className='space-y-8'>
            {experiences.map((exp, index) => (
              <div key={index} className='bg-gray-900 rounded-lg p-6 shadow-lg'>
                <div className='flex justify-between items-start'>
                  <div>
                    <h3 className='text-xl font-semibold text-white'>
                      {exp.title}
                    </h3>
                    <p className='text-gray-400 mt-1'>{exp.company}</p>
                  </div>
                  <div className='text-right'>
                    <p className='text-gray-400'>{exp.location}</p>
                    <p className='text-blue-400'>{exp.duration}</p>
                  </div>
                </div>
                <ul className='mt-4 space-y-2'>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className='text-gray-300 flex items-start'>
                      <span className='text-blue-400 mr-2'>•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className='bg-blue-900 text-blue-200 text-sm px-3 py-1 rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
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
