import { FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (

    <footer className='border-t border-white/10 py-10 mt-20'>

      <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6'>

        {/* Left Side */}
        <div>

          <h2 className='text-2xl font-bold gradient-text'>
            Muhammed Jasil K
          </h2>

          <p className='text-gray-400 mt-2'>
            Research → Build → Lead
          </p>

        </div>

        {/* Social Links */}
        <div className='flex items-center gap-5'>

          <a
            href='https://www.linkedin.com/in/muhammed-jasil-k/'
            target='_blank'
            className='text-2xl hover:text-[#d6c8a4] transition duration-300'
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      {/* Bottom Text */}
      <div className='text-center text-gray-500 mt-8 text-sm'>

        © 2026 Muhammed Jasil K. All rights reserved.

      </div>

    </footer>
  )
}