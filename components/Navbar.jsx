import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { useState } from "react"

const Navbar = () => {
	const [mobileNav, setMobileNav] = useState(false)
	const toggleMobileNav = () => {
		setMobileNav((prev) => !prev)
	}

	return (
		<>
			<div className="fixed top-0 left-0 z-[100] h-20 w-full">
				<div className="flex items-center justify-between px-5 h-[100%] shadow-xl">
					<div>
						<Image
							src="/../public/assets/navLogo.png"
							alt="logo"
							width="125"
							height="60"
							className="w-20 h-10 md:h-12 md:w-24"
						/>
					</div>
					<div>
						<ul className="hidden md:flex gap-10 uppercase">
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/">About</Link>
							</li>
							<li>
								<Link href="/">Skills</Link>
							</li>
							<li>
								<Link href="/">Projects</Link>
							</li>
							<li>
								<Link href="/">Contact</Link>
							</li>
						</ul>
						<div className="cursor-pointer md:hidden" onClick={toggleMobileNav}>
							<AiOutlineMenu size={25} />
						</div>
					</div>
				</div>
				<div
					className={
						mobileNav
							? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/50"
							: " "
					}
				>
					<div
						className={
							mobileNav
								? "fixed top-0 left-0 z-[200] bg-[#ecf0f3] p-10 h-screen w-[80%] sm:w-[75%] md:w-[60%] lg:w-[45%] ease-in duration-500"
								: "md:hidden fixed top-0 left-[-100%] z-[200] h-screen w-full"
						}
					>
						<div className="flex items-center justify-between w-full">
							<Image
								src="/../public/assets/navLogo.png"
								alt="logo"
								width="80"
								height="30"
								className="w-20 h-10"
							/>
							<div
								onClick={toggleMobileNav}
								className="cursor-pointer p-3 rounded-full shadow-lg shadow-gray-400"
							>
								<AiOutlineClose size={25} />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								Let&#39;s build something legendary together
							</p>
						</div>
						<ul className="uppercase py-4">
							<li onClick={() => setMobileNav(false)} className="py-4 text-sm">
								<Link href="/"></Link>
								Home
							</li>

							<li onClick={() => setMobileNav(false)} className="py-4 text-sm">
								<Link href="/"></Link>
								About
							</li>

							<Link href="/">
								<li
									onClick={() => setMobileNav(false)}
									className="py-4 text-sm"
								>
									Skills
								</li>
							</Link>
							<Link href="/">
								<li
									onClick={() => setMobileNav(false)}
									className="py-4 text-sm"
								>
									Projects
								</li>
							</Link>
							<Link href="/">
								<li
									onClick={() => setMobileNav(false)}
									className="py-4 text-sm"
								>
									Resume
								</li>
							</Link>
							<Link href="/">
								<li
									onClick={() => setMobileNav(false)}
									className="py-4 text-sm"
								>
									Contact
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
