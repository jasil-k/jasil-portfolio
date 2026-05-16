'use client'

import { motion } from 'framer-motion'

const navItems = [
  'home',
  'about',
  'experience',
  'projects',
  'education',
  'contact',
]

export default function Navbar() {

  return (

    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='fixed top-0 left-0 right-0 z-50'
    >

      <div className='max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6'>

        <div className='flex items-center justify-between rounded-full border border-white/10 bg-black/30 backdrop-blur-2xl px-5 sm:px-8 md:px-10 py-4 sm:py-5 shadow-[0_0_40px_rgba(0,0,0,0.25)]'>

          {/* Logo */}
          <motion.h1
            whileHover={{
              scale: 1.08,
            }}
            className='text-lg sm:text-xl md:text-2xl font-black tracking-[0.2em] gradient-text cursor-default'
          >

            JASIL.K

          </motion.h1>

          {/* Desktop Nav */}
          <div className='hidden md:flex items-center gap-3'>

            {navItems.map((item) => (

              <motion.a
                key={item}
                href={`#${item}`}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className='px-5 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-white/10 transition duration-300'
              >

                {item}

              </motion.a>

            ))}

          </div>

          {/* Mobile Text */}
          <div className='md:hidden text-xs uppercase tracking-[0.2em] text-[#d6c8a4]'>
            Portfolio
          </div>

        </div>

      </div>

    </motion.nav>
  )
}