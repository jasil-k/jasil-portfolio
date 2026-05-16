export default function About() {
  return (
    <section id='about' className='section'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold mb-10 gradient-text'>About Me</h2>

        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <p className='text-gray-300 leading-loose text-lg'>
              I am Muhammed Jasil K, a curious and driven ECE undergraduate
              at NIT Calicut with strong interests in AI tools, startup
              ecosystems, business research, marketing, and product building.
              I enjoy leading teams, solving problems, and building impactful
              solutions combining technology and business thinking.
            </p>
          </div>

          <div className='bg-[#0e1b2e] border border-white/10 rounded-3xl p-8'>
            <h3 className='text-2xl font-semibold mb-4'>Currently Working On</h3>

            <ul className='space-y-4 text-gray-300'>
              <li>• Product Manager Intern at Super Me</li>
              <li>• Teaching at Fore School</li>
              <li>• Building an upcoming startup-focused project</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}