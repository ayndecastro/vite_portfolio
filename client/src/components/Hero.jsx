import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

import profileImage from '../assets/profile.png';
const HeroSection = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className='relative bg-gray-800 overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gray-900 opacity-75'></div>
        </div>
        <div className='relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='relative w-96 h-96 mx-auto rounded-full overflow-hidden ring-4 ring-gray-800 '>
              <img
                src={profileImage}
                alt='Profile'
                className='w-full h-full object-cover'
              />
            </div>
            <h2 className='mt-8 text-4xl font-bold text-white sm:text-5xl'>
              Software Developer
            </h2>
            <p className='mt-4 text-xl text-gray-300'>
              Specialize in building web applications with React and Node.js and
              process automation with Python.
            </p>
            <div className='mt-4 flex justify-center items-center gap-6 text-gray-300'>
              <div className='flex items-center'>
                <MapPin className='w-5 h-5 mr-2' />
                Austin, TX
              </div>
              <div className='flex items-center'>
                <Phone className='w-5 h-5 mr-2' />
                (737) 203-1105
              </div>
              <div className='flex items-center'>
                <Mail className='w-5 h-5 mr-2' />
                vincentayndecastro@gmail.com
              </div>
            </div>
            <div className='mt-8 flex justify-center gap-4'>
              <a
                href='https://github.com/ayndecastro'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github className='w-6 h-6 text-gray-300 hover:text-white cursor-pointer' />
              </a>
              <a
                href='https://linkedin.com/in/ayndecastro'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='w-6 h-6 text-gray-300 hover:text-white cursor-pointer' />
              </a>{' '}
              <a
                href='mailto:vincentayndecastro@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Mail className='w-6 h-6 text-gray-300 hover:text-white cursor-pointer' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
