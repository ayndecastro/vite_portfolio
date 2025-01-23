import PropTypes from 'prop-types';

const Skills = ({ skills }) => {
  return (
    <>
      {/* Experience Section */}
      <section id='skills' className='py-16 bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-white mb-8'>Skills</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-semibold text-white mb-4'>
                Languages
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                {skills.languages.map((skill, index) => (
                  <div
                    key={index}
                    className='bg-gray-900 rounded-lg p-4 text-center text-gray-300'
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-white mb-4'>
                Technologies
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                {skills.technologies.map((skill, index) => (
                  <div
                    key={index}
                    className='bg-gray-900 rounded-lg p-4 text-center text-gray-300'
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Skills.propTypes = {
  skills: PropTypes.shape({
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Skills;
