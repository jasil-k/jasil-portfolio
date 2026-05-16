'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {

  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: any) {

    e.preventDefault()

    setLoading(true)

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }

    try {

      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      })

      alert('Message Sent Successfully!')

      e.target.reset()

    } catch (error) {

      alert('Something went wrong.')

    }

    setLoading(false)
  }

  return (

    <section
      id='contact'
      className='relative py-32 px-6 overflow-hidden'
    >

      {/* Background Glows */}
      <div className='absolute top-10 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full animate-pulse'></div>

      <div className='absolute bottom-10 right-10 w-72 h-72 bg-[#d6c8a4]/10 blur-3xl rounded-full animate-pulse'></div>

      <div className='max-w-6xl mx-auto relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-20'
        >

          <p className='uppercase tracking-[0.3em] text-[#d6c8a4] text-sm mb-4'>
            Let’s Build Something
          </p>

          <h2 className='text-6xl font-black gradient-text leading-tight'>
            Contact Me
          </h2>

        </motion.div>

        <div className='grid lg:grid-cols-2 gap-10'>

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'
          >

            {/* Intro Card */}
            <div className='relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10'>

              <div className='absolute inset-0 bg-gradient-to-br from-[#d6c8a4]/10 to-blue-500/10 opacity-60'></div>

              <div className='relative z-10'>

                <h3 className='text-4xl font-bold leading-tight'>
                  Open for collaborations,
                  startup discussions,
                  AI projects & leadership opportunities.
                </h3>

                <p className='mt-6 text-gray-300 text-lg leading-relaxed'>
                  I enjoy building impactful systems,
                  leading teams, solving problems,
                  and working on technology-driven ideas.
                </p>

              </div>

            </div>

            {/* Contact Info */}
            <div className='grid gap-5'>

              {[
                {
                  title: 'Email',
                  value: 'jj.muhammedjasilk@gmail.com',
                  icon: '📧',
                },

                {
                  title: 'Phone',
                  value: '+91 7907714386',
                  icon: '📱',
                },

                {
                  title: 'Location',
                  value: 'Malappuram, Kerala',
                  icon: '📍',
                },

              ].map((item) => (

                <motion.div
                  key={item.title}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                  }}
                  className='group relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6'
                >

                  <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#d6c8a4]/10 to-blue-500/10'></div>

                  <div className='relative z-10 flex items-center gap-5'>

                    <div className='text-3xl'>
                      {item.icon}
                    </div>

                    <div>

                      <p className='text-sm text-gray-400'>
                        {item.title}
                      </p>

                      <h4 className='text-lg font-semibold mt-1'>
                        {item.value}
                      </h4>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10'
          >

            {/* Glow */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-[#d6c8a4]/10 opacity-50'></div>

            <form
              onSubmit={handleSubmit}
              className='relative z-10 space-y-6'
            >

              {/* Input */}
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                required
                className='w-full bg-black/20 border border-white/10 rounded-2xl p-5 outline-none focus:border-[#d6c8a4] transition duration-300'
              />

              {/* Email */}
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                required
                className='w-full bg-black/20 border border-white/10 rounded-2xl p-5 outline-none focus:border-[#d6c8a4] transition duration-300'
              />

              {/* Message */}
              <textarea
                name='message'
                rows={7}
                placeholder='Tell me about your idea, project or opportunity...'
                required
                className='w-full bg-black/20 border border-white/10 rounded-2xl p-5 outline-none focus:border-[#d6c8a4] transition duration-300 resize-none'
              />

              {/* Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                type='submit'
                className='w-full bg-[#d6c8a4] text-black py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_40px_rgba(214,200,164,0.4)] transition duration-300'
              >

                {loading ? 'Sending...' : 'Let’s Connect'}

              </motion.button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  )
}