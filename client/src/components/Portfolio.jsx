import Header from './Header';
import HeroSection from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import GithubTracker from './GithubTracker';

const Portfolio = () => {
  const projects = [
    {
      title: 'AI-Assisted Proposal Generator & Pricing Tool',
      company: 'RENAISSANCE SYSTEMS INC',
      duration: 'Aug 2022 - Present',
      description:
        'Engineered an end-to-end automation platform utilizing Copilot and Power Automate to dynamically generate client-facing proposals into Word and Excel formats, and secured it via Authentik/Entra ID SSO.',
      role: 'Full Stack Software Engineer',
      achievements: [
        'Engineered an end-to-end automation platform utilizing Copilot and Power Automate',
        'Dynamically generated client-facing proposals into Word and Excel formats',
        'Secured the application platform by configuring federation and single sign-on (SSO) through Authentik and Microsoft Entra ID',
      ],
      tags: ['Copilot', 'Power Automate', 'SharePoint', 'Authentik', 'Entra ID', 'SSO'],
    },
    {
      title: 'Intelligent Document Processing (IDP) Service',
      company: 'RENAISSANCE SYSTEMS INC',
      duration: 'Aug 2023 - Mar 2024',
      description:
        'Led the design and implementation of a data processing service that automatically categorizes documents for OCR scanning, integrated LLMs for data extraction, and implemented LLM-powered validation pipelines.',
      role: 'Full Stack Software Engineer',
      achievements: [
        'Led the design and implementation of a data processing service automatically categorizing documents for OCR scanning',
        'Integrated Large Language Models (LLMs) to enhance document processing and accuracy in data extraction',
        'Developed an automated pipeline processing documents daily with LLM-powered validation and error correction',
        'Implemented classification algorithms reducing processing time while maintaining high data quality',
        'Created feedback systems where model outputs continuously improved performance through iterative learning',
      ],
      tags: ['OCR', 'LLMs', 'Classification', 'Automation', 'Python', 'Docker'],
    },
    {
      title: 'Studio Booking Automation',
      company: 'BAND BARRACKS STUDIOS',
      duration: 'Mar 2020 - May 2021',
      description:
        'Co-founded the company and designed/implemented the entire tech stack, from Azure cloud hosting to automated access control and analytics reporting.',
      role: 'Co-Founder & Lead Developer',
      achievements: [
        'Implemented automated data collection for studio sessions and customer interactions',
        'Integrated third-party APIs for identity verification, enhancing data security and validation',
        'Developed a system that improved operational efficiency by automating previously manual processes',
      ],
      tags: ['NodeJS', 'Python', 'Automation', 'API Integration', 'Azure', 'WordPress', 'MongoDB'],
      link: 'https://bandbarracks.com/',
    },
  ];

  const experiences = [
    {
      title: 'Full Stack Software Engineer',
      company: 'RENAISSANCE SYSTEMS INC',
      location: 'Austin, TX',
      duration: 'Aug 2022 - Present',
      achievements: [
        'Led end-to-end design and deployment of an IT automation suite, integrating Microsoft Copilot, Power Automate, and SharePoint to build a unified AI proposal generator that dynamically compiles client-facing deliverables and cuts manual sales engineering work by over 50%.',
        'Led the implementation of a secure Identity and Access Management (IAM) infrastructure across internal tools via Authentik and Microsoft Entra ID, enforcing modern OAuth/SAML protocols while ensuring seamless backward compatibility with legacy LDAP systems.',
        'Designed and scaled an Intelligent Document Processing (IDP) service handling 100,000+ files daily; integrated LLMs, automated container scaling via Kubernetes, and iterative learning loops to achieve a 90% accuracy boost in OCR extraction.',
        'Core member of a team that engineered enterprise web features, including a full-stack Affidavit Filing Portal with dynamic form adaptation, a proprietary onboarding LMS, and highly reusable ReactJS components that cut UI development duplication by 50%.',
        'Greatly contributed to the development of a data consolidation and observability platform using Datadog and Graylog to monitor and visualize performance across a distributed system.',
      ],
      technologies: [
        'ReactJS',
        'Redux',
        'Node.js',
        'Python',
        'MySQL',
        'IBM DB2',
        'Docker',
        'Kubernetes',
        'Azure Portal',
        'Azure AI Services',
        'Authentik',
        'Microsoft Entra ID',
        'Datadog',
        'Graylog',
        'Power Automate',
        'SharePoint',
        'Microsoft 365 Suite (Excel/Word)',
      ],
    },
    {
      title: 'Full Stack Software Engineer',
      company: 'Band Barracks Studios',
      location: 'Houston, TX',
      duration: 'Mar 2020 - Mar 2025',
      achievements: [
        'Co-founded the project and engineered a cloud-hosted, distributed microservices infrastructure with proprietary APIs to completely automate core business operations.',
        'Designed an end-to-end studio booking automation system managing customer onboarding, payment processing, third-party ID verification, and real-time room-level IoT facility access, slashing operational overhead by 70%.',
        'Created and maintained robust database pipelines to ingest, clean, and analyze data from third-party platforms, providing leadership with interactive Power BI and Google Analytics dashboards to track churn and financial KPIs.',
        'Containerized application microservices using Docker to handle asynchronous data automation tasks, significantly increasing system availability and decoupling critical fault domains.',
      ],
      technologies: [
        'Node.js',
        'Azure Portal',
        'Power BI',
        'Google Analytics',
        'Python',
        'MongoDB',
        'Docker',
        'APIs',
        'IoT',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: '7QUBE',
      location: 'Chicago, IL',
      duration: 'Mar 2021 - Jul 2021',
      achievements: [
        'Developed reusable ReactJS components for a variety of internal dashboards, optimizing data visualization flow and frontend rendering efficiency.',
        'Built backend features and custom operational tools using Django, seamlessly integrating third-party APIs to power automated data campaigns.',
      ],
      technologies: ['ReactJS', 'Django', 'Python', 'APIs'],
    },
  ];

  const skills = {
    languages: ['Python', 'JavaScript', 'SQL', 'HTML/CSS'],
    aiData: [
      'LLM-backed tools',
      'Prompt Engineering',
      'Automated Evals',
      'Data Pipeline Development',
      'Database Design',
      'ETL Processes',
    ],
    frameworks: [
      'ReactJS',
      'Redux',
      'Node.js',
      'Flask',
      'Django',
      'RESTful APIs',
    ],
    cloudDevOps: [
      'Docker',
      'Kubernetes',
      'Azure Portal',
      'Azure AI Services',
      'Authentik',
      'Microsoft Entra ID',
      'Datadog',
      'Graylog',
      'CI/CD',
    ],
    automationTools: [
      'Power Automate',
      'SharePoint',
      'Microsoft 365 Suite (Excel/Word)',
      'Git',
      'Vite',
      'Power BI',
      'Google Analytics',
      'MCP Server',
    ],
    databases: ['MySQL', 'MongoDB', 'DB2', 'PostgreSQL'],
  };

  const education = [
    {
      institution: 'Austin Community College',
      location: 'Austin, TX',
      credential: 'Certificate: Computer Information Technology: Computer Programming-Data Science',
      date: 'Jul 2021',
    },
    {
      institution: 'University of Texas',
      location: 'Austin, TX',
      credential: 'Certificate: Full-Stack Web Development Coding Bootcamp',
      date: 'Jan 2019',
    },
  ];

  const nav = ['Experience', 'Projects', 'Skills', 'Education', 'Contact'];

  return (
    <div className='min-h-screen bg-zinc-950 text-zinc-100 font-sans grid-bg radial-bg selection:bg-emerald-500/20 selection:text-emerald-300'>
      {/* Header */}
      <Header title='Ayn de Castro'>
        <div className='flex items-center gap-6'>
          {nav.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className='text-zinc-400 hover:text-emerald-400 font-mono transition-colors duration-200 uppercase tracking-widest text-xs'
            >
              // {item}
            </a>
          ))}
          <a
            href='/vincentayndecastro_resume.pdf'
            download='Vincent_Ayn_de_Castro_Resume.pdf'
            className='bg-emerald-950/30 border border-emerald-800/40 text-emerald-400 hover:bg-emerald-800/20 px-3 py-1.5 rounded font-mono text-xs transition-colors duration-200'
          >
            // download_cv()
          </a>
        </div>
      </Header>

      {/* Hero Section */}
      <HeroSection />

      {/* GitHub Tracker */}
      <GithubTracker />

      {/* Experience Section */}
      <Experience experiences={experiences} />

      {/* Projects Section */}
      <Projects projects={projects} />

      {/* Skills Section */}
      <Skills skills={skills} />

      {/* Education Section */}
      <Education education={education} />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Portfolio;
