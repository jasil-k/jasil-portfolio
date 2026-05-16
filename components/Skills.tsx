'use client'

import { motion } from 'framer-motion'

const skills = [

  'Python',
  'AI Tools',
  'Prompt Engineering',
  'Business Research',
  'Data Research',
  'Excel',
  'Marketing',
  'Public Relations',
  'Communication',
  'Team Leadership',
  'GitHub',
  'Cursor',
  'Digital Marketing',

]

export default function Skills() {

  return (

    <section
      id='skills'
      className='relative py-32 px-6 overflow-hidden'
    >

      {/* Glow */}
      <div className='absolute top-20 left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full animate-pulse'></div>

      <div className='absolute bottom-20 right-20 w-72 h-72 bg-[#d6c8a4]/10 blur-3xl rounded-full animate-pulse'></div>

      <div className='max-w-7xl mx-auto relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-20'
        >

          <p className='uppercase tracking-[0.3em] text-[#d6c8a4] text-sm mb-4'>
            What I Use
          </p>

          <h2 className='text-6xl font-black gradient-text'>
            Skills
          </h2>

        </motion.div>

        {/* Skills Grid */}
        <div className='flex flex-wrap gap-5'>

          {skills.map((skill, index) => (

            <motion.div
              key={skill}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                y: -6,
              }}
              className='group relative overflow-hidden px-8 py-5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 text-lg font-medium cursor-default'
            >

              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#d6c8a4]/10 to-blue-500/10'></div>

              <div className='relative z-10'>
                {skill}
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}