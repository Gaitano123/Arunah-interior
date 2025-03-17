import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import image1 from './images/pexels-fotios-photos-1090638.jpg'
import image2 from './images/pexels-fotoaibe-1571453.jpg'
import image3 from './images/pexels-fotoaibe-1571460.jpg'
import image4 from './images/pexels-pixabay-271816.jpg'
import image5 from './images/pexels-pixabay-276724.jpg'


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
                        <li><NavLink onClick={() => scrollToTop()} className='pr-[3em] max-lg:pr-[1em]' to={"/contact"}>contact</NavLink></li>
                        <li><NavLink onClick={() => scrollToTop()} className='pr-[3em] max-lg:pr-[1em]' to={'/portfolio'} >portfolio</NavLink></li>
                        <li><NavLink onClick={() => scrollToTop()} className='pr-[3em] max-lg:pr-[1em]' to={'/privacy-terms'}>privacy terms</NavLink></li>
                        <li><NavLink onClick={() => scrollToTop()} className='pr-[3em] max-lg:pr-[1em]' to={'https://www.instagram.com/arunainteriors/'} target="_blank" rel="noopener noreferrer">instagram</NavLink></li>
                    </ul>
                    <div className="flex flex-wrap max-lg:justify-center">
                        <img className='box h-[9em] w-[12em] max-lg:h-[7.4em] max-md:w-[10em] object-cover pr-[1.2em] mb-[1em]' src={image2} alt="footer-image" />
                        <img className='box h-[9em] w-[12em] max-lg:h-[7.4em] max-md:w-[10em] object-cover pr-[1.2em] mb-[1em]' src={image3} alt="footer-image" />
                        <img className='box h-[9em] w-[12em] max-lg:h-[7.4em] max-md:w-[10em] object-cover pr-[1.2em] mb-[1em]' src={image4} alt="footer-image" />
                        <img className='box h-[9em] w-[12em] max-lg:h-[7.4em] max-md:w-[10em] object-cover pr-[1.2em] mb-[1em]' src={image5} alt="footer-image" />
                    </div>
                </div>
            </div>
            <ul className="box flex flex-wrap justify-evenly text-[1.3em] font-heading pt-[1em]">
                <li>Aruna Interiors Ltd</li>
                <li>Riverside Drive, Nairobi Kenya</li>
                <li>Email: info@laylainteriors.com</li>
                <li>Tel: +254 797959562</li>
            </ul>
        </div>
    )
}

export default Footer

