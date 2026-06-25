import PropTypes from 'prop-types';
import { Award, MapPin } from 'lucide-react';

const Education = ({ education }) => {
  return (
    <section id='education' className='py-20 border-b border-zinc-800 bg-zinc-950 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='flex items-center gap-4 mb-12'>
          <h2 className='text-2xl font-bold tracking-tight text-white font-sans'>
            Education & Credentials
          </h2>
          <div className='flex-grow h-px bg-zinc-800' />
          <span className='text-xs font-mono text-zinc-500'>// credentials.sys</span>
        </div>

        {/* Education Bento/Grid List */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {education.map((edu, index) => (
            <div
              key={index}
              className='border border-zinc-800 rounded-xl p-6 md:p-8 bg-zinc-900/10 backdrop-blur-sm flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300'
            >
              <div>
                <div className='flex justify-between items-start gap-4 mb-6'>
                  <div className='flex items-center gap-3'>
                    <Award className='w-5 h-5 text-emerald-400' />
                    <h3 className='text-lg font-bold text-white font-sans'>{edu.institution}</h3>
                  </div>
                  <span className='bg-emerald-950/20 border border-emerald-800/30 px-3 py-1 rounded-md text-xs font-mono text-emerald-400 whitespace-nowrap'>
                    {edu.date}
                  </span>
                </div>
                <h4 className='text-zinc-300 font-mono text-sm leading-relaxed mb-4'>
                  {edu.credential}
                </h4>
              </div>
              <div className='flex items-center gap-2 text-zinc-500 font-mono text-xs border-t border-zinc-800/60 pt-4 mt-4'>
                <MapPin className='w-3.5 h-3.5 text-zinc-600' />
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      institution: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      credential: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Education;
