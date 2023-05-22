import React, { useRef } from 'react';

// download cv
import emailjs from '@emailjs/browser';

// motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

// alert when email send
import Swal from "sweetalert2";

// icons
import { FiMail } from 'react-icons/fi';
import { BsPhone } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';


function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_ddmqcwf', 'template_wayy0u9', form.current, 'euy9XDwDTldkX1fRm')
			.then((result) => {
				console.log("result" + result.text);
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Your mail has been sent",
					showConfirmButton: false,
					timer: 1500
				})
			}, (error) => {
				console.log(error.text);
			});
		e.target.reset();
	};

	return (
		<section className='py-16 lg:section' id='contact'>
			<div className="container mx-auto">
				<h2 className='h2'>Contact me</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-32">

					{/* Info */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='col-span-1 border rounded-2xl border-white flex-col gap-y-6 pb-24 p-6 '>

						<div className="email pb-6 ">
							<div className='grid grid-cols-12 lg:grid-cols-2 w-[80px] items-center '>
								<FiMail />
								<a href="mailto:arahoedemakers@gmail.com" >
									<h4>Email:</h4>
									<p>arahoedemakers@gmail.com</p>
								</a>
							</div>
						</div>

						<div className="phone pb-6">
							<div className='grid grid-cols-2 lg:grid-cols-2 w-[80px] items-center'>
								<BsPhone />
								<a href="tel:+32471081257">
									<h4>Call:</h4>
									<p>+32471081257 </p>
								</a>
							</div>

						</div>

						<div className="location ">
							<div className='grid grid-cols-2 lg:grid-cols-2 w-[80px] items-center'>
								<GoLocation />
								<div>
									<h4>Location:</h4>
									<p>3680 Maaseik, Limburg, Belgium</p>
								</div>
							</div>
							<iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3680%20Maaseik+(My%20place)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>

						</div>
					</motion.div>


					{/* Form */}
					<motion.form
						variants={fadeIn('left', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='border rounded-2xl border-white gap-y-6 pb-24 p-6 items-center'
						ref={form} onSubmit={sendEmail}>
						<input className='bg-transparent border-b border-fuchsia-950 py-3 outline-none w-full placeholder:text-fuchsia-950 focus:border-pink-300 transition-all' name="from_name" type="text" placeholder='Your name' />
						<input className='bg-transparent border-b border-fuchsia-950 py-3 outline-none w-full placeholder:text-fuchsia-950 focus:border-pink-300  transition-all' name="from_email" type="text" placeholder='Your email' />
						<textarea className='bg-transparent h-72 border-b border-fuchsia-950 py-12 outline-none w-full placeholder:text-fuchsia-950 focus:border-pink-300 transition-all resize-none mb-12' name="message" placeholder='Your message'></textarea>
						<button className='btn btn-lg'>Send message</button>
					</motion.form>
				</div>
			</div>

		</section>

	)
}

export default Contact;
