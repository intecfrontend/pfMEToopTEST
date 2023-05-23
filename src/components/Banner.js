import React from "react";
// icons
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from '../variants';

import Image from '../images/Ara.jpg';

import { Link } from "react-scroll";


function Banner() {
	return (
		<section className='min-h-[60vh] lg:min-h-[80vh] flex items-center' id='home'>
			<div className="container mx-auto">
				<div className="flex gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'">
					<div className='bg-banner flex flex-col items-center lg:gap-x-12'></div>
					<div className='flex-1 text-center font-secondary lg:text-left'>
						<motion.h1
							variants={fadeIn('up', 0.3)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='text-[55px] font-bold leading-[0.8] lg:text-[80px]'>
							ARHISA <br />
							<span>HOEDEMAKERS</span>
						</motion.h1>
						<motion.div
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='mb-6 text-[36px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]'>
							<span className='text-white mr-4'>I am a</span>
							<TypeAnimation
								sequence={[
									'Front-end Developer',
									2000,

								]}
								speed={50}
								className='text-accent'
								wrapper='span'
								repeat={Infinity}
							/>
						</motion.div>
						<motion.p
							variants={fadeIn('up', 0.5)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='mb-6 max-w-lg mx-auto lg:mx-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio itaque est totam impedit dolorem velit unde dolorum veniam cupiditate
						</motion.p>
						<motion.div
							variants={fadeIn('up', 0.7)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
							<a href="#">
								<FaFacebook />
							</a>
							<a href="#">
								<FaLinkedin />
							</a>
							<a href="#">
								<FaGithub />
							</a>
						</motion.div>
					</div>
					<motion.div
						variants={fadeIn('down', 0.5)}
						initial="hidden"
						whileInView={'show'}
						className="hidden lg:flex flex-1 max-w-[400px] lg:max-h-[400px] justify-center items-center relative box ">
						<div className="content pointer-events-none">
							<img src={Image} alt="" />
							<h2 className="pb-3">HII THERE! 🙋<br />Want to work together? </h2>
							<Link to='contact' activeClass='active' className='pointer-events-auto cursor-pointer'>Hire me</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Banner;
