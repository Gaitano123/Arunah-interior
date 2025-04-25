import { useEffect } from "react";
import img1 from "../media/Kilimani/WhatsApp Image 2025-04-24 at 22.27.04 (1).jpeg";
import img2 from "../media/Kilimani/WhatsApp Image 2025-04-24 at 22.27.04.jpeg";
import img3 from "../media/Kilimani/WhatsApp Image 2025-04-24 at 22.27.05 (1).jpeg";
import img4 from "../media/Kilimani/WhatsApp Image 2025-04-24 at 22.27.05 (2).jpeg";
import img5 from "../media/Kilimani/WhatsApp Image 2025-04-24 at 22.27.05.jpeg";
import img6 from "../media/Kilimani/WhatsApp Image 2025-04-24 at 22.27.06 (1).jpeg";
import img7 from "../media/Kilimani/WhatsApp Image 2025-04-24 at 22.27.06.jpeg";
import img8 from "../media/Kilimani/WhatsApp Image 2025-04-24 at 22.27.07 (1).jpeg";
import img9 from "../media/Kilimani/WhatsApp Image 2025-04-24 at 22.27.07.jpeg";

function Kilimani() {

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
              style={{ backgroundImage: `url('../src/components/media/Kilimani/WhatsApp Image 2025-04-24 at 22.27.07.jpeg')` }}
              className="bg-center bg-cover min-h-[39em] flex justify-center items-center"
            >
                <h1 className='font-main text-[10em] text-primary capitalize max-lg:text-[5em]'>kilimani</h1>
            </div>
            <div className="p-[2em] flex flex-wrap gap-[2em] justify-center view">
                <img className="box potrait" src={img1} alt="kilimani view" />
                <img className="box potrait" src={img2} alt="kilimani view" />
                <img className="box landscape" src={img3} alt="kilimani view" />
                <img className="box landscape" src={img4} alt="kilimani view" />
                <img className="box potrait" src={img5} alt="kilimani view" />
                <img className="box potrait" src={img6} alt="kilimani view" />
                <img className="box landscape" src={img7} alt="kilimani view" />
                <img className="box potrait" src={img8} alt="kilimani view" />
                <img className="box potrait" src={img9} alt="kilimani view" />
            </div>
        </>
    );
}

export default Kilimani;
