import React from 'react'
import basicDept from '../assets/basic-dept.png'
import velvetClouds from '../assets/velvet-clouds.png'
import liquidArtistry from '../assets/liquid-artistry.png'
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        name: 'Cool Starting Animation website',
        description: "The Cool Starting Animation Website is a creative and interactive platform designed to captivate users with stunning animations as they enter the site. This project focuses on providing an engaging, visually dynamic entry experience that sets the tone for the rest of the website. The starting animations are not just visually appealing but also serve to introduce the brand or content in an impactful way.",
        image: basicDept,
        url: 'https://loquacious-sopapillas-498160.netlify.app/'
    },
    {
        name: 'Event Booking Landing Page',
        description: "The Event Booking Landing Page is a sleek and user-friendly platform designed to simplify the process of discovering, booking, and managing events. The landing page serves as the primary gateway for users, offering them a seamless experience from browsing events to securing tickets.",
        image: velvetClouds,
        url: 'https://velvet-clouds.netlify.app/'
    },
    {
        name: 'Liquid Artistry Landing Page',
        description: "The Liquid Artistry Landing Page is a visually captivating platform created to showcase and sell unique, handcrafted liquid art. This landing page is designed to draw visitors in with its stunning visuals and easy-to-navigate layout, emphasizing the elegance and creativity of the artwork.",
        image: liquidArtistry,
        url: 'https://liquid-maestro.netlify.app/'
    }
]

export const Projects = () => {
    return (
        <section className='mb-16 py-20 bg-black' id='projects'>
            <h2 className='text-5xl text-white text-center mb-10 sm:mb-20'>My <span className='font-extrabold'>Projects</span></h2>

            <div className='container'>
                {projects.map((project, index) => (
                    <div key={index} className={`flex flex-col m-auto justify-between items-center gap-14 mt-32 lg:mt-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                        <div className='w-full'>
                            <img src={project.image} alt="project image" className='w-full' />
                        </div>
                        <div className='text-white w-full'>
                            <span className='block font-extrabold text-5xl mb-8'>{String(index + 1).padStart(2, '0')}</span>
                            <h3 className='font-bold text-4xl mb-5'>{project.name}</h3>
                            <p className='text-[#71717A]'>{project.description}</p>
                            <a href={project.url} target='_blank' className='block mt-5'><FaExternalLinkAlt color='white'/></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
