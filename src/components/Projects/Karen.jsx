import { useEffect } from "react";
import img1 from "../media/Karen/WhatsApp Image 2025-04-24 at 22.32.05.jpeg";
import img2 from "../media/Karen/WhatsApp Image 2025-04-24 at 22.34.10 (1).jpeg";
import img3 from "../media/Karen/WhatsApp Image 2025-04-24 at 22.34.10 (2).jpeg";
import img4 from "../media/Karen/WhatsApp Image 2025-04-24 at 22.34.10.jpeg";
import img5 from "../media/Karen/WhatsApp Image 2025-04-24 at 22.34.11 (1).jpeg";
import img6 from "../media/Karen/WhatsApp Image 2025-04-24 at 22.34.11 (2).jpeg";
import img7 from "../media/Karen/WhatsApp Image 2025-04-24 at 22.34.11 (3).jpeg";
import img8 from "../media/Karen/WhatsApp Image 2025-04-24 at 22.34.11 (4).jpeg";
import img9 from "../media/Karen/WhatsApp Image 2025-04-24 at 22.34.11.jpeg";
import img10 from "../media/Karen/WhatsApp Image 2025-04-24 at 22.34.101.jpeg";


function Karen() {

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
            //   style={{ backgroundImage: `url('../src/components/media/Karen/WhatsApp Image 2025-04-24 at 22.34.10.jpeg')` }}
              className="bg-karen bg-center bg-cover min-h-[39em] flex justify-center items-center"
            >
              <h1 className='font-main text-[10em] text-primary capitalize max-lg:text-[5em]'>Karen</h1>
            </div>
            <div className="p-[2em] flex flex-wrap gap-[2em] justify-center view">
                <img className="box potrait" src={img1} alt="Karen view" />
                <img className="box potrait" src={img2} alt="Karen view" />
                <img className="box landscape" src={img3} alt="Karen view" />
                <img className="box landscape" src={img4} alt="Karen view" />
                <img className="box potrait" src={img5} alt="Karen view" />
                <img className="box potrait" src={img6} alt="Karen view" />
                <img className="box landscape" src={img7} alt="Karen view" />
                <img className="box potrait" src={img8} alt="Karen view" />
                <img className="box potrait" src={img9} alt="Karen view" />
                <img className="box potrait" src={img10} alt="Karen view" />
            </div>
        </>
    );
}

export default Karen;
