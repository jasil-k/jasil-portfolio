'use client'

import { motion } from 'framer-motion'

export default function Projects() {

  return (

    <section
      id='projects'
      className='section relative overflow-hidden'
    >

      {/* Background Glow */}
      <div className='absolute top-10 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full'></div>

      <div className='max-w-6xl mx-auto relative z-10'>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='text-5xl font-bold mb-14 gradient-text'
        >
          Projects
        </motion.h2>

        <div className='grid md:grid-cols-2 gap-8'>

          {/* Main Project */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            className='group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden'
          >

            {/* Hover Glow */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#d6c8a4]/10 to-blue-500/10'></div>

            {/* Project Image */}
            <div className='overflow-hidden'>

              <motion.img
                src='/project.jpg'
                alt='Gesture Controlled Air Mouse'
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.5,
                }}
                className='w-full h-[260px] object-cover'
              />

            </div>

            {/* Content */}
            <div className='relative z-10 p-8'>

              <div className='flex items-center justify-between mb-4'>

                <h3 className='text-3xl font-bold'>
                  Gesture Controlled Air Mouse
                </h3>

                <div className='text-3xl'>
                  🚀
                </div>

              </div>

              <p className='text-gray-300 leading-relaxed text-lg'>
                ESP-32 based wearable gesture-controlled Bluetooth mouse
                using MPU6050 sensor. The system enables users to control
                a computer cursor through hand movements wirelessly.
              </p>

              {/* Tags */}
              <div className='flex flex-wrap gap-3 mt-8'>

                {[
                  'ESP-32',
                  'Bluetooth',
                  'MPU6050',
                  'Embedded Systems',
                ].map((item) => (

                  <span
                    key={item}
                    className='px-4 py-2 rounded-full bg-black/30 border border-white/10 text-sm hover:bg-[#d6c8a4] hover:text-black transition duration-300 cursor-default'
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          </motion.div>

          {/* Future Projects */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            className='group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 overflow-hidden flex flex-col justify-center'
          >

            {/* Hover Glow */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-[#d6c8a4]/10'></div>

            <div className='relative z-10'>

              <div className='text-5xl mb-6'>
                ⚡
              </div>

              <h3 className='text-4xl font-bold gradient-text leading-tight'>
                More Projects\nComing Soon
              </h3>

              <p className='mt-6 text-gray-300 leading-relaxed text-lg'>
                AI tools, startup research systems,
                automation products, and future
                founder-focused solutions will be
                added soon.
              </p>

              <div className='mt-10'>

                <span className='px-5 py-3 rounded-full bg-black/30 border border-white/10 text-sm hover:bg-[#d6c8a4] hover:text-black transition duration-300 cursor-default'>
                  Currently Building
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}