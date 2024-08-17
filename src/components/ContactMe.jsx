import React, {useState} from 'react'
import SocialBtn from './shared/SocialBtn';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <section className='container flex flex-col gap-24 sm:justify-between lg:flex-row mb-12' id='contact-me'>
            <form onSubmit={onSubmit} className='flex flex-col w-full gap-5'>
                <input type="text" name='Your name' placeholder='Your name' className='px-3 py-3 border border-black rounded-md' required/>
                <input type="email" name='Email' placeholder='Email' className='px-3 py-3 border border-black rounded-md' required/>
                <input type="text" name='Your website (If exists)' placeholder='Your website (If exists)' className='px-3 py-3 border border-black rounded-md' />
                <textarea placeholder='How can I help?' name='How can I help?' className='px-3 py-3 border border-black rounded-md resize-none h-40' required></textarea>

                <div className='block xl:flex gap-8 mt-9'>
                    <button type='submit' className='text-white bg-black px-4 rounded mb-4 xl:mb-0 py-3 hover:bg-[#404040]'>Get In Touch</button>
                    <div className='flex flex-wrap gap-8'>
                        <SocialBtn icon={FaGithub} link='https://github.com/BadrElyatim' />
                        <SocialBtn icon={FaInstagram} link='https://www.instagram.com/badr_el36/' />
                        <SocialBtn icon={FaDiscord} link='https://discord.com/users/408687858262474753' />
                        <SocialBtn icon={FaLinkedin} link='https://www.linkedin.com/in/badr-elyatim-333811245/' />
                    </div>
                </div>
                <span>{result}</span>
            </form>
            <div className='w-full'>
                <h2 className='font-extrabold text-5xl mb-8 leading-snug'>Let’s talk for Something special</h2>
                <p className='text-[#71717A]'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                <p className='font-semibold text-2xl mt-6 break-words'>badr.elyatim@gmail.com</p>
            </div>
        </section>
    )
}

export default ContactMe