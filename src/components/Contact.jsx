const Contact = () => {
  return (
    <>
      <section id='contact' className='py-16 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-white mb-8'>Get in Touch</h2>
          <div className='bg-gray-800 rounded-lg shadow-lg p-8'>
            <form className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-gray-300'>
                  Name
                </label>
                <input
                  type='text'
                  className='mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-300'>
                  Email
                </label>
                <input
                  type='email'
                  className='mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-300'>
                  Message
                </label>
                <textarea
                  rows={4}
                  className='mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
