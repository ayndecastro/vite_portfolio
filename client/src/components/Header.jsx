import PropTypes from 'prop-types';

const Header = ({ children, title }) => {
  return (
    <header className='sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80 transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8'>
        <nav className='flex flex-col sm:flex-row justify-between items-center gap-4'>
          <div className='flex items-center gap-4'>
            <h1 className='text-xl font-bold tracking-tight text-white font-sans'>{title}</h1>
            <div className='flex items-center gap-2 bg-emerald-950/30 border border-emerald-800/50 px-3 py-1 rounded-full text-xs font-medium text-emerald-400 font-mono'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
              </span>
              Available for hire
            </div>
          </div>
          <div className='flex items-center gap-6 font-mono text-sm'>
            {children}
          </div>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default Header;
