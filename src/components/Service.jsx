import { useEffect } from "react";
import img1 from './media/IMG_4677.webp'
import img2 from './media/IMG_4707.webp'
import img3 from './media/IMG_4673.webp'
import img4 from './media/IMG_4713.webp'


function Service(){

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


    return(
        <>
            <div className="bg-[url('../src/components/media/IMG_4686.webp')] 
            bg-center bg-cover min-h-[39em] flex justify-center 
            items-center">
                <h1 className='font-main text-[10em] max-lg:text-[5em] text-primary capitalize'>our services</h1>
            </div>
            <div className=' flex flex-col max-w-[100em]  mt-[5em] max-lg:mt-[4em] max-lg:mb-[5em]'>
                <div className='box service'>
                    <img className='photo' src={img1} alt='img' />
                    <div className='m-[2em] max-lg:m-[1em]'>
                        <h3 className='font-heading m-0 text-[2.3em] max-lg:text-[1.5em]'>Interior Design</h3>
                        <p>At Arunah Interiors, we specialize in creating sophisticated, functional spaces through a meticulous, client-focused design process. Our approach is grounded in understanding the unique vision and requirements of each project, whether residential, commercial, or hospitality.</p>
                    </div>
                </div>
                <div className='box bg-primary flex m-[4em] max-md:m-[2em] p-[2em] max-md:flex-col-reverse'>
                    <div  className='m-[2em] max-lg:m-[1em]'>
                        <h3 className='font-heading m-0 text-[2.3em]  max-lg:text-[1.5em]'>Interior Architecture</h3>
                        <p>Arunah Interiors takes over after the building skeleton is completed, handling all interior architectural elements in-house. From space planning to kitchen and bathroom designs, we produce detailed drawings and documentation, ensuring seamless execution from concept to completion.</p>
                    </div>                    
                    <img className='photo' src={img2} alt='img' />
                </div>
                <div className='box bg-primary flex m-[4em] max-md:m-[2em] p-[2em] max-md:flex-col-reverse'>
                    <div  className='m-[2em] max-lg:m-[1em]'>
                        <h3 className='font-heading m-0 text-[2.3em]  max-lg:text-[1.5em]'>Furnishing</h3>
                        <p>Arunah Interiors’ procurement team handles the entire FF&E process, from design and budgeting to sourcing and delivery. We manage all shipments and on-site installations, ensuring every piece aligns with the design vision and is installed to perfection before project completion.</p>
                    </div>   
                    <img className='photo' src={img3} alt='img' />             
                </div>
                <div className='box service'>
                    <img className='photo' src={img4} alt='img' />
                    <div className='m-[2em] max-lg:m-[1em]'>
                        <h3 className='font-heading m-0 text-[2.3em]  max-lg:text-[1.5em]'>Flipping Space</h3>
                        <p>At Arunah Interiors, we specialize in transforming existing spaces into stunning masterpieces. From concept to completion, we carefully modify layouts, select finishes, and incorporate custom designs to enhance functionality and aesthetics. Our team manages every detail, ensuring a seamless transformation that elevates the space to its full potential.</p>
                    </div>                
                </div>
            </div>
        </>
    )
}

export default Service

