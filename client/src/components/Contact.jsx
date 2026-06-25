import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email address';
    if (!formData.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setStatus('error');
      setErrorMessage(error);
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Server rejected transmission');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Connection breakdown. Unable to deliver payload.');
    }
  };

  return (
    <section id='contact' className='py-20 bg-zinc-950 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='flex items-center gap-4 mb-12'>
          <h2 className='text-2xl font-bold tracking-tight text-white font-sans'>
            Get in Touch
          </h2>
          <div className='flex-grow h-px bg-zinc-800' />
          <span className='text-xs font-mono text-zinc-500'>// contact.api</span>
        </div>

        {/* Bento Contact Box */}
        <div className='max-w-3xl mx-auto border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/10 backdrop-blur-sm relative z-10'>
          {/* Header Metadata */}
          <div className='border-b border-zinc-800 bg-zinc-950/40 p-4 md:px-6 flex justify-between items-center text-xs font-mono text-zinc-500'>
            <span>[channel_active]</span>
            <span>secure_node_ssl</span>
          </div>

          <div className='p-6 md:p-10'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Form Input fields */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2'>
                    [sender_name]
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder='Enter your name'
                    className='w-full bg-zinc-950 border border-zinc-800 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-0 transition-colors'
                  />
                </div>
                <div>
                  <label className='block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2'>
                    [sender_email]
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder='your@email.com'
                    className='w-full bg-zinc-950 border border-zinc-800 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-0 transition-colors'
                  />
                </div>
              </div>

              <div>
                <label className='block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2'>
                  [message_payload]
                </label>
                <textarea
                  name='message'
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  placeholder='Write your message details here...'
                  className='w-full bg-zinc-950 border border-zinc-800 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-0 transition-colors'
                />
              </div>

              {/* Status Feedbacks */}
              {status === 'success' && (
                <div className='flex items-center gap-3 bg-emerald-950/20 border border-emerald-800/40 p-4 rounded-lg text-emerald-400 text-sm font-mono'>
                  <CheckCircle2 className='w-5 h-5 flex-shrink-0' />
                  <span>SUCCESS: Message transmission logged successfully.</span>
                </div>
              )}

              {status === 'error' && (
                <div className='flex items-center gap-3 bg-red-950/20 border border-red-800/40 p-4 rounded-lg text-red-400 text-sm font-mono'>
                  <AlertCircle className='w-5 h-5 flex-shrink-0' />
                  <span>ERROR: {errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type='submit'
                  disabled={status === 'submitting'}
                  className='w-full flex items-center justify-center gap-2 bg-emerald-500 text-zinc-950 font-medium py-3 px-6 rounded-lg hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-500 transition-all font-mono text-sm shadow-lg shadow-emerald-550/10'
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className='w-4 h-4 animate-spin' />
                      TRANSMITTING_DATA...
                    </>
                  ) : (
                    <>
                      <Send className='w-4 h-4' />
                      // send_message()
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
