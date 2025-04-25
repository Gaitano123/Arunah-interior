import { useEffect } from "react";
import img from "../media/IMG_4701.webp";

function SouthB() {

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
                <h1 className='font-main text-[10em] text-primary capitalize max-lg:text-[5em]'>SouthB</h1>
            </div>
            <div className="p-[2em] flex flex-wrap gap-[2em] justify-center view">
                <img className="box potrait" src={img} alt="SouthB view" />
                <img className="box potrait" src={img} alt="SouthB view" />
                <img className="box landscape" src={img} alt="SouthB view" />
                <img className="box landscape" src={img} alt="SouthB view" />
                <img className="box potrait" src={img} alt="SouthB view" />
                <img className="box potrait" src={img} alt="SouthB view" />
                <img className="box landscape" src={img} alt="SouthB view" />
                <img className="box potrait" src={img} alt="SouthB view" />
                <img className="box potrait" src={img} alt="SouthB view" />
            </div>
        </>
    );
}

export default SouthB;
