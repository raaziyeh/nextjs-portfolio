import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa"
import React from "react"

const Main = () => {
	return (
		<div id="home" className="w-100% h-screen flex items-center justify-center">
			<div className="text-center p-3 max-w-[1240px]">
				<div className="uppercase tracking-widest text-gray-600">
					let's build something together
				</div>
				<h2 className="text-4xl sm:text-5xl md:text-6xl pt-6 pb-2">
					Hi, I'm <span className="text-[#5B4EE4]">Raziyeh</span>
				</h2>
				<h1 className="pt-2">A Front-End Web Developer</h1>
				<p className="text-gray-600 max-w-[70%] mx-auto py-6">
					I’m focused on building responsive front-end web applications while
					learning different computer science subjects and web development
					technologies
				</p>
				<div className="py-4 mx-auto flex items-center justify-center gap-10 sm:gap-12 md:gap-16">
					<a
						href="/"
						rel="noopener noreferrer"
						className="p-4 rounded-full shadow-lg shadow-gray-400 ease-out duration-200 hover:scale-110"
					>
						<FaLinkedinIn />
					</a>
					<a
						href="/"
						rel="noopener noreferrer"
						className="p-4 rounded-full shadow-lg shadow-gray-400 ease-out duration-200 hover:scale-110"
					>
						<AiOutlineMail />
					</a>
					<a
						href="https://telegram.me/HiRaziyeh"
						target="_blank"
						rel="noopener noreferrer"
						className="p-4 rounded-full shadow-lg shadow-gray-400 ease-out duration-200 hover:scale-110"
					>
						<FaTelegramPlane />
					</a>
					<a
						href="/"
						rel="noopener noreferrer"
						className="p-4 rounded-full shadow-lg shadow-gray-400 ease-out duration-200 hover:scale-110"
					>
						<FaGithub />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Main
