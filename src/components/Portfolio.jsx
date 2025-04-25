import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import image3 from './media/IMG_4692.webp'
import img1 from "./media/South B/WhatsApp Image 2025-04-24 at 23.26.58 (1).jpeg";
import img2 from "./media/Kileleshwa/WhatsApp Image 2025-04-24 at 22.41.39 (2).jpeg";
import img3 from "./media/Kilimani/WhatsApp Image 2025-04-24 at 22.27.06 (1).jpeg";
import img4 from "./media/lavington/WhatsApp Image 2025-04-24 at 23.43.11 (1).jpeg";
import img9 from "./media/Eldoret/WhatsApp Image 2025-04-24 at 22.51.55.jpeg";



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


    return (
        <>
            <div className="bg-[url('../src/components/media/IMG_4672.webp')] 
            bg-center bg-cover min-h-[39em] flex justify-center 
            items-center">
                <h1 className='font-main text-[10em] max-lg:text-[5em] text-primary capitalize'>portfolio</h1>
            </div>
            <div className='flex flex-wrap justify-evenly items-center mt-[5em]'>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={img3} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em]  mt-[1em] p-0 font-heading'>Kilimani</h3>
                        <p className='text-[1.3em]'>Refined interior design with tailored elegance and comfort.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/kilimani")}}>view project</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={img2} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>kileleshwa</h3>
                        <p className='text-[1.3em]'>Thoughtfully styled interiors blending warmth and modern design.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/kileleshwa")}}>view project</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={img1} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>SouthB</h3>
                        <p className='text-[1.3em]'>Contemporary design that balances style, comfort, and function.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/southB")}}>view project</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={img4} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>lavington</h3>
                        <p className='text-[1.3em]'>Sophisticated interiors crafted for timeless, elevated living.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/lavington")}}>view project</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={image3} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>Tatu city</h3>
                        <p className='text-[1.3em]'>Clean, curated spaces reflecting precision and refined taste.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/tatu_city")}}>view project</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={img9} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>Eldoret</h3>
                        <p className='text-[1.3em]'>Timeless interiors designed with thoughtful detail and care.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/eldoret")}}>view project</button>
                </div>
                <div className='box bg-primary w-[25em] max-lg:w-[22em] p-[2em] mb-[5em] text-center flex flex-col items-center'>
                    <img className='h-[15em] w-[20em] object-cover' src={image3} alt='portfolio-image' />
                    <div>
                        <h3 className='text-[2em] max-lg:text-[1.6em] mt-[1em] p-0 font-heading'>Karen</h3>
                        <p className='text-[1.3em]'>Elegant interiors shaped by comfort, function, and simplicity.</p>
                    </div>
                    <button className='bg-none text-gb border-2 rounded-2xl w-[10em] h-[3em] text-[1.3em] capitalize hover:bg-gb hover:text-primary' onClick={() => {navigate("/karen")}}>view project</button>
                </div>
            </div>
        </>
    )
}

export default Portfolio

