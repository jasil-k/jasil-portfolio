'use client'

import { motion } from 'framer-motion'

export default function About() {

  const cards = [

    {
      title: 'Product Building',
      text: 'Building startup-focused digital systems and scalable solutions.',
      icon: '🚀',
    },

    {
      title: 'Research',
      text: 'Exploring AI tools, startups, databases, and business ecosystems.',
      icon: '📊',
    },

    {
      title: 'Leadership',
      text: 'Leading teams, events, outreach activities, and collaborative projects.',
      icon: '⚡',
    },

  ]

  return (

    <section
      id='about'
      className='relative py-32 px-6 overflow-hidden'
    >

      {/* Background Grid */}
      <div className='absolute inset-0 opacity-[0.04]'>

        <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]'></div>

      </div>

      {/* Glow */}
      <div className='absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full'></div>

      <div className='absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d6c8a4]/10 blur-3xl rounded-full'></div>

      <div className='max-w-7xl mx-auto relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className='mb-20'
        >

          <p className='uppercase tracking-[0.3em] text-[#d6c8a4] text-sm mb-5'>
            About Me
          </p>

          <h2 className='text-6xl md:text-7xl font-black leading-tight max-w-5xl'>

            Building technology,
            leadership, and startup-driven solutions.

          </h2>

        </motion.div>

        {/* Grid */}
        <div className='grid lg:grid-cols-2 gap-16 items-center'>

          {/* Left Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >

            <div className='relative overflow-hidden rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 p-10 shadow-[0_0_40px_rgba(0,0,0,0.25)]'>

              {/* Hover Glow */}
              <div className='absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full'></div>

              <p className='text-xl text-white/90 leading-relaxed'>

                I am
                <span className='text-[#d6c8a4] font-semibold'>
                  {' '}Muhammed Jasil K
                </span>,
                an ECE undergraduate at NIT Calicut passionate about
                AI tools, product building, startup ecosystems,
                marketing, business research, and leadership.

                <br /><br />

                My goal is to become a tech entrepreneur building
                impactful platforms that combine technology,
                strategy, and innovation.

              </p>

            </div>

          </motion.div>

          {/* Right Cards */}
          <div className='space-y-6'>

            {cards.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                }}
                className='group relative overflow-hidden rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 p-8 shadow-[0_0_40px_rgba(0,0,0,0.2)]'
              >

                {/* Hover Glow */}
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-blue-500/10 to-[#d6c8a4]/10'></div>

                <div className='relative z-10 flex items-start gap-5'>

                  <div className='text-5xl'>
                    {item.icon}
                  </div>

                  <div>

                    <h3 className='text-2xl font-bold text-[#d6c8a4]'>
                      {item.title}
                    </h3>

                    <p className='mt-4 text-white/80 text-lg leading-relaxed'>
                      {item.text}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}