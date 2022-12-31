import contactImg from "../public/assets/contact.svg"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FaLinkedinIn, FaGithub, FaTelegramPlane } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"

const Contact = () => {
	return (
		<div id="contact" className="w-full lg:h-screen my-10">
			<div className=" max-w-[1240px] w-full h-full p-4 py-16 mx-auto">
				<p className="uppercase text-xl tracking-widest text-[#5651e5]">
					Contact
				</p>
				<h2 className="py-4">Let's get in touch</h2>
				<div className="md:flex items-center gap-8 p-4 lg:px-8 mt-2 rounded-xl shadow-xl shadow-gray-400">
					<div className="flex-1">
						<div className="p-2 md:p-4">
							<h2 className="py-2">Raziyeh S. Moghaddam</h2>
							<h3>Front-End Developer</h3>
							<p className="py-4">
								I am available for freelance or full-time positions. Contact me
								and let&apos;s talk.
							</p>
						</div>
						<div className="p-2 md:p-4">
							<p className="uppercase pt-2 pb-1">Connect With Me</p>
							<div className="flex items-center gap-5 sm:gap-8 lg:gap-12 py-4">
								<a href="#" target="_blank" rel="noreferrer">
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 md:p-4 cursor-pointer hover:scale-110 ease-in duration-300">
										<FaLinkedinIn />
									</div>
								</a>

								<div className="rounded-full shadow-lg shadow-gray-400 p-3 md:p-4 cursor-pointer hover:scale-110 ease-in duration-300">
									<a href="mailto:soradimoghaddam@gmail.com">
										<AiOutlineMail />
									</a>
								</div>
								<a href="https://telegram.me/HiRaziyeh">
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 md:p-4 cursor-pointer hover:scale-110 ease-in duration-300">
										<FaTelegramPlane />
									</div>
								</a>
								<a
									href="https://github.com/raaziyeh"
									target="_blank"
									rel="noreferrer"
								>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 md:p-4 cursor-pointer hover:scale-110 ease-in duration-300">
										<FaGithub />
									</div>
								</a>
								<Link href="/resume">
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 md:p-4 cursor-pointer hover:scale-110 ease-in duration-300">
										<BsFillPersonLinesFill />
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className="flex-1 p-2 max-w-[300px] mx-auto mt-4">
						<Image
							src={contactImg}
							alt="contact"
							className="rounded-xl hover:scale-105 ease-in duration-300 py-2"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
