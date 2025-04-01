import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import image3 from './images/pexels-fotoaibe-1571460.jpg'


function Portfolio(){

    const navigate = useNavigate()

    useEffect(() => {

        window.scrollTo(0, 0);

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

    //src/components/images/IMG_7257_4.jpg

    return (
        <>
            <div className="bg-[url('../src/components/images/IMG_7257_4.jpg')] 
            bg-center bg-cover min-h-[39em] flex justify-center 
            items-center">
                <h1 className='font-main text-[10em] max-lg:text-[5em] text-primary capitalize'>portfolio</h1>
            </div>
            <div className='flex flex-wrap justify-evenly items-center mt-[5em]'>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={image3} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em]  mt-[1em] p-0 font-heading'>Riverside Apartment</h3>
                        <p className='text-[1.3em]'>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/kilimani")}}>take a look</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={image3} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>Riverside Apartment</h3>
                        <p className='text-[1.3em]'>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/kilimani")}}>take a look</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={image3} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>Riverside Apartment</h3>
                        <p className='text-[1.3em]'>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/kilimani")}}>take a look</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={image3} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>Riverside Apartment</h3>
                        <p className='text-[1.3em]'>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/kilimani")}}>take a look</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={image3} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>Riverside Apartment</h3>
                        <p className='text-[1.3em]'>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/kilimani")}}>take a look</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={image3} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>Riverside Apartment</h3>
                        <p className='text-[1.3em]'>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/kilimani")}}>take a look</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={image3} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>Riverside Apartment</h3>
                        <p className='text-[1.3em]'>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/kilimani")}}>take a look</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={image3} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>Riverside Apartment</h3>
                        <p className='text-[1.3em]'>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/kilimani")}}>take a look</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={image3} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>Riverside Apartment</h3>
                        <p className='text-[1.3em]'>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/kilimani"); scrollToTop();}}>take a look</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={image3} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>Riverside Apartment</h3>
                        <p className='text-[1.3em]'>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/kilimani"); scrollToTop();}}>take a look</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={image3} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>Riverside Apartment</h3>
                        <p className='text-[1.3em]'>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/kilimani"); scrollToTop();}}>take a look</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={image3} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>Riverside Apartment</h3>
                        <p className='text-[1.3em]'>Step into this exquisite apartment in the heart of Riverside, where our team spearheaded the interior design, full FF&E, and styling.  The design effortlessly marries modern elegance with a cozy ambiance, creating a space that beckons luxury.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/kilimani"); scrollToTop();}}>take a look</button>
                </div>
            </div>
        </>
    )
}

export default Portfolio

