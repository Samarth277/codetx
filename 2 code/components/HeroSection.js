import React from "react";

function HeroSection() {
	return (
		<div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
			<h1 className="text-gray-900 pb-10">
				Working Done <span className="text-blue-500"></span> &{" "}
				<span className="text-blue-400">Titan Intech</span>
			</h1>
			<div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
				<h1 className="text-center">Welcome Guys </h1>
			</div>
		</div>
	);
}

export default HeroSection;
