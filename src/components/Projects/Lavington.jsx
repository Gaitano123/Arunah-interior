import { useEffect } from "react";
import img1 from "../media/lavington/WhatsApp Image 2025-04-24 at 23.43.10.jpeg";
import img2 from "../media/lavington/WhatsApp Image 2025-04-24 at 23.43.11 (1).jpeg";
import img3 from "../media/lavington/WhatsApp Image 2025-04-24 at 23.43.11.jpeg";

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
              style={{ backgroundImage: `url('../src/components/media/lavington/WhatsApp Image 2025-04-24 at 23.43.11 (1).jpeg')` }}
              className="bg-center bg-cover min-h-[39em] flex justify-center items-center"
            >
                <h1 className='font-main text-[10em] text-primary capitalize max-lg:text-[5em]'>Lavington</h1>
            </div>
            <div className="p-[2em] flex flex-wrap gap-[2em] justify-center view">
                <img className="box potrait" src={img1} alt="Lavington view" />
                <img className="box potrait" src={img2} alt="Lavington view" />
                <img className="box landscape" src={img3} alt="Lavington view" />
            </div>
        </>
    );
}

export default Lavington;
