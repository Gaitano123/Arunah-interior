import { useEffect } from "react";
import img1 from "../media/lavington/WhatsApp Image 2025-04-24 at 23.43.10.jpeg";
import img2 from "../media/lavington/WhatsApp Image 2025-04-24 at 23.43.11 (1).jpeg";
import img3 from "../media/lavington/WhatsApp Image 2025-04-24 at 23.43.11.jpeg";
import img4 from "../media/lavington/WhatsApp Image 2025-04-25 at 00.13.18.jpeg";
import img5 from "../media/lavington/WhatsApp Image 2025-04-25 at 00.15.15.jpeg";
import img6 from "../media/lavington/WhatsApp Image 2025-04-25 at 00.17.19.jpeg";
import img7 from "../media/lavington/WhatsApp Image 2025-04-25 at 00.18.02.jpeg";
import img8 from "../media/lavington/WhatsApp Image 2025-04-25 at 00.20.43.jpeg";


function Lavington() {

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
            //   style={{ backgroundImage: `url('../src/components/media/lavington/WhatsApp Image 2025-04-24 at 23.43.11 (1).jpeg')` }}
              className="bg-lavington bg-center bg-cover min-h-[39em] flex justify-center items-center"
            >
                <h1 className='font-main text-[10em] text-primary capitalize max-lg:text-[5em]'>Lavington</h1>
            </div>
            <div className="p-[2em] flex flex-wrap gap-[2em] justify-center view">
                <img className="box potrait" src={img1} alt="Lavington view" />
                <img className="box potrait" src={img2} alt="Lavington view" />
                <img className="box landscape" src={img3} alt="Lavington view" />
                <img className="box landscape" src={img4} alt="Lavington view" />
                <img className="box landscape" src={img5} alt="Lavington view" />
                <img className="box landscape" src={img6} alt="Lavington view" />
                <img className="box landscape" src={img7} alt="Lavington view" />
                <img className="box potrait" src={img8} alt="Lavington view" />
            </div>
        </>
    );
}

export default Lavington;
