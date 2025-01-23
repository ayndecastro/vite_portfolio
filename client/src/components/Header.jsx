import PropTypes from 'prop-types';

const Header = ({ children, title }) => {
  return (
    <div className=' bg-gray-900 text-gray-100'>
      {/* Header */}
      <header className='bg-gray-800 shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8'>
          <nav className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-white'>{title}</h1>
            {children}
          </nav>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default Header;
