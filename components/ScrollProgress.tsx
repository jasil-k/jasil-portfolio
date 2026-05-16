'use client'

import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {

  const { scrollYProgress } = useScroll()

  return (

    <>
    
      {/* Main Progress Bar */}
      <motion.div
        className='fixed top-0 left-0 right-0 h-[4px] z-[9999]'
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%',
          background:
            'linear-gradient(to right, #d6c8a4, #3b82f6)',
        }}
      />

      {/* Glow */}
      <motion.div
        className='fixed top-0 left-0 right-0 h-[10px] blur-xl z-[9998]'
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%',
          background:
            'linear-gradient(to right, #d6c8a4, #3b82f6)',
        }}
      />

    </>

  )
}