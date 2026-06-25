import { Github, Linkedin, Mail, MapPin, Phone, MessageSquare, Briefcase } from 'lucide-react';
import profileImage from '../assets/profile.png';

const HeroSection = () => {
  return (
    <section className='relative border-b border-zinc-800 bg-zinc-950 overflow-hidden'>
      {/* Background radial glow */}
      <div className='absolute inset-0 radial-bg pointer-events-none' />

      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 border-x border-zinc-800'>
        {/* Left Bento Column (Spans 2 columns on desktop) */}
        <div className='lg:col-span-2 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800 relative z-10'>
          <div>
            {/* Tagline Badge */}
            <div className='inline-flex items-center gap-2 bg-emerald-950/30 border border-emerald-800/40 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 font-mono mb-8'>
              <span className='h-1.5 w-1.5 rounded-full bg-emerald-400'></span>
              SYSTEMS & INTEGRATIONS
            </div>

            <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-none'>
              Vincent <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500'>Ayn de Castro</span>
            </h2>
            <h3 className='text-lg md:text-xl font-mono text-zinc-400 mt-4 tracking-wider uppercase'>
              // Full-Stack Full Stack Software Engineer
            </h3>

            <p className='mt-6 text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl'>
              I specialize in building high-performance web applications with React and Node.js,
              and automating complex business workflows using Python and Cloud Integrations. Based in Austin, TX, I focus on building robust, scalable solutions.
            </p>
          </div>

          <div className='mt-12'>
            {/* Quick stats / metadata bar */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-zinc-800 py-6 mb-8 text-sm font-mono text-zinc-400'>
              <div className='flex items-center gap-3'>
                <MapPin className='w-4 h-4 text-emerald-400' />
                <span>Austin, TX</span>
              </div>
              <div className='flex items-center gap-3'>
                <Briefcase className='w-4 h-4 text-emerald-400' />
                <span>5+ Years Exp</span>
              </div>
              <div className='flex items-center gap-3'>
                <Mail className='w-4 h-4 text-emerald-400' />
                <span className='truncate'>vincentayndecastro@gmail.com</span>
              </div>
            </div>

            {/* CTAs */}
            <div className='flex flex-wrap gap-4'>
              <a
                href='#contact'
                className='inline-flex items-center gap-2 bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all font-medium py-3 px-6 rounded-lg text-sm shadow-lg shadow-emerald-500/10'
              >
                <MessageSquare className='w-4 h-4' />
                Contact Me
              </a>
              <a
                href='#projects'
                className='inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-200 hover:bg-zinc-800 hover:text-white transition-all font-medium py-3 px-6 rounded-lg text-sm font-mono'
              >
                // view_projects()
              </a>
              <a
                href='/vincentayndecastro_resume.pdf'
                download='Vincent_Ayn_de_Castro_Resume.pdf'
                className='inline-flex items-center gap-2 bg-zinc-900 border border-zinc-850 text-emerald-400 hover:bg-zinc-800 transition-all font-medium py-3 px-6 rounded-lg text-sm font-mono'
              >
                // download_resume()
              </a>
            </div>
          </div>
        </div>

        {/* Right Bento Column */}
        <div className='flex flex-col bg-zinc-950/50 relative z-10'>
          {/* Avatar Panel */}
          <div className='p-8 flex items-center justify-center border-b border-zinc-800 bg-zinc-900/20'>
            <div className='relative group'>
              {/* Outer Cyan Ring and Glow */}
              <div className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur group-hover:opacity-40 transition duration-1000 group-hover:duration-200'></div>
              <div className='relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-950'>
                <img
                  src={profileImage}
                  alt='Vincent Ayn de Castro'
                  className='w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500 ease-in-out'
                />
              </div>
            </div>
          </div>

          {/* Social Links Panel */}
          <div className='p-8 flex flex-col justify-center flex-grow'>
            <div className='text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4'>// Connect social</div>
            <div className='grid grid-cols-3 border border-zinc-850 rounded-lg overflow-hidden divide-x divide-zinc-850 bg-zinc-950'>
              <a
                href='https://github.com/ayndecastro'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center justify-center p-4 hover:bg-zinc-900/60 transition-all text-zinc-400 hover:text-white border-zinc-800 group'
              >
                <Github className='w-5 h-5 group-hover:text-emerald-400 transition-colors' />
                <span className='text-[10px] font-mono mt-1 text-zinc-500 group-hover:text-zinc-300'>GitHub</span>
              </a>
              <a
                href='https://linkedin.com/in/ayndecastro'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center justify-center p-4 hover:bg-zinc-900/60 transition-all text-zinc-400 hover:text-white border-zinc-800 group'
              >
                <Linkedin className='w-5 h-5 group-hover:text-emerald-400 transition-colors' />
                <span className='text-[10px] font-mono mt-1 text-zinc-500 group-hover:text-zinc-300'>LinkedIn</span>
              </a>
              <a
                href='mailto:vincentayndecastro@gmail.com'
                className='flex flex-col items-center justify-center p-4 hover:bg-zinc-900/60 transition-all text-zinc-400 hover:text-white border-zinc-800 group'
              >
                <Mail className='w-5 h-5 group-hover:text-emerald-400 transition-colors' />
                <span className='text-[10px] font-mono mt-1 text-zinc-500 group-hover:text-zinc-300'>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
