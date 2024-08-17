import React from 'react'
import hero from '../assets/hero.svg'
import SocialBtn from './shared/SocialBtn'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Hero() {
    return (
        <section className='container flex sm:gap-7 md:gap-14 lg:gap-36 flex-col-reverse sm:flex-row justify-between py-9 sm:py-16'>
            <div>
                <h1 className='mt-9 sm:mt-0 leading-normal text-2xl sm:text-3xl md:leading-snug xl:text-5xl xl:leading-relaxed'>
                    Hello I’am <span className='font-extrabold'>Badr Elyatim.</span><br />
                    <span className='font-extrabold'>Fullstack</span> Developer<br />
                    Based In <span className='font-extrabold'>Morocco.</span>
                </h1>
                <p className='mt-6 md:text-sm text-xs text-[#71717A]'>As a passionate and self-taught full stack developer, I’m always eager to explore the latest trends and best practices in web development. My solid skill set has been honed through personal projects and online courses, allowing me to deliver versatile and valuable contributions to any development team.</p>
                <div className='flex flex-wrap gap-8 mt-9'>
                    <SocialBtn icon={FaGithub} link='https://github.com/BadrElyatim'/>
                    <SocialBtn icon={FaInstagram} link='https://www.instagram.com/badr_el36/'/>
                    <SocialBtn icon={FaDiscord} link='https://discord.com/users/408687858262474753'/>
                    <SocialBtn icon={FaLinkedin} link='https://www.linkedin.com/in/badr-elyatim-333811245/'/>
                </div>
            </div>
            <div className='mx-auto sm:min-w-max'>
                <img src={hero} alt='hero' />
            </div>
        </section>
    )
}

export default Hero