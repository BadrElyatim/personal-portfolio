import React from 'react'

const SocialBtn = ({ icon: Icon, link }) => {
    return (
        <a href={link} target='_blank'>
            <button type='button' className='
                w-14
                h-14 
                border-2
                border-black
                rounded-md flex 
                justify-center 
                items-center
                hover:border-white 
                hover:bg-black 
                hover:text-white 
                transition-all 
                duration-100'>
                <Icon size={25} />
            </button>
        </a>
        
    )
}

export default SocialBtn