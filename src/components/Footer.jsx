import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import image1 from './media/e3be655b-d71e-4d11-a5d5-649cdc92024d.jpg'
import image2 from './media/IMG_4708.webp'
import image3 from  './media/IMG_4691.webp'
import image5 from './media/IMG_4712.webp'
import img2 from "./media/South B/WhatsApp Image 2025-04-24 at 23.26.58 (2).jpeg";



function Footer() {

    useEffect(() => {

        const blocks = document.querySelectorAll(".box");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, { threshold: 0.4 });

        blocks.forEach((block) => observer.observe(block));

        return () => {
            blocks.forEach((block) => observer.unobserve(block));
        };
    }, []);

    return (
        <div className=" flex flex-col bg-primary p-[2em]">
            <div className="flex max-md:flex-col max-md:items-center">
                <img className="box h-[25em] w-[25em] max-lg:h-[15em] max-lg:w-[15em]" src={image1} />
                <div className="pl-[4em] max-lg:pl-[2em] max-md:pl-0 max-md:pt-[2em]" >
                    <ul className="box flex flex-wrap justify-evenly text-[1.5em] max-lg:text-[1.3em] font-heading uppercase underline underline-offset-5 mb-[2em]">
                        {/* <li><NavLink onClick={() => scrollToTop()} className='pr-[3em] max-lg:pr-[1em]' to={"/contact"}>contact</NavLink></li>
                        <li><NavLink onClick={() => scrollToTop()} className='pr-[3em] max-lg:pr-[1em]' to={'/portfolio'} >portfolio</NavLink></li> */}
                        {/* <li><NavLink onClick={() => scrollToTop()} className='pr-[3em] max-lg:pr-[1em]' to={'/privacy-terms'}>privacy terms</NavLink></li> */}
                        <li><NavLink onClick={() => scrollToTop()} className='pr-[3em] max-lg:pr-[1em]' to={'https://www.instagram.com/arunainteriors/'} target="_blank" rel="noopener noreferrer">instagram</NavLink></li>
                    </ul>
                    <div className="flex flex-wrap max-lg:justify-center">
                        <img className='box h-[9em] w-[12em] max-lg:h-[7.4em] max-md:w-[10em] object-cover pr-[1.2em] mb-[1em]' src={image2} alt="footer-image" />
                        <img className='box h-[9em] w-[12em] max-lg:h-[7.4em] max-md:w-[10em] object-cover pr-[1.2em] mb-[1em]' src={image3} alt="footer-image" />
                        <img className='box h-[9em] w-[12em] max-lg:h-[7.4em] max-md:w-[10em] object-cover pr-[1.2em] mb-[1em]' src={img2} alt="footer-image" />
                        <img className='box h-[9em] w-[12em] max-lg:h-[7.4em] max-md:w-[10em] object-cover pr-[1.2em] mb-[1em]' src={image5} alt="footer-image" />
                    </div>
                </div>
            </div>
            <ul className="box flex flex-wrap justify-evenly text-[1.3em] font-heading pt-[1em]">
                <li>Aruna Interiors Ltd</li>
                <li>Nairobi, Kenya</li>
                <li>Email: Arunahinteriors@gmail.com</li>
                <li>Tel: +254 717251975</li>
            </ul>
        </div>
    )
}

export default Footer

