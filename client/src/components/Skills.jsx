import PropTypes from 'prop-types';
import { Code2, Cpu, Layers, Cloud, Wrench, Database } from 'lucide-react';

const Skills = ({ skills }) => {
  const categories = [
    { key: 'languages', title: 'Languages', icon: Code2 },
    { key: 'aiData', title: 'AI & Data Technologies', icon: Cpu },
    { key: 'frameworks', title: 'Frameworks & Libraries', icon: Layers },
    { key: 'cloudDevOps', title: 'Cloud, DevOps & Security', icon: Cloud },
    { key: 'automationTools', title: 'Automation & Tools', icon: Wrench },
    { key: 'databases', title: 'Databases', icon: Database },
  ];

  return (
    <section id='skills' className='py-20 border-b border-zinc-800 bg-zinc-950 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='flex items-center gap-4 mb-12'>
          <h2 className='text-2xl font-bold tracking-tight text-white font-sans'>
            Technical Skills
          </h2>
          <div className='flex-grow h-px bg-zinc-800' />
          <span className='text-xs font-mono text-zinc-500'>// capabilities.sys</span>
        </div>

        {/* Bento Grid layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const items = skills[cat.key] || [];

            return (
              <div
                key={cat.key}
                className='border border-zinc-800 rounded-xl p-6 bg-zinc-900/10 backdrop-blur-sm flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300'
              >
                <div>
                  <div className='flex items-center gap-3 mb-6'>
                    <Icon className='w-5 h-5 text-emerald-400' />
                    <h3 className='text-base font-bold text-white font-sans'>{cat.title}</h3>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {items.map((skill, index) => (
                      <span
                        key={index}
                        className='bg-zinc-950 border border-zinc-850 text-zinc-300 text-xs font-mono px-2.5 py-1 rounded-md hover:border-emerald-500/40 transition-colors duration-300'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Skills.propTypes = {
  skills: PropTypes.shape({
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    aiData: PropTypes.arrayOf(PropTypes.string).isRequired,
    frameworks: PropTypes.arrayOf(PropTypes.string).isRequired,
    cloudDevOps: PropTypes.arrayOf(PropTypes.string).isRequired,
    automationTools: PropTypes.arrayOf(PropTypes.string).isRequired,
    databases: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Skills;
