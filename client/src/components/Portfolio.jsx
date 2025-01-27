import Header from './Header';
import HeroSection from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
// import Contact from './Contact';
import GithubTracker from './GithubTracker';

const Portfolio = () => {
  const projects = [
    {
      title: 'Affidavit Filing Portal',
      company: 'RENAISSANCE SYSTEMS INC',
      duration: 'Oct 2022 - Aug 2023',
      description:
        'A full-stack affidavit filing system with dynamic form adaptation based on user selections, reducing affidavit rejections by 80%.',
      role: 'Front-End Developer',
      achievements: [
        'Designed and implemented Application routing with adaptive forms',
        'Created custom input and table components with input-level validation',
        'Implemented React Redux for state management',
      ],
      tags: ['ReactJS', 'Redux', 'Custom Components'],
    },
    {
      title: 'Importer Service',
      company: 'RENAISSANCE SYSTEMS INC',
      duration: 'Aug 2023 - Mar 2024',
      description:
        'An automated service processing over 2,000 affidavits daily with Azure Document Intelligence integration.',
      role: 'Software Developer',
      achievements: [
        'Automated affidavit parsing and categorization',
        'Implemented Azure Document Intelligence with trained models',
        'Built examiner task management system',
      ],
      tags: ['Azure AI', 'OCR', 'Automation'],
    },
    {
      title: 'Studio Booking Automation',
      company: 'BAND BARRACKS STUDIOS',
      duration: 'Mar 2020 - May 2021',
      description:
        'Automated studio booking system with access control and recording automation.',
      role: 'Software Developer',
      achievements: [
        'Developed automated booking and access control system',
        'Integrated automated email notifications',
        'Implemented contactless ID verification',
      ],
      tags: ['Automation', 'Database', 'API Integration'],
    },
  ];

  const experiences = [
    {
      title: 'Software Developer',
      company: 'RENAISSANCE SYSTEMS INC',
      location: 'Austin, TX',
      duration: 'Aug 2022 - Present',
      achievements: [
        'Designed reusable ReactJS components reducing code duplication by 50%',
        'Ehanced document processing speed by 40% with process automation',
        'Created LMS for internal training and onboarding',
        'Implemented Azure AI for document processing',
      ],
      technologies: ['ReactJS', 'Azure AI', 'Video Streaming'],
    },
    {
      title: 'Software Developer',
      company: 'Band Barracks Studios',
      location: 'Houston, TX',
      duration: 'Mar 2020 - Present',
      achievements: [
        'Automated studio rental operations reducing costs by 60%',
        'Designed Azure database pipeline for power BI analytics',
        'Implemented social media campaign and analytics dashboard',
      ],
      technologies: ['Azure', 'Power BI', 'Google Analytics'],
    },
    {
      title: 'Software Developer Intern',
      company: '7Qube',
      location: 'Chicago, IL',
      duration: 'Mar 2021 - Jul 2021',
      achievements: [
        'Implemented ShipEngine API for tracking and label creation',
        'Created automated social media campaign dashboard',
        'Developed reusable ReactJS components reducing duplication by 20%',
      ],
      technologies: ['ReactJS', 'ShipEngine API', 'Social Media APIs'],
    },
  ];

  const skills = {
    languages: ['JavaScript', 'Python', 'HTML', 'CSS'],
    technologies: [
      'NodeJS',
      'ReactJS',
      'Flask',
      'Git',
      'Docker',
      'Azure Portal',
      'Azure AI',
      'db2',
      'MySQL',
      'MongoDB',
    ],
  };

  return (
    <div className='min-h-screen bg-gray-900 text-gray-100'>
      {/* Header */}
      <Header title='Ayn de Castro'>
        <div className='flex gap-4'>
          <a href='#projects' className='text-gray-300 hover:text-white'>
            Projects
          </a>
          <a href='#experience' className='text-gray-300 hover:text-white'>
            Experience
          </a>
          <a href='#skills' className='text-gray-300 hover:text-white'>
            Skills
          </a>
          {/* <a href='#contact' className='text-gray-300 hover:text-white'>
            Contact
          </a> */}
        </div>
      </Header>

      {/* Hero Section with Background Image */}
      <HeroSection />
      {/* github contribution tracker */}
      <GithubTracker />

      {/* Experience Section */}
      <Experience experiences={experiences} />

      {/* Projects Section */}
      <Projects projects={projects} />

      {/* Skills Section */}
      <Skills skills={skills} />

      {/* Contact Section */}
      {/* <Contact /> */}
    </div>
  );
};

export default Portfolio;
