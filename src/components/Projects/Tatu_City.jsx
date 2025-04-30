import { useEffect } from "react";
import img1 from "../media/Tatu city/WhatsApp Image 2025-04-24 at 23.15.14 (1).jpeg";
import img2 from "../media/Tatu city/WhatsApp Image 2025-04-24 at 23.15.14 (2).jpeg";
import img3 from "../media/Tatu city/WhatsApp Image 2025-04-24 at 23.15.14 (3).jpeg";
import img4 from "../media/Tatu city/WhatsApp Image 2025-04-24 at 23.15.14.jpeg";
import img5 from "../media/Tatu city/WhatsApp Image 2025-04-24 at 23.15.15.jpeg";
import img6 from "../media/Tatu city/WhatsApp Image 2025-04-24 at 23.15.42.jpeg";

function TatuCity() {

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
            <div
            //   style={{ backgroundImage: `url('../src/components/media/Tatu city/WhatsApp Image 2025-04-24 at 23.15.42.jpeg')` }}
              className="bg-tatu_city bg-center bg-cover min-h-[39em] flex justify-center items-center"
            >
                <h1 className='font-main text-[10em] text-primary capitalize max-lg:text-[5em]'>Tatu City</h1>
            </div>
            <div className="p-[2em] flex flex-wrap gap-[2em] justify-center view">
                <img className="box potrait" src={img1} alt="tatuCity view" />
                <img className="box potrait" src={img2} alt="tatuCity view" />
                <img className="box landscape" src={img3} alt="tatuCity view" />
                <img className="box landscape" src={img4} alt="tatuCity view" />
                <img className="box potrait" src={img5} alt="tatuCity view" />
                <img className="box potrait" src={img6} alt="tatuCity view" />
            </div>
        </>
    );
}

export default TatuCity;
