'use client'

import { motion } from 'framer-motion'

export default function Education() {

  return (

    <section
      id='education'
      className='relative py-32 px-6 overflow-hidden'
    >

      {/* Animated Background Orbs */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full animate-pulse'></div>

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

          <p className='uppercase tracking-[0.3em] text-[#d6c8a4] mb-4 text-sm'>
            Academic Journey
          </p>

          <h2 className='text-6xl font-black leading-tight gradient-text'>
            Education
          </h2>

        </motion.div>

        {/* Timeline */}
        <div className='relative'>

          {/* Center Line */}
          <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#d6c8a4]/40 via-blue-500/40 to-transparent'></div>

          <div className='space-y-20'>

            {/* NIT Card */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className='md:w-[48%] group relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 overflow-hidden shadow-2xl'
            >

              {/* Glow Effect */}
              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#d6c8a4]/10 to-blue-500/10'></div>

              {/* Floating Glow */}
              <div className='absolute -top-10 -right-10 w-40 h-40 bg-[#d6c8a4]/10 blur-3xl rounded-full'></div>

              <div className='relative z-10'>

                <div className='flex items-center justify-between'>

                  <p className='uppercase tracking-[0.2em] text-[#d6c8a4] text-sm'>
                    2024 — 2028
                  </p>

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className='text-4xl'
                  >
                    🎓
                  </motion.div>

                </div>

                <h3 className='text-4xl font-bold mt-6 leading-tight'>
                  National Institute of Technology Calicut
                </h3>

                <p className='mt-6 text-xl text-[#d6c8a4]'>
                  B.Tech — Electronics & Communication Engineering
                </p>

                <div className='mt-10 flex items-end justify-between'>

                  <div>

                    <p className='text-gray-400 text-sm uppercase tracking-wider'>
                      Current CGPA
                    </p>

                    <motion.h4
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className='text-6xl font-black mt-2'
                    >
                      7.63
                    </motion.h4>

                  </div>

                </div>

              </div>

            </motion.div>

            {/* School Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className='md:ml-auto md:w-[48%] group relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 overflow-hidden shadow-2xl'
            >

              {/* Glow */}
              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-blue-500/10 to-[#d6c8a4]/10'></div>

              <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full'></div>

              <div className='relative z-10'>

                <div className='flex items-center justify-between'>

                  <p className='uppercase tracking-[0.2em] text-[#d6c8a4] text-sm'>
                    Higher Secondary
                  </p>

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className='text-4xl'
                  >
                    📘
                  </motion.div>

                </div>

                <h3 className='text-4xl font-bold mt-6 leading-tight'>
                  Kerala Board of Higher Secondary Education
                </h3>

                <p className='mt-6 text-xl text-[#d6c8a4]'>
                  Computer Science
                </p>

                <div className='mt-10 flex items-end justify-between'>

                  <div>

                    <p className='text-gray-400 text-sm uppercase tracking-wider'>
                      12th Percentage
                    </p>

                    <motion.h4
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className='text-6xl font-black mt-2'
                    >
                      97.33%
                    </motion.h4>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  )
}
