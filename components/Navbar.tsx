'use client'

import { motion } from 'framer-motion'

const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Experience', link: '#experience' },
  { name: 'Education', link: '#education' },
  { name: 'Contact', link: '#contact' },
]

export default function Navbar() {

  return (

    <motion.nav
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className='fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999]'
    >

      {/* Floating Container */}
      <div className='flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 rounded-full border border-white/10 bg-[#07111f]/70 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.35)]'>

        {navItems.map((item) => (

          <motion.a
            key={item.name}
            href={item.link}
            whileHover={{
              y: -3,
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.92,
            }}
            className='relative px-3 md:px-5 py-2 rounded-full text-[11px] md:text-sm font-medium text-white/80 hover:text-[#d6c8a4] transition duration-300 overflow-hidden group'
          >

            {/* Hover Glow */}
            <span className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-full bg-gradient-to-r from-[#d6c8a4]/10 to-blue-500/10'></span>

            {/* Text */}
            <span className='relative z-10'>
              {item.name}
            </span>

          </motion.a>

        ))}

      </div>

    </motion.nav>

  )
}