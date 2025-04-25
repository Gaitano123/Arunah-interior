import { useEffect } from "react";
import img1 from "../media/Eldoret/WhatsApp Image 2025-04-24 at 22.37.34.jpeg";
import img2 from "../media/Eldoret/WhatsApp Image 2025-04-24 at 22.37.36 (1).jpeg";
import img3 from "../media/Eldoret/WhatsApp Image 2025-04-24 at 22.37.36.jpeg";
import img4 from "../media/Eldoret/WhatsApp Image 2025-04-24 at 22.37.37.jpeg";
import img5 from "../media/Eldoret/WhatsApp Image 2025-04-24 at 22.47.13 (1).jpeg";
import img6 from "../media/Eldoret/WhatsApp Image 2025-04-24 at 22.47.13 (2).jpeg";
import img7 from "../media/Eldoret/WhatsApp Image 2025-04-24 at 22.47.13 (3).jpeg";
import img8 from "../media/Eldoret/WhatsApp Image 2025-04-24 at 22.47.13.jpeg";
import img9 from "../media/Eldoret/WhatsApp Image 2025-04-24 at 22.51.55.jpeg";
import img10 from "../media/Eldoret/WhatsApp Image 2025-04-24 at 22.52.32.jpeg";
import img11 from "../media/Eldoret/WhatsApp Image 2025-04-24 at 22.53.08.jpeg";
import img12 from "../media/Eldoret/WhatsApp Image 2025-04-25 at 00.19.21.jpeg";
import img13 from "../media/Eldoret/WhatsApp Image 2025-04-25 at 00.19.37.jpeg";
import img14 from "../media/Eldoret/WhatsApp Image 2025-04-25 at 00.20.27.jpeg";
import img15 from "../media/Eldoret/WhatsApp Image 2025-04-25 at 00.21.02.jpeg";
import img16 from "../media/Eldoret/WhatsApp Image 2025-04-25 at 00.24.42.jpeg";
import img17 from "../media/Eldoret/WhatsApp Image 2025-04-25 at 00.25.03.jpeg";


function Eldoret() {

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
              style={{ backgroundImage: `url('../src/components/media/Eldoret/WhatsApp Image 2025-04-24 at 22.47.13 (3).jpeg')` }}
              className="bg-center bg-cover min-h-[39em] flex justify-center items-center"
            >
              <h1 className='font-main text-[10em] text-primary capitalize max-lg:text-[5em]'>Eldoret</h1>
            </div>

            <div className="p-[2em] flex flex-wrap gap-[2em] justify-center view">
                <img className="box potrait" src={img1} alt="Eldoret view" />
                <img className="box landscape" src={img2} alt="Eldoret view" />
                <img className="box landscape" src={img3} alt="Eldoret view" />
                <img className="box landscape" src={img4} alt="Eldoret view" />
                <img className="box potrait" src={img5} alt="Eldoret view" />
                <img className="box potrait" src={img6} alt="Eldoret view" />
                <img className="box landscape" src={img7} alt="Eldoret view" />
                <img className="box potrait" src={img8} alt="Eldoret view" />
                <img className="box potrait" src={img9} alt="Eldoret view" />
                <img className="box landscape" src={img10} alt="Eldoret view" />
                <img className="box potrait" src={img11} alt="Eldoret view" />
                <img className="box potrait" src={img12} alt="Eldoret view" />
                <img className="box potrait" src={img13} alt="Eldoret view" />
                <img className="box landscape" src={img14} alt="Eldoret view" />
                <img className="box potrait" src={img15} alt="Eldoret view" />
                <img className="box potrait" src={img16} alt="Eldoret view" />
                <img className="box potrait" src={img17} alt="Eldoret view" />
            </div>
        </>
    );
}

export default Eldoret;
