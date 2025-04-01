import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import img from "./images/IMG_7915.jpg"
import img1 from "./images/IMG_0856.jpg"
import img2 from "./images/IMG_1109.jpg"
import img3 from "./images/IMG_4335_6559.jpg"


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
            <div className="bg-[url('../src/components/images/IMG_1187.jpg')] 
            bg-center bg-cover min-h-[39em] flex justify-center 
            items-center">
                <h1 className='font-main text-[10em] text-primary capitalize max-lg:text-[5em]'>Arunah</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='box m-[5em] text-center max-w-[80em]'>
                    <h2 className='font-main text-[4em] max-lg:text-[2.5em]'>Where Vision Meets Craftsmanship</h2>
                    <p>At Arunah Interiors, we craft more than just spaces—we curate experiences. Specializing in luxury interior transformations, we blend innovation, elegance, and functionality to create timeless designs. From bespoke furnishings to full-scale interior execution, we bring visions to life with precision and artistry.</p>
                </div>
                <div className='grid grid-cols-2 p-[2em] max-md:grid-cols-1 max-w-[100em]'>
                    <div className='box max-w-[40em] pr-[2em] max-md:pb-[3em]'>
                        <h2 className='text-[5em] font-heading max-lg:text-[2.5em]'>Our Company</h2>
                        <p className='pb-[3em] max-md:pb-[2em]'>Arunah Interiors is a premier interior design studio based in Kenya, specializing in luxurious residential, commercial, and hospitality interior design. We collaborate with private clients, developers, and property owners to create bespoke spaces that reflect unique visions and elevate everyday living.</p>
                        <p>Our expert team of designers and architects combines innovation with functionality, ensuring every project is tailored to the client’s needs and the dynamics of modern living. With an unwavering focus on craftsmanship, attention to detail, and a client-centered approach, we deliver transformative, timeless interiors that stand the test of time.</p>
                    </div>
                    <div className='max-w-[40em]'>
                        <img className='box h-[25em] w-[100%] object-cover max-lg:h-[20em] max-lg:w-[100%]' src={img1} />
                        <div className='flex max-md:flex-col justify-between w-[100%] pt-[2em]'>
                            <img className='box h-[13em] w-[19.8em] max-md:h-[20em] max-md:w-[100%] object-cover max-lg:w-[11em]' src={img2} />
                            <img className='box h-[13em] w-[19.8em] max-md:h-[20em] max-md:w-[100%] max-md:ml-0 max-md:mt-[2em] ml-2.5 object-cover max-lg:w-[11em]' src={img3} />
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
            </div>
        </>
    )
}

export default Home
