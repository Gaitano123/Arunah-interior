import { useState, useEffect, useRef } from "react"
import { Toaster, toast } from 'sonner';
import emailjs from '@emailjs/browser';

function Contact(){

    const form = useRef();

    const [formInputs, setFormInputs] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: ""
    })

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

    function handleChange(e) {
        const { name, value } = e.target;
        setFormInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    

    function handleClick(e){
        e.preventDefault();

        if (!formInputs.firstname || !formInputs.lastname || !formInputs.email || !formInputs.message) {
            toast.error("All fields are required.");
            return;
        }
        
        emailjs.sendForm('service_pmxob0e', 'template_6kei0l8', form.current,{publicKey: 'xBciZ-3nql6rjAMuR'})
        .then(
            () => {
              toast.success('Message sent successfully');
              setFormInputs({
                firstname: "",
                lastname: "",
                email: "",
                message: ""
            })
            },
            (error) => {
              toast.error('Message not sent');
            },
        );
    }


    return(
        <>
            <div className="bg-[url('../src/components/media/IMG_4689.webp')] 
            bg-center bg-cover min-h-[39em] flex justify-center 
            items-center">
                <h1 className="font-main text-[10em] max-lg:text-[5em] text-primary capitalize">contact us</h1>
            </div>
            <div className="box flex justify-between max-lg:flex-col max-lg:items-center p-[3em] mt-[5em] max-lg:mt-[3em]">
                <div className="w-[35em] max-lg:w-[100%] min-lg:mr-[2em] p-[2em] bg-primary">
                    <h3 className="capitalize font-heading text-[4em] max-lg:text-[2em] m-0 p-0">Contact us</h3>
                    <p>Looking to transform your space into a masterpiece? At Arunah Interiors, we specialize in bringing vision and elegance to life. Based in Nairobi, Kenya, we work with clients locally and globally, curating interiors that redefine luxury and functionality.</p>
                    <p>Get in touch, and let’s turn your space into a masterpiece!</p>
                </div>
                <form className="flex flex-col max-lg:mt-[5em] max-lg:mb-[5em]" ref={form}>
                    <p>Name <span>(required)</span></p>
                    <div className="mt-[1em] flex">
                        <label>First Name
                            <input className="w-[7em] p-[0.5em] border-2 border-gb rounded-2xl ml-[0.1em]" value={formInputs.firstname} onChange={handleChange} name="firstname" type="text" />
                        </label>
                        <label>Last Name
                            <input className="w-[7em] p-[0.5em] border-2 border-gb rounded-2xl ml-[0.3em]" value={formInputs.lastname} onChange={handleChange} name="lastname" type="text" />
                        </label>
                    </div>
                    <label className="mt-[2em]">Email
                        <input className="w-[100%] p-[0.5em] border-2 border-gb rounded-2xl ml-[0.3em]" value={formInputs.email} onChange={handleChange} name="email" type="email" />
                    </label>
                    <label className="mt-[2em]">Message
                        <textarea className="w-[100%] p-[0.5em] border-2 border-gb rounded-2xl" value={formInputs.message} onChange={handleChange} name="message" type='text' />
                    </label>
                    <button className="text-[1em] text-gb w-[6em] h-[3em] border-2 border-gb rounded-2xl hover:bg-gb hover:text-primary" type="submit"onClick={handleClick} >Send</button>
                </form>
            </div>
            <Toaster position='top-right' expand={false} richColors/>
        </>
    )
}


export default Contact


