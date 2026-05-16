'use client'

import { motion } from 'framer-motion'

export default function Footer() {

  return (

    <footer className='relative overflow-hidden py-24 px-6 border-t border-white/10'>

      {/* Grid */}
      <div className='absolute inset-0 opacity-[0.04]'>

        <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]'></div>

      </div>

      {/* Glow */}
      <div className='absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full'></div>

      <div className='absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d6c8a4]/10 blur-3xl rounded-full'></div>

      <div className='max-w-7xl mx-auto relative z-10'>

        <div className='grid md:grid-cols-2 gap-16 items-center'>

          {/* Left */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >

            <h2 className='text-5xl md:text-6xl font-black leading-tight'>

              Muhammed

              <br />

              <span className='gradient-text'>
                Jasil K
              </span>

            </h2>

            <p className='mt-8 text-gray-300 text-lg leading-relaxed max-w-xl'>

              AI Engineer, Product Builder, Researcher,
              and future tech entrepreneur focused on
              building impactful digital systems and startup-driven solutions.

            </p>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className='flex flex-col md:items-end gap-6'
          >

            {/* Buttons */}
            <div className='flex flex-wrap gap-4'>

              {[
                {
                  name: 'LinkedIn',
                  link: 'https://www.linkedin.com/in/muhammedjasilk/',
                },

                {
                  name: 'Email',
                  link: 'mailto:jj.muhammedjasilk@gmail.com',
                },

                {
                  name: 'Projects',
                  link: '#projects',
                },

              ].map((item) => (

                <motion.a
                  key={item.name}
                  href={item.link}
                  whileHover={{
                    scale: 1.08,
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className='px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#d6c8a4] transition duration-300'
                >

                  {item.name}

                </motion.a>

              ))}

            </div>

            {/* Bottom */}
            <div className='mt-8 text-gray-400 text-sm'>

              © 2026 Muhammed Jasil K • Built with passion & ambition

            </div>

          </motion.div>

        </div>

      </div>

    </footer>
  )
}