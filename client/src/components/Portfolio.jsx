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
        'A full-stack affidavit filing system with dynamic form adaptation based on user actions allowing for dynamic data entry and validation.',
      role: 'Front-End Developer',
      achievements: [
        'Designed and implemented Application routing with adaptive forms',
        'Created custom input and table components with input-level validation',
        'Implemented React Redux for state management',
      ],
      tags: ['ReactJS', 'Redux', 'Python Flask'],
    },
    {
      title: 'Automated Document Processing Service',
      company: 'RENAISSANCE SYSTEMS INC',
      duration: 'Aug 2023 - Mar 2024',
      description:
        'An automated service processing over 2,000 affidavits daily with Azure Document Intelligence integration.',
      role: 'Software Developer',
      achievements: [
        'Automated document processing with page level categorization, scanning and validation',
        'Implemented Azure Document Intelligence with trained models for data extraction',
        'automated container scaling with kubernetes based on document volume',
      ],
      tags: ['Azure AI', 'OCR', 'Automation', 'docker'],
    },
    {
      title: 'Studio Booking Automation',
      company: 'BAND BARRACKS STUDIOS',
      duration: 'Mar 2020 - May 2021',
      description:
        'Automated studio booking system with access control and session recording automation.',
      role: 'Software Developer',
      achievements: [
        'Developed automated booking and access control system',
        'Integrated automated email notifications',
        'Implemented contactless ID verification',
      ],
      tags: ['NodeJS', 'Automation', 'API Integration'],
    },
  ];

  const experiences = [
    {
      title: 'Software Developer',
      company: 'RENAISSANCE SYSTEMS INC',
      location: 'Austin, TX',
      duration: 'Aug 2022 - Present',
      achievements: [
        'Designed reusable ReactJS components and custom hooks reducing code duplication by 50%',
        'Built automated document processing service with Azure Document Intelligence reducing manual effort by 80%',
        'Created proprietary LMS for internal training and onboarding',
        'Developed an affidavit filing portal with dynamic form adaptation reducing manual effort by 50%',
        'Integrated application monitoring with Datadog and log collection with Graylog',
      ],
      technologies: [
        'ReactJS',
        'Python',
        'SQL',
        'Azure AI',
        'Datadog',
        'Graylog',
        'Docker',
      ],
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
      technologies: ['NodeJS', 'Azure', 'Power BI', 'Google Analytics'],
    },
    {
      title: 'Software Developer Intern',
      company: '7Qube',
      location: 'Chicago, IL',
      duration: 'Mar 2021 - Jul 2021',
      achievements: [
        'Implemented third-party API for analytics dashboard and operations dashboard',
        'Created automated social media campaign dashboard',
        'Developed reusable ReactJS components for a variety of dashboards and data visualizations',
      ],
      technologies: ['ReactJS', 'API Integration', 'Django'],
    },
  ];

  const skills = {
    languages: ['JavaScript', 'Python', 'HTML', 'CSS', 'SQL', 'NoSQL'],
    technologies: [
      'NodeJS',
      'ReactJS',
      'Flask',
      'Django',
      'Git',
      'Docker',
      'Azure Portal',
      'Azure AI',
      'db2',
      'MySQL',
      'MongoDB',
      'datadog',
      'Graylog',
    ],
  };
  const nav = ['Experience', 'Projects', 'Skills'];

  return (
    <div className='min-h-screen bg-gray-900 text-gray-100'>
      {/* Header */}
      <Header title='Ayn de Castro'>
        <div className='flex gap-4'>
          {nav.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className='text-gray-300 hover:text-white'
            >
              {item}
            </a>
          ))}
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
