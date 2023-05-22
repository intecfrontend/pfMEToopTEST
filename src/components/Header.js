import React from 'react';
import Logo from '../images/logo.png';
import '../style/style.css';
import CV from '../images/CVAra.pdf';

function Header() {
	const fileName = "CVAra.pdf"

	return (
		<header className="py-8">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<a href="#">
						<img className='w-32' src={Logo} alt="" />
					</a>

					{/* Resume */}
					<a href={CV} download={fileName}>
						<button className="btn btn-sm">
							My Resume
						</button>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;

{/* <header className="pt-4 pb-2 fixed top-0 z-50">
<div className="relative z-10 w-full bg-white">
<div className="flex justify-between items-center ml-10">
	<a href="#" className="logo">
		<img src={Logo} alt="" />
	</a>

	<nav className="navbar">
		<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul class="font-medium flex flex-col p-4 md:p-2 mt-4 border border-fuchsia-800 rounded-lg bg-gray-50 md:flex-row md:space-x-10 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
				<li>
					<a href="#" class="block py-2 pl-3 pr-4 text-white bg-fuchsia-800 rounded md:bg-transparent md:text-fuchsia-800 md:p-0 dark:text-white md:dark:text-fuchsia-800" aria-current="page">Home</a>
				</li>
				<li>
					<a href="/About" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-800 md:p-0 dark:text-white md:dark:hover:text-fuchsia-800 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
				</li>
				<li>
					<a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-800 md:p-0 dark:text-white md:dark:hover:text-fuchsia-800 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
				</li>
				<li>
					<a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-800 md:p-0 dark:text-white md:dark:hover:text-fuchsia-800 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Me</a>
				</li>
			</ul>
		</div>
	</nav>

	<button className="btn btn-sm mr-10">
		My resume
	</button>
</div>
</div>
</header> */}


