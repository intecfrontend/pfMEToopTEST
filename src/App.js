import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Works from "./components/Works";
import Nav from "./components/Nav";
import Contact from "./components/Contact";

function App() {
	return (
		<div className='bg-port bg-logo bg-no-repeat bg-cover overflow-hidden'>
			<Header />
			<Banner />
			<Nav />
			<About />
			<Works />
			<Contact />
		</div>
	);
};

export default App;