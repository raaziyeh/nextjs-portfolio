import Image from "next/image"
import Link from "next/link"
import React from "react"
import AboutImg from "../public/assets/about.svg"

const About = () => {
	return (
		<div id="about" className="w-full lg:h-screen">
			<div className=" max-w-[1240px] w-full h-full p-4 py-16 mx-auto md:flex items-center gap-8">
				<div className="flex-[2]">
					<p className="uppercase text-xl tracking-widest text-branding">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600 text-justify md:text-lg">
						I specialize in building mobile responsive front-end UI applications
						that connect with API’s and other backend technologies. I’m
						passionate about learning new technologies and understand there is
						more than one way to accomplish a task. Though I am most proficient
						in building front-end applications using HTML, CSS, Javascript, and
						React, I am a quick learner and can pick up new tech stacks as
						needed.
					</p>
					<Link href="/#projects">
						<p className="py-2 text-gray-600 underline cursor-pointer md:text-lg">
							Check out some of my latest projects.
						</p>
					</Link>
				</div>
				<div className="hidden md:flex flex-1 p-2 max-w-[300px] mx-auto mt-4">
					<Image src={AboutImg} className="m-auto w-full" alt="/" />
				</div>
			</div>
		</div>
	)
}

export default About
