import React from "react";

// icons
import { BiHome, BiUser, BiMessageAltDetail } from 'react-icons/bi';
import { AiOutlineProject } from 'react-icons/ai';

// link
import { Link } from "react-scroll";

function Nav() {
	return (
		<nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
			<div className="container mx-auto">
				<div className="w-full bg-[#978fbb] h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white">
					<Link to='home' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
						<BiHome />
					</Link>

					<Link to='about' activeClass='active' smooth={true} spy={true} offset={-100} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
						<BiUser />
					</Link>

					<Link to='projects' activeClass='active' smooth={true} spy={true} offset={-100} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
						<AiOutlineProject />
					</Link>

					<Link to='contact' activeClass='active' smooth={true} spy={true} offset={-100} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
						<BiMessageAltDetail />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Nav;

// smooth={true}: This is a prop that is passed to the react-scroll library, which is used to provide smooth scrolling to the target element when the link is clicked.

// spy={true}: This is another prop passed to react-scroll that specifies whether the link should be highlighted as active when the user scrolls to the section of the page that it is linked to.

// offset={-200}: This is a prop that specifies the offset to apply when scrolling to the target element. In this case, the offset is set to -200 pixels, which means that the target element will be scrolled to 200 pixels above the top of the page.