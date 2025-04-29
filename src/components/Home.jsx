import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import img from "./media/IMG_4701.webp"
import img1 from "./media/IMG_4695.webp"
import img1_600 from "./media/WhatsApp_Image_2025-04-29_at_18.08.06_z88qxl_c_scale,w_600.jpg"
import img1_956 from "./media/WhatsApp_Image_2025-04-29_at_18.08.06_z88qxl_c_scale,w_904.jpg"
import img1_1020 from "./media/WhatsApp_Image_2025-04-29_at_18.08.06_z88qxl_c_scale,w_1020.jpg"
import img2 from "./media/IMG_4685.webp"
import img2_600 from "./media/WhatsApp_Image_2025-04-29_at_18.08.11_pjhpgn_c_scale,w_600.jpg"
import img2_956 from "./media/WhatsApp_Image_2025-04-29_at_18.08.11_pjhpgn_c_scale,w_956.jpg"
import img2_1020 from "./media/WhatsApp_Image_2025-04-29_at_18.08.11_pjhpgn_c_scale,w_1020.jpg"
import img3 from "./media/IMG_4683.webp"
import img3_600 from "./media/WhatsApp_Image_2025-04-29_at_18.07.44_1_x8lmpx_c_scale,w_600.jpg"
import img3_956 from "./media/WhatsApp_Image_2025-04-29_at_18.07.44_1_x8lmpx_c_scale,w_867.jpg"
import img3_1020 from "./media/WhatsApp_Image_2025-04-29_at_18.07.44_1_x8lmpx_c_scale,w_1020.jpg"
import img9 from "./media/Eldoret/WhatsApp Image 2025-04-24 at 22.51.55.jpeg";
import img4 from "./media/Karen/WhatsApp Image 2025-04-24 at 22.34.10 (2).jpeg";




function Home(){

    const navigate = useNavigate()


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
            <div className="bg-[url('../src/components/media/IMG_4692.webp')] 
            bg-center bg-cover min-h-[39em] flex justify-center 
            items-center">
                <h1 className='font-main text-[10em] text-primary capitalize max-lg:text-[5em]'>Arunah</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='box m-[5em] text-center max-w-[80em]'>
                    <h2 className='font-main text-[4em] max-lg:text-[2.5em]'>Where Vision Meets Craftsmanship</h2>
                    <p>At Arunah Interiors, we craft more than just spaces—we curate experiences. Specializing in interior transformations, we blend innovation, elegance, and functionality to create timeless designs. From bespoke furnishings to full-scale interior execution, we bring visions to life with precision and artistry.</p>
                </div>
                <div className='grid grid-cols-2 p-[2em] max-md:grid-cols-1 max-w-[100em]'>
                    <div className='box max-w-[40em] pr-[2em] max-md:pb-[3em]'>
                        <h2 className='text-[5em] font-heading max-lg:text-[2.5em]'>Our Company</h2>
                        <p className='pb-[3em] max-md:pb-[2em]'>Arunah Interiors is a premier interior design studio based in Kenya. We specialize in residential, commercial, and hospitality interior design. We collaborate with private clients, developers, and property owners to curate spaces that suit each client's needs.</p>
                        <p>We partner with our clients from the inception of a project to its completion, ranging from selecting lighting and electrical provisions, acquiring tiles, and planning floor layouts before installations, to choosing paint colors, selecting home finishes, designing kitchen layouts, and picking cabinetry colors that complement the overall design. </p>
                    </div>
                    <div className='max-w-[40em]'>
                        <img
                        className='box h-[25em] w-[100%] object-cover max-lg:h-[20em] max-lg:w-[100%]' 
                        loading="lazy"
                        // sizes='(max-width: 600px) , (max-width: 786px) , (max-width: 1020px)'
                        srcSet={`${img1_600} 600w, ${img1_956} 786w, ${img1_1020} 1020w`}
                        src={img1}
                        alt='image 1'/>
                        <div className='flex max-md:flex-col justify-between w-[100%] pt-[2em]'>
                            <img
                            className='box h-[13em] w-[19.8em] max-md:h-[20em] max-md:w-[100%] object-cover max-lg:w-[11em]' 
                            loading="lazy"
                            sizes="(max-width: 786px) 100vw, 316px"                            
                            srcSet={`${img2_600} 600w, ${img2_956} 786w, ${img2_1020} 1020w`}
                            src={img2} 
                            alt='image2'/>
                            <img 
                            className='box h-[13em] w-[19.8em] max-md:h-[20em] max-md:w-[100%] max-md:ml-0 max-md:mt-[2em] ml-2.5 object-cover max-lg:w-[11em]' 
                            loading="lazy"
                            sizes="(max-width: 786px) 100vw, 316px"
                            srcSet={`${img3_600} 600w, ${img3_956} 786w, ${img3_1020} 1020w`}
                            src={img3} 
                            alt='image3'/>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] max-w-[80em]'>
                    <button className='box w-[9.5em] h-[3.3em] text-[1.3em] font-heading
                    border-secondary border-2 rounded-[1.5em] ml-[2em] bg-white text-secondary 
                    hover:bg-secondary hover:text-primary hover:border-primary
                    max-lg:w-[7em] max-lg:h-[2.5em] max-lg:text-[1em]' 

                    onClick={() => {navigate("/our-story")}}
                    >Read More</button>
                </div>

                <div className='mt-[5em] mb-[7em] max-md:mb-[2em] max-md:mt-[3em]'>
                    <h2 className='box text-[5em] font-main text-center max-lg:text-[2.5em]'>Latest Project</h2>
                    <div className='flex flex-wrap justify-evenly'>
                        <div className='box h-fit w-fit flex flex-col bg-primary p-[2em] relative m-[1em]' 
                        onClick={() => {navigate("/eldoret")}}
                        >
                            <img className='h-[25em] w-[20em] object-cover relative' src={img9} />
                            <div className='absolute bottom-0 left-[50%] translate-x-[-50%] 
                            bg-[rgba(0,0,0,0.7)] w-[calc(100%-4em)] mb-[2em] p-[1em] '
                            >
                                <h2 className='text-[2.5em] font-main text-primary text-center capitalize'>eldoret</h2>
                            </div>  
                        </div>

                        <div className='box h-fit w-fit flex flex-col bg-primary p-[2em] relative m-[1em]' 
                        onClick={() => {navigate("/tatu_city")}}
                        >
                            <img className='h-[25em] w-[20em] object-cover relative' src={img} />
                            <div className='absolute bottom-0 left-[50%] translate-x-[-50%] 
                            bg-[rgba(0,0,0,0.7)] w-[calc(100%-4em)] mb-[2em] p-[1em] '
                            >
                                <h2 className='text-[2.5em] font-main text-primary text-center capitalize'>tatu city</h2>
                            </div>  
                        </div>

                        <div className='box h-fit w-fit flex flex-col bg-primary p-[2em] relative m-[1em]' 
                        onClick={() => {navigate("/karen")}}
                        >
                            <img className='h-[25em] w-[20em] object-cover relative' src={img4} />
                            <div className='absolute bottom-0 left-[50%] translate-x-[-50%] 
                            bg-[rgba(0,0,0,0.7)] w-[calc(100%-4em)] mb-[2em] p-[1em] '
                            >
                                <h2 className='text-[2.5em] font-main text-primary text-center capitalize'>karen</h2>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
