import React from 'react'
import allianceEverLogo from '../assets/Logo-Alliance-Ever.svg'
import intelciaItsLogo from '../assets/intelcia_it_solutions_logo.png'

function Experiences() {
    return (
        <section className='mt-24 py-20 bg-black' id='experience'>
            <h2 className='text-5xl text-white text-center mb-10 sm:mb-20'>My <span className='font-extrabold'>Experience</span></h2>
            
            <div className='container'>
                <Experience companyLogo={intelciaItsLogo} jobName='Software Engineer at Intelcia It Solutions' description=''/>
                <Experience companyLogo={intelciaItsLogo} jobName='Software Engineer Intern at Intelcia It Solutions' description=''/>
                <Experience companyLogo={allianceEverLogo} jobName='Software Engineer Intern at Alliance Ever' description='I developed and managed a website for comparing credit cards using Laravel and Vue.js. The project involved creating an intuitive interface that allowed users to compare the features of various cards. It contributed to improving financial literacy by providing a platform for making informed decisions about credit card choices. I worked closely with a multidisciplinary team, enhancing both my technical and communication skills.'/>
            </div>
        </section>
    )
}

const Experience = ({companyLogo: CompanyLogo, jobName, description}) => {
    return (
        <div className='group rounded-md border border-[#71717A] px-4 py-6 mb-6 hover:bg-[#27272A]'>
            <div className='flex items-center gap-8 mb-5'>
                <div className='max-w-28 sm:max-w-32'>
                    <img src={CompanyLogo} alt="company logo" />
                </div>
                <h3 className='font-semibold text-white text-xl sm:text-2xl'>{jobName}</h3>
            </div>
            <p className='text-[#D4D4D8] group-hover:text-[#71717A]'>{description}</p>
        </div>
    )
}

export default Experiences