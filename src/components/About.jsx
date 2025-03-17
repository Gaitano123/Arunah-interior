import { useEffect } from "react";
import image3 from './images/pexels-fotoaibe-1571460.jpg'


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
            <div className="bg-[url('../src/components/images/pexels-fotoaibe-1571460.jpg')] 
            bg-center bg-cover min-h-[39em] flex justify-center 
            items-center">
                <h1 className='font-main text-[10em] max-lg:text-[5em] text-primary capitalize'>the company</h1>
            </div>
            <div className='box m-[5em] max-lg:m-[3em] max-md:m-[2em] max-md:mt-[4em]  bg-primary p-[3em] max-lg:p-[2em]'>
                <h2 className='font-heading capitalize text-[2.5em] max-lg:text-[1.5em] max-lg:text-center'>Creating luxury interiors that will stand the test of time…</h2>
                <p className='text-center'>At Layla interiors we offer a highly personalized design service for all our clients. Our passion lies in creating interior design that is tailored to encompass the clients lifestyle and comfort.  All aspect of the project is managed by the team from concept to completion providing a seamless services to all our clients.</p>
            </div>
            <div className='grid grid-cols-2 m-[2em] max-md:mt-[4em] mt-[7em] max-md:grid-cols-1'>
                <div className='box p-[3em] max-lg:p-[2em] bg-primary'>
                    <h3 className='font-heading text-[4em] max-lg:text-[2em] m-0 p-0'>Our Story</h3>
                    <p>Layla Interiors was founded in Sweden and has developed into a successful design studio over the years.  From a young age Layla was always inspired to create beautiful spaces. Her experience came from working with private clients on various projects leading to the launch of her own studio to cater the growing demand for her services. Today Layla interiors is working with high end developers and state of the art projects in East Africa and Scandinavia.  Laylas vision is to bring mordern, contemporary and luxurious interior design to East Africa. </p>
                </div>
                <div className=' grid grid-cols-2 p-[2em] max-lg:p-0 max-lg:ml-[1em] max-md:ml-0 pt-0 max-lg:grid-cols-1 max-md:mt-[3em]'>
                    <div className='mr-[2em] max-lg:w-[100%] max-lg:mr-0 max-md:mr-0 max-lg:flex max-lg:justify-between max-md:flex-col'>
                        <img className='box h-[17em] w-[17em] max-lg:w-[10.5em] max-lg:h-[15em] max-md:w-[100%] object-cover' src={image3} alt='about image' />
                        <img className='box h-[17em] w-[17em] max-lg:w-[10.5em] max-lg:h-[15em] max-md:w-[100%] object-cover mt-[1em] max-lg:mt-0 max-lg:ml-[1em max-md:ml-0 max-md:mt-[2em]' src={image3} alt='about image' />
                    </div>
                    <img className='box h-[35em] w-[20em] max-lg:w-[100%] max-lg:mt-[1em] max-md:mt-[2em] object-cover' src={image3} alt='about image' />
                </div>
            </div>
            <div className='grid grid-cols-2 m-[3em] max-md:m-[2em] mt-[10em] mb-[10em] max-md:grid-cols-1'>
                <div className='box p-[3em] max-lg:p-[2em] bg-primary'>
                    <h3 className='font-heading text-[4em] max-lg:text-[2em] m-0 p-0'>Our Team</h3>
                    <p>We take pride in offering a high class team that are ambitious and detailed oriented. Our team consists of experienced and talented designers, interior architects and project coordinators. We provide a comprehensive service that allows us to undertake and seamlessly deliver ambitious and prestigious design projects. At Layla inteirors we have assembled a team of qualified contractors, suppliers and artisans to meet our clients expectations with precision, quality and care.</p>
                </div>
                <img className='box h-[35em] w-[40em] object-cover ml-[2em] max-lg:ml-[1em] max-md:ml-0 max-md:mt-[3em]' src={image3} alt='about image' />
            </div>
        </>
    )
}


export default About

