import { useEffect } from "react";
import img1 from "../media/Kileleshwa/WhatsApp Image 2025-04-24 at 22.41.39 (1).jpeg";
import img2 from "../media/Kileleshwa/WhatsApp Image 2025-04-24 at 22.41.39 (2).jpeg";
import img3 from "../media/Kileleshwa/WhatsApp Image 2025-04-24 at 22.41.39.jpeg";
import img4 from "../media/Kileleshwa/WhatsApp Image 2025-04-24 at 22.41.40.jpeg";
import img5 from "../media/Kileleshwa/WhatsApp Image 2025-04-24 at 22.42.21.jpeg";
import img6 from "../media/Kileleshwa/WhatsApp Image 2025-04-24 at 23.20.28.jpeg";
import img7 from "../media/Kileleshwa/WhatsApp Image 2025-04-24 at 23.22.04.jpeg";
import img8 from "../media/Kileleshwa/WhatsApp Image 2025-04-24 at 23.23.31.jpeg";

function Kileleshwa() {

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
              style={{ backgroundImage: `url('../src/components/media/Kileleshwa/WhatsApp Image 2025-04-24 at 22.41.39 (2).jpeg')` }}
              className="bg-center bg-cover min-h-[39em] flex justify-center items-center"
            >
                <h1 className='font-main text-[10em] text-primary capitalize max-lg:text-[5em]'>Kileleshwa</h1>
            </div>
            <div className="p-[2em] flex flex-wrap gap-[2em] justify-center view">
                <img className="box potrait" src={img1} alt="Kileleshwa view" />
                <img className="box potrait" src={img2} alt="Kileleshwa view" />
                <img className="box landscape" src={img3} alt="Kileleshwa view" />
                <img className="box landscape" src={img4} alt="Kileleshwa view" />
                <img className="box potrait" src={img5} alt="Kileleshwa view" />
                <img className="box potrait" src={img6} alt="Kileleshwa view" />
                <img className="box landscape" src={img7} alt="Kileleshwa view" />
                <img className="box potrait" src={img8} alt="Kileleshwa view" />
            </div>
        </>
    );
}

export default Kileleshwa;
