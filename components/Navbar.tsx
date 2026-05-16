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
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className='fixed top-0 left-0 right-0 z-50'
    >

      <div className='max-w-7xl mx-auto px-6 py-5 mt-4'>

        <div className='flex items-center justify-between rounded-full border border-white/10 bg-black/20 backdrop-blur-2xl px-8 py-4 shadow-2xl'>

          {/* Logo */}
          <motion.h1
            whileHover={{
              scale: 1.08,
            }}
            className='text-2xl font-black gradient-text tracking-wider'
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
                className='px-5 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-white/10 transition duration-300'
              >

                {item}

              </motion.a>

            ))}

          </div>

        </div>

      </div>

    </motion.nav>
  )
}