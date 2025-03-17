import { useEffect } from "react";
import image3 from './images/pexels-fotoaibe-1571460.jpg'

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
            <div className="bg-[url('../src/components/images/pexels-fotoaibe-1571460.jpg')] 
            bg-center bg-cover min-h-[39em] flex justify-center 
            items-center">
                <h1 className='font-main text-[10em] max-lg:text-[5em] text-primary capitalize'>our services</h1>
            </div>
            <div className=' flex flex-col items-center justify-center max-lg:mt-[4em] max-lg:mb-[5em]'>
                <div className='box service'>
                    <img className='h-[23em] w-[35em] max-lg:h-[15em] max-lg:w-[20em] object-cover object-center' src={image3} alt='image3' />
                    <div className='m-[2em] max-lg:m-[1em]'>
                        <h3 className='font-heading m-0 text-[2.3em] max-lg:text-[1.5em]'>FF&E Design</h3>
                        <p>The FF&E team works on the furnishing and styling phase of a project, by providing our clients with bespoke furniture design, lightning, artwork, decor and selection of fabric schemes.</p>
                    </div>
                </div>
                <div className='box bg-primary flex m-[2em] p-[2em] max-md:flex-col-reverse'>
                    <div  className='m-[2em] max-lg:m-[1em]'>
                        <h3 className='font-heading m-0 text-[2.3em]  max-lg:text-[1.5em]'>Interior Architecture</h3>
                        <p>Our interior architects  produce all detail drawings and documentation. All interior architectural elements are handled in house from space planning, kitchen and bathroom.</p>
                    </div>                    
                    <img className='h-[23em] w-[35em] max-lg:h-[15em] max-lg:w-[20em] object-cover object-center' src={image3} alt='image3' />
                </div>
                <div className='box bg-primary flex m-[2em] p-[2em] max-md:flex-col-reverse'>
                    <div  className='m-[2em] max-lg:m-[1em]'>
                        <h3 className='font-heading m-0 text-[2.3em]  max-lg:text-[1.5em]'>Project Management</h3>
                        <p>Our team will monitor the progress of all design elements on site to ensure that the design is being implemented correctly, We manage all regular site visits and coordination with all subcontractors.</p>
                    </div>   
                    <img className='h-[23em] w-[35em] max-lg:h-[15em] max-lg:w-[20em] object-cover object-center' src={image3} alt='image3' />             
                </div>
                <div className='box service'>
                    <img className='h-[23em] w-[35em] max-lg:h-[15em] max-lg:w-[20em] object-cover object-center' src={image3} alt='image3' />
                    <div className='m-[2em] max-lg:m-[1em]'>
                        <h3 className='font-heading m-0 text-[2.3em]  max-lg:text-[1.5em]'>Procurement</h3>
                        <p>The procurement team handles all aspects of the FF&E delivery from design phase to detailed budgets and all procurement processing. We coordinate all aspects of shipments and final installation on site before completion.</p>
                    </div>                
                </div>
            </div>
        </>
    )
}

export default Service

