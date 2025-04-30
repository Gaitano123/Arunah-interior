import { useEffect } from "react";
import img1 from './media/IMG_4677.webp'
import img1_600 from './media/WhatsApp_Image_2025-04-29_at_18.07.34_zopaju_c_scale,w_600.jpg'
import img1_956 from './media/WhatsApp_Image_2025-04-29_at_18.07.34_zopaju_c_scale,w_837.jpg'
import img1_1020 from './media/WhatsApp_Image_2025-04-29_at_18.07.34_zopaju_c_scale,w_1020.jpg'
import img2 from './media/IMG_4707.webp'
import img2_600 from './media/WhatsApp_Image_2025-04-29_at_18.08.32_1_y5derw_c_scale,w_600.jpg'
import img2_956 from './media/WhatsApp_Image_2025-04-29_at_18.08.32_1_y5derw_c_scale,w_965.jpg'
import img2_1020 from './media/WhatsApp_Image_2025-04-29_at_18.08.32_1_y5derw_c_scale,w_1020.jpg'
import img3 from './media/IMG_4673.webp'
import img3_600 from './media/WhatsApp_Image_2025-04-29_at_18.07.16_xukboh_c_scale,w_600.jpg'
import img3_956 from './media/WhatsApp_Image_2025-04-29_at_18.07.16_xukboh_c_scale,w_867.jpg'
import img3_1020 from './media/WhatsApp_Image_2025-04-29_at_18.07.16_xukboh_c_scale,w_1020.jpg'
import img4 from './media/IMG_4713.webp'
import img4_600 from './media/WhatsApp_Image_2025-04-30_at_12.30.03_axa18b_c_scale,w_600.jpg'
import img4_956 from './media/WhatsApp_Image_2025-04-30_at_12.30.03_axa18b_c_scale,w_950.jpg'
import img4_1020 from './media/WhatsApp_Image_2025-04-30_at_12.30.03_axa18b_c_scale,w_1020.jpg'


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
                    <img 
                    className='photo' 
                    loading="lazy"
                    srcSet={`${img1_600} 600w, ${img1_956} 956w, ${img1_1020} 1020w`}
                    sizes="(max-width: 600px) 100vw, (max-width: 1020px) 50vw, 33vw"
                    src={img1} 
                    alt='img' />
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
                    <img 
                    className='photo' 
                    loading="lazy"
                    srcSet={`${img2_600} 600w, ${img2_956} 956w, ${img2_1020} 1020w`}
                    sizes="(max-width: 600px) 100vw, (max-width: 1020px) 50vw, 33vw"
                    src={img2} 
                    alt='img' />
                </div>
                <div className='box bg-primary flex m-[4em] max-md:m-[2em] p-[2em] max-md:flex-col-reverse'>
                    <div  className='m-[2em] max-lg:m-[1em]'>
                        <h3 className='font-heading m-0 text-[2.3em]  max-lg:text-[1.5em]'>Furnishing</h3>
                        <p>Arunah Interiors’ procurement team handles the entire FF&E process, from design and budgeting to sourcing and delivery. We manage all shipments and on-site installations, ensuring every piece aligns with the design vision and is installed to perfection before project completion.</p>
                    </div>   
                    <img 
                    className='photo' 
                    loading="lazy"
                    srcSet={`${img3_600} 600w, ${img3_956} 956w, ${img3_1020} 1020w`}
                    sizes="(max-width: 600px) 100vw, (max-width: 1020px) 50vw, 33vw"
                    src={img3} 
                    alt='img' />             
                </div>
                <div className='box service'>
                    <img 
                    className='photo' 
                    loading="lazy"
                    srcSet={`${img4_600} 600w, ${img4_956} 956w, ${img4_1020} 1020w`}
                    sizes="(max-width: 600px) 100vw, (max-width: 1020px) 50vw, 33vw"
                    src={img4} 
                    alt='img' />
                    <div className='m-[2em] max-lg:m-[1em]'>
                        <h3 className='font-heading m-0 text-[2.3em]  max-lg:text-[1.5em]'>Flipping Space</h3>
                        <p>Arunah Interiors transforms existing spaces into stunning masterpieces by reworking layouts, selecting finishes, and adding custom designs. From concept to completion, we manage every detail to enhance functionality and aesthetics, delivering seamless, elevated interior transformations.</p>
                    </div>                
                </div>
            </div>
        </>
    )
}

export default Service

