import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import img from "./images/pexels-fotoaibe-1571460.jpg"

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
            <div className="bg-[url('../src/components/images/pexels-fotoaibe-1571460.jpg')] 
            bg-center bg-cover min-h-[39em] flex justify-center 
            items-center">
                <h1 className='font-main text-[10em] text-primary capitalize max-lg:text-[5em]'>Arunah</h1>
            </div>
            <div className='box m-[5em] text-center'>
                <h2 className='font-main text-[4em] max-lg:text-[2.5em]'>State of the art design studio</h2>
                <p>Layla Interiors is an international interior design studio, specializing in luxurious residential interior for both private clients and developers. We aim to provide tailored designs that encompass luxury, comfort and functionality that are seamlessly designed and aesthetically pleasing</p>
            </div>
            <div className='grid grid-cols-2 p-[2em] max-md:grid-cols-1'>
                <div className='box pr-[2em] max-md:pb-[3em]'>
                    <h2 className='text-[5em] font-heading max-lg:text-[2.5em]'>Our Company</h2>
                    <p className='pb-[3em] max-md:pb-[2em]'>Layla Interiors is a an interior design studio that is based in Sweden and Kenya. Specialising in interior and interior architectural design the studio works across residential, commercial and the hospitality sectors with private clients and developers.</p>
                    <p>Our experienced team of talented interior designers and architects provide exclusive services of detailed driven luxurious interiors that perfectly suit the client’s needs. At Layla interiors we bring a vast experience to the international property market along with a thoughtful understanding of the dynamics and requirements of contemporary living.</p>
                </div>
                <div className=''>
                    <img className='box h-[25em] w-[100%] object-cover max-lg:h-[20em] max-lg:w-[100%]' src={img} />
                    <div className='flex max-md:flex-col justify-between w-[100%] pt-[2em]'>
                        <img className='box h-[13em] w-[19.8em] max-md:h-[20em] max-md:w-[100%] object-cover max-lg:w-[11em]' src={img} />
                        <img className='box h-[13em] w-[19.8em] max-md:h-[20em] max-md:w-[100%] max-md:ml-0 max-md:mt-[2em] ml-2.5 object-cover max-lg:w-[11em]' src={img} />
                    </div>
                </div>
            </div>
            <button className='box w-[9.5em] h-[3.3em] text-[1.3em] font-heading
            border-secondary border-2 rounded-[1.5em] ml-[2em] bg-white text-secondary 
            hover:bg-secondary hover:text-primary hover:border-primary
            max-lg:w-[7em] max-lg:h-[2.5em] max-lg:text-[1em]' 
            
            onClick={() => {navigate("/our-story")}}
            >Read More</button>
            <div className='mt-[5em] mb-[7em] max-md:mb-[2em] max-md:mt-[3em]'>
                <h2 className='box text-[5em] font-main text-center max-lg:text-[2.5em]'>Latest Project</h2>
                <div className='flex flex-wrap justify-evenly'>
                    <div className='box h-fit w-fit flex flex-col bg-primary p-[2em] relative m-[1em]' 
                    onClick={() => {navigate("/kilimani")}}
                    >
                        <img className='h-[25em] w-[20em] object-cover relative' src={img} />
                        <div className='absolute bottom-0 left-[50%] translate-x-[-50%] 
                        bg-[rgba(0,0,0,0.7)] w-[calc(100%-4em)] mb-[2em] p-[1em] '
                        >
                            <h2 className='text-[2.5em] font-main text-primary text-center'>kilimani</h2>
                        </div>  
                    </div>

                    <div className='box h-fit w-fit flex flex-col bg-primary p-[2em] relative m-[1em]' 
                    onClick={() => {navigate("/kilimani")}}
                    >
                        <img className='h-[25em] w-[20em] object-cover relative' src={img} />
                        <div className='absolute bottom-0 left-[50%] translate-x-[-50%] 
                        bg-[rgba(0,0,0,0.7)] w-[calc(100%-4em)] mb-[2em] p-[1em] '
                        >
                            <h2 className='text-[2.5em] font-main text-primary text-center'>kilimani</h2>
                        </div>  
                    </div>

                    <div className='box h-fit w-fit flex flex-col bg-primary p-[2em] relative m-[1em]' 
                    onClick={() => {navigate("/kilimani")}}
                    >
                        <img className='h-[25em] w-[20em] object-cover relative' src={img} />
                        <div className='absolute bottom-0 left-[50%] translate-x-[-50%] 
                        bg-[rgba(0,0,0,0.7)] w-[calc(100%-4em)] mb-[2em] p-[1em] '
                        >
                            <h2 className='text-[2.5em] font-main text-primary text-center'>kilimani</h2>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
