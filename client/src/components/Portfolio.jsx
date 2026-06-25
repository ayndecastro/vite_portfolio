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
      role: 'Software Developer',
      achievements: [
        'Engineered an end-to-end automation platform utilizing Copilot and Power Automate',
        'Dynamically generated client-facing proposals into Word and Excel formats',
        'Secured the application platform by configuring federation and single sign-on (SSO) through Authentik and Microsoft Entra ID',
      ],
      tags: ['Copilot', 'Power Automate', 'SharePoint', 'Authentik', 'Entra ID', 'SSO'],
    },
    {
      title: 'Importer Service',
      company: 'RENAISSANCE SYSTEMS INC',
      duration: 'Aug 2023 - Mar 2024',
      description:
        'Led the design and implementation of a data processing service that automatically categorizes documents for OCR scanning, integrated LLMs for data extraction, and implemented LLM-powered validation pipelines.',
      role: 'Software Developer',
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
      title: 'Software Developer',
      company: 'RENAISSANCE SYSTEMS INC',
      location: 'Austin, TX',
      duration: 'Aug 2022 - Present',
      achievements: [
        'Architected and deployed an AI-assisted proposal generator leveraging Microsoft Copilot, Power Automate, and SharePoint, significantly accelerating the sales engineering pipeline',
        'Designed and integrated an automated pricing tool calculator within enterprise workflows, utilizing the Microsoft 365 suite to eliminate manual data entry errors and reducing manual workload by 50% across departments',
        'Implemented secure Identity and Access Management (IAM) infrastructure across internal IT tools utilizing Authentik and Microsoft Entra ID to enforce modern OAuth/SAML authentication protocols',
        'Designed and implemented data processing pipelines that improved document extraction accuracy by 90% and enhanced overall processing efficiency',
        'Developed reusable React components adopted across dozens of custom enterprise applications, improving UI consistency and UI development velocity',
        'Managed automation services processing 100,000+ documents daily, maintaining high data integrity and minimal system downtime',
      ],
      technologies: [
        'ReactJS',
        'Python',
        'Linux',
        'MySQL',
        'IBM DB2',
        'Azure AI',
        'Datadog',
        'Graylog',
        'Docker',
        'Grafana',
        'NGINX',
        'Microsoft Entra ID',
        'Authentik',
        'Power Automate',
        'SharePoint',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Band Barracks Studios',
      location: 'Houston, TX',
      duration: 'Mar 2020 - Mar 2025',
      achievements: [
        'Co-founded the project and architected a distributed Microservice system featuring proprietary APIs and automation solutions hosted entirely in the cloud',
        'Automated 80%+ of core operations, including customer onboarding, payment processing, ID verification, automated email pipelines, and real-time, room-level IoT studio access allowing the business to run fully autonomous, cutting operation cost by 70%',
        'Created and maintained robust database pipelines to ingest, process, and analyze data from third-party platforms, driving data-backed corporate strategy',
        'Designed microservices for asynchronous data automation tasks using containerized Docker solutions, increasing system availability and decoupling critical operations',
        'Built interactive operational dashboards using Power BI to visualize key business metrics, churn analysis, and financial performance for stakeholders',
      ],
      technologies: [
        'NodeJS',
        'Azure',
        'Power BI',
        'Google Analytics',
        'NGINX',
        'Python',
        'MongoDB',
        'WordPress',
        'Docker',
        'APIs',
        'IoT',
      ],
    },
  ];

  const skills = {
    languages: ['Python', 'JavaScript', 'SQL', 'HTML/CSS'],
    aiData: ['Ollama', 'AGY', 'Claude', 'Hermes', 'MCP Server'],
    frameworks: ['ReactJS', 'Node.js', 'Flask', 'RESTful APIs', 'SharePoint', 'Microsoft 365 Suite (Excel/Word)', 'Vite', 'Power BI'],
    cloudDevOps: ['Docker', 'Azure Portal', 'Azure AI Services', 'Authentik', 'Microsoft Entra ID', 'CI/CD'],
    automationTools: ['Power Automate', 'Git', 'Ansible', 'n8n', 'Zapier'],
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
            href='/VADC_RESUME_06_26.pdf'
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
