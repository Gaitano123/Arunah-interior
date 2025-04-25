import { useEffect } from "react";
import img1 from "../media/South B/WhatsApp Image 2025-04-24 at 23.26.58 (1).jpeg";
import img2 from "../media/South B/WhatsApp Image 2025-04-24 at 23.26.58 (2).jpeg";
import img3 from "../media/South B/WhatsApp Image 2025-04-24 at 23.26.58.jpeg";
import img4 from "../media/South B/WhatsApp Image 2025-04-24 at 23.31.39.jpeg";
import img5 from "../media/South B/WhatsApp Image 2025-04-24 at 23.33.42.jpeg";
import img6 from "../media/South B/WhatsApp Image 2025-04-24 at 23.37.54.jpeg";
import img7 from "../media/South B/WhatsApp Image 2025-04-25 at 00.22.32.jpeg";
import img8 from "../media/South B/WhatsApp Image 2025-04-25 at 00.32.05.jpeg";
import img9 from "../media/South B/WhatsApp Image 2025-04-25 at 00.34.06.jpeg";
import img10 from "../media/South B/WhatsApp Image 2025-04-25 at 00.38.05.jpeg";

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
            <div
              style={{ backgroundImage: `url('../src/components/media/South B/WhatsApp Image 2025-04-24 at 23.31.39.jpeg')` }}
              className="bg-center bg-cover min-h-[39em] flex justify-center items-center"
            >
                <h1 className='font-main text-[10em] text-primary capitalize max-lg:text-[5em]'>SouthB</h1>
            </div>
            <div className="p-[2em] flex flex-wrap gap-[2em] justify-center view">
                <img className="box potrait" src={img1} alt="SouthB view" />
                <img className="box potrait" src={img2} alt="SouthB view" />
                <img className="box landscape" src={img3} alt="SouthB view" />
                <img className="box landscape" src={img4} alt="SouthB view" />
                <img className="box potrait" src={img5} alt="SouthB view" />
                <img className="box potrait" src={img6} alt="SouthB view" />
                <img className="box landscape" src={img7} alt="SouthB view" />
                <img className="box potrait" src={img8} alt="SouthB view" />
                <img className="box potrait" src={img9} alt="SouthB view" />
                <img className="box potrait" src={img10} alt="SouthB view" />
            </div>
        </>
    );
}

export default SouthB;
