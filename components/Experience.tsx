'use client'

import { motion } from 'framer-motion'

export default function Experience() {

  const experiences = [

    {
      role: 'Product Manager Intern',
      company: 'Super Me',
      period: 'Present',
      description:
        'Collaborating on product planning, startup database structuring, outreach strategies, and research-driven workflows.',

      icon: '🚀',
    },

    {
      role: 'Business Research & Outreach Intern',
      company: 'Super Me',
      period: 'Jan 2026 — Apr 2026',

      description:
        'Built structured startup databases using Y Combinator directories and VC portfolio research while supporting outreach operations.',

      icon: '📊',
    },

    {
      role: 'Teacher',
      company: 'Fore School',
      period: 'Present',

      description:
        'Teaching students while improving communication, leadership, and mentoring abilities.',

      icon: '🎓',
    },

  ]

  return (

    <section
      id='experience'
      className='relative py-32 px-6 overflow-hidden'
    >

      {/* Background Glows */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full animate-pulse'></div>

      <div className='absolute bottom-20 right-10 w-72 h-72 bg-[#d6c8a4]/10 blur-3xl rounded-full animate-pulse'></div>

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
            Professional Journey
          </p>

          <h2 className='text-6xl font-black gradient-text'>
            Experience
          </h2>

        </motion.div>

        {/* Timeline */}
        <div className='relative'>

          {/* Timeline Line */}
          <div className='absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#d6c8a4]/50 via-blue-500/40 to-transparent'></div>

          <div className='space-y-12'>

            {experiences.map((item, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className='relative pl-20'
              >

                {/* Timeline Dot */}
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className='absolute left-0 top-10 w-10 h-10 rounded-full bg-gradient-to-br from-[#d6c8a4] to-blue-500 flex items-center justify-center text-xl shadow-[0_0_25px_rgba(214,200,164,0.4)]'
                >

                  {item.icon}

                </motion.div>

                {/* Card */}
                <div className='group relative overflow-hidden rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 p-10'>

                  {/* Hover Glow */}
                  <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#d6c8a4]/10 to-blue-500/10'></div>

                  {/* Floating Glow */}
                  <div className='absolute -top-10 -right-10 w-40 h-40 bg-[#d6c8a4]/10 blur-3xl rounded-full'></div>

                  <div className='relative z-10'>

                    {/* Top */}
                    <div className='flex flex-wrap items-center justify-between gap-4'>

                      <div>

                        <h3 className='text-3xl font-bold'>
                          {item.role}
                        </h3>

                        <p className='mt-3 text-[#d6c8a4] text-lg'>
                          {item.company}
                        </p>

                      </div>

                      {/* Badge */}
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                        }}
                        className='px-5 py-3 rounded-full bg-black/20 border border-white/10 backdrop-blur-xl text-sm tracking-wide'
                      >

                        {item.period}

                      </motion.div>

                    </div>

                    {/* Description */}
                    <p className='mt-8 text-gray-300 text-lg leading-relaxed max-w-3xl'>
                      {item.description}
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