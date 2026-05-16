'use client'

import { motion } from 'framer-motion'

export default function Hero() {

  return (

    <section
      id='home'
      className='relative min-h-screen overflow-hidden flex items-center px-6 pt-40 sm:pt-44 md:pt-48'
    >

      {/* Grid Background */}
      <div className='absolute inset-0 opacity-[0.05]'>

        <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]'></div>

      </div>

      {/* Glow Backgrounds */}
      <div className='absolute top-0 left-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-blue-500/15 blur-2xl md:blur-3xl rounded-full animate-pulse'></div>

      <div className='absolute bottom-0 right-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#d6c8a4]/15 blur-2xl md:blur-3xl rounded-full animate-pulse'></div>

      <div className='max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10'>

        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >

          {/* Founder Badge */}
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className='inline-flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 sm:mb-10'
          >

            <div className='w-3 h-3 rounded-full bg-green-400 animate-pulse'></div>

            <p className='uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#d6c8a4] text-[10px] sm:text-xs'>
              NIT Calicut • Startup Focused
            </p>

          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95]'
          >

            Muhammed

            <br />

            <span className='gradient-text'>
              Jasil K
            </span>

          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            className='mt-8 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl'
          >

            ECE undergraduate at NIT Calicut building
            AI-driven systems, startup research tools,
            digital products, and founder-focused technology.

          </motion.p>

          {/* Tags */}
          <div className='flex flex-wrap gap-3 sm:gap-4 mt-10'>

            {[
              'AI Engineer',
              'Product Manager',
              'Business Research',
              'Startup Builder',
            ].map((item) => (

              <motion.div
                key={item}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
                className='px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#d6c8a4] transition duration-300 cursor-default'
              >

                {item}

              </motion.div>

            ))}

          </div>

          {/* Buttons */}
          <div className='flex flex-wrap gap-4 sm:gap-5 mt-12'>

            <motion.a
              whileHover={{
                scale: 1.08,
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href='/resume.pdf'
              target='_blank'
              className='px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#d6c8a4] text-black font-bold text-sm sm:text-base md:text-lg hover:shadow-[0_0_40px_rgba(214,200,164,0.5)] transition duration-300'
            >

              View Resume

            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.08,
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href='#projects'
              className='px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#d6c8a4] transition duration-300 text-sm sm:text-base'
            >

              View Projects

            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.08,
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href='#contact'
              className='px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#d6c8a4] transition duration-300 text-sm sm:text-base'
            >

              Let’s Connect

            </motion.a>

          </div>

          {/* Bottom Tagline */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
            }}
            className='mt-12 sm:mt-14'
          >

            <p className='text-[#d6c8a4] text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase'>
              Research → Build → Lead
            </p>

          </motion.div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className='relative flex justify-center mt-10 lg:mt-0'
        >

          {/* Rotating Ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='absolute w-[320px] sm:w-[400px] md:w-[520px] h-[320px] sm:h-[400px] md:h-[520px] rounded-full border border-[#d6c8a4]/20'
          ></motion.div>

          {/* Glow */}
          <div className='absolute w-[280px] sm:w-[340px] md:w-[420px] h-[280px] sm:h-[340px] md:h-[420px] bg-[#d6c8a4]/20 blur-2xl md:blur-3xl rounded-full'></div>

          {/* Floating Image */}
          <motion.div
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            whileHover={{
              scale: 1.03,
            }}
            className='relative'
          >

            {/* Glass Layer */}
            <div className='absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10'></div>

            {/* Image */}
            <motion.img
              src='/profile.png'
              alt='Muhammed Jasil K'
              whileHover={{
                scale: 1.04,
              }}
              transition={{
                duration: 0.5,
              }}
              className='relative z-10 w-[280px] sm:w-[340px] md:w-[400px] lg:w-[430px] object-cover drop-shadow-[0_0_80px_rgba(214,200,164,0.35)]'
            />

          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}