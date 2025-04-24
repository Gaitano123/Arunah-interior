import { useEffect } from "react";
import img1 from './media/IMG_4693.webp'
import img2 from './media/IMG_4677.webp'
import img3 from './media/IMG_4704.webp'
import img4 from './media/IMG_4710.webp'


function About(){

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

    return(
        <>
            <div className="bg-[url('../src/components/media/IMG_4698.webp')] 
            bg-center bg-cover min-h-[39em] flex justify-center 
            items-center">
                <h1 className='font-main text-[10em] max-lg:text-[5em] text-primary capitalize'>the company</h1>
            </div>
            <div className='box m-[5em] max-lg:m-[3em] max-md:m-[2em] max-md:mt-[4em]  bg-primary p-[3em] max-lg:p-[2em]'>
                <h2 className='font-heading text-center capitalize text-[2.5em] max-lg:text-[1.5em]'>Timeless Luxury, Designed for You</h2>
                <p className='text-center'>At Arunah Interiors, we craft interiors that blend elegance, comfort, and functionality—designed to stand the test of time. Our approach is deeply personalized, ensuring each space reflects the client’s unique lifestyle. From concept to completion, our expert team meticulously manages every detail, delivering a seamless and refined design experience.</p>
            </div>
            <div className='grid grid-cols-2 m-[2em] max-md:mt-[4em] mt-[7em] max-md:grid-cols-1'>
                <div className='box p-[3em] max-lg:p-[2em] bg-primary'>
                    <h3 className='font-heading text-[4em] max-lg:text-[2em] m-0 p-0'>Our Story</h3>
                    <p>Arunah Interiors was founded with a passion for transforming spaces into stunning masterpieces. Over the years, we have expanded our reach, completing projects across Kenya in residential, commercial, and hospitality sectors. Our expertise and commitment to excellence have allowed us to work on high-end developments, bringing modern, contemporary, and luxurious interior design to life.</p>
                </div>
                <div className=' grid grid-cols-2 p-[2em] max-lg:p-0 max-lg:ml-[1em] max-md:ml-0 pt-0 max-lg:grid-cols-1 max-md:mt-[3em]'>
                    <div className='mr-[2em] max-lg:w-[100%] max-lg:mr-0 max-md:mr-0 max-lg:flex max-lg:justify-between max-md:flex-col'>
                        <img className='box h-[17em] w-[17em] max-lg:w-[10.5em] max-lg:h-[15em] max-md:w-[100%] object-cover' src={img1} alt='about image' />
                        <img className='box h-[17em] w-[17em] max-lg:w-[10.5em] max-lg:h-[15em] max-md:w-[100%] object-cover mt-[1em] max-lg:mt-0 max-lg:ml-[1em max-md:ml-0 max-md:mt-[2em]' src={img3} alt='about image' />
                    </div>
                    <img className='box h-[35em] w-[20em] max-lg:w-[100%] max-lg:mt-[1em] max-md:mt-[2em] object-cover' src={img2} alt='about image' />
                </div>
            </div>
            <div className='grid grid-cols-2 m-[3em] max-md:m-[2em] mt-[10em] mb-[10em] max-md:grid-cols-1'>
                <div className='box p-[3em] max-lg:p-[2em] bg-primary'>
                    <h3 className='font-heading text-[4em] max-lg:text-[2em] m-0 p-0'>Our Team</h3>
                    <p>At Arunah Interiors, our team of visionary designers, skilled interior architects, and meticulous project coordinators work seamlessly to deliver exceptional spaces. Backed by expert contractors, artisans, and suppliers, we ensure precision, quality, and care in every detail—transforming concepts into timeless masterpieces with a commitment to excellence.</p>
                </div>
                <img className='box h-[35em] w-[40em] object-cover ml-[2em] max-lg:ml-[1em] max-md:ml-0 max-md:mt-[3em]' src={img4} alt='about image' />
            </div>
        </>
    )
}


export default About

