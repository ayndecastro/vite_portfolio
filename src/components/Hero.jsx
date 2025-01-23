import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

import profileImage from '../assets/profile.jpg';
const HeroSection = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className='relative bg-gray-800 overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src={profileImage}
            alt='Profile'
            className=' h-full object-cover opacity-20'
          />
          <div className='absolute inset-0 opacity-75'></div>
        </div>
        <div className='relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold text-white sm:text-5xl'>
              Software Developer
            </h2>
            <p className='mt-4 text-xl text-gray-300'>
              Specializing in ReactJS, Azure AI, and Full-Stack Development
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
                ayndecastro@gmail.com
              </div>
            </div>
            <div className='mt-8 flex justify-center gap-4'>
              <Github className='w-6 h-6 text-gray-300 hover:text-white cursor-pointer' />
              <Linkedin className='w-6 h-6 text-gray-300 hover:text-white cursor-pointer' />
              <Mail className='w-6 h-6 text-gray-300 hover:text-white cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
