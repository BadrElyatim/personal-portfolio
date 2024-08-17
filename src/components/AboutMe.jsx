import React from 'react'
import aboutMe from '../assets/about-me.svg'

function AboutMe() {
  return (
    <section className='container md:flex gap-20 py-16' id='about-me'>
        <div className='flex-shrink-0 sm:w-1/3'>
            <img src={aboutMe} alt="a man" />
        </div>
        <div>
            <h2 className='text-5xl mb-8'>About <span className='font-extrabold'>Me</span></h2>
            <div className='flex flex-col gap-5 text-[#71717A]'>
                <p>I'm a passionate, software engineer who specializes in full stack development (React.js & PHP). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly  performant code matters to me.</p>
                <p>I began my journey as a web developer in 2021, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early twenties, 4 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as React.js, Tailwindcss, Laravel, Symfony and much more.</p>
                <p>When I'm not in full-on developer mode, you can find me hovering around on linkedin, witnessing the journey of early startups or enjoying some free time. You can follow me on Linkedin where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
            </div>
        </div>
    </section>
  )
}

export default AboutMe