import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const Navbar = () => {
	const [mobileNav, setMobileNav] = useState(false)
	const [shadow, setShadow] = useState(false)
	const [bgColor, setBgColor] = useState("#ecf0f3")
	const [textColor, setTextColor] = useState("#1f2937")
	const router = useRouter()

	const toggleMobileNav = () => {
		setMobileNav((prev) => !prev)
	}

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true)
			} else {
				setShadow(false)
			}
		}

		window.addEventListener("scroll", handleShadow)
	}, [])

	useEffect(() => {
		if (router.route === "/") {
			setBgColor("#ecf0f3")
			setTextColor("#1f2937")
		} else {
			setBgColor("transparent")
			setTextColor("#ecf0f3")
		}
	}, [router])

	return (
		<>
			<div className={`fixed top-0 left-0 h-20 w-full z-[100] bg-[${bgColor}]`}>
				<div
					className={`flex items-center justify-between px-5 h-[100%] ${
						shadow && "shadow-xl"
					}`}
				>
					<Link href="/">
						<div id="logo" className="text-branding text-[28px]">
							RSM
						</div>
					</Link>
					<div className={`text-[${textColor}]`}>
						<ul className="hidden md:flex gap-10 uppercase">
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/#about">About</Link>
							</li>
							<li>
								<Link href="/#skills">Skills</Link>
							</li>
							<li>
								<Link href="/#projects">Projects</Link>
							</li>
							<li>
								<Link href="/#contact">Contact</Link>
							</li>
						</ul>
						<div className="cursor-pointer md:hidden" onClick={toggleMobileNav}>
							<AiOutlineMenu size={25} />
						</div>
					</div>
				</div>

				{/* Mobile Navbar */}
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
								? "fixed top-0 left-0 z-[200] bg-[#ecf0f3] p-10 h-screen w-[90%] sm:w-[75%] md:w-[60%] lg:w-[45%] ease-in duration-500"
								: "md:hidden fixed top-0 left-[-100%] z-[200] h-screen w-full"
						}
					>
						<div className="flex items-center justify-between w-full">
							<div id="logo">RSM</div>
							<div
								onClick={toggleMobileNav}
								className="cursor-pointer p-3 rounded-full shadow-lg shadow-gray-400"
							>
								<AiOutlineClose size={22} />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								Let&#39;s build something legendary together
							</p>
						</div>
						<ul className="uppercase py-4">
							<li onClick={() => setMobileNav(false)} className="py-4 text-sm">
								<Link href="/">Home</Link>
							</li>

							<li onClick={() => setMobileNav(false)} className="py-4 text-sm">
								<Link href="/#about">About</Link>
							</li>

							<li onClick={() => setMobileNav(false)} className="py-4 text-sm">
								<Link href="/#skills">Skills</Link>
							</li>

							<li onClick={() => setMobileNav(false)} className="py-4 text-sm">
								<Link href="/#projects">Projects</Link>
							</li>

							<li onClick={() => setMobileNav(false)} className="py-4 text-sm">
								<Link href="/">Resume</Link>
							</li>

							<li onClick={() => setMobileNav(false)} className="py-4 text-sm">
								<Link href="/#contact">Contact</Link>
							</li>
						</ul>
						<div className="mt-8">
							<p className="mb-3 text-branding uppercase tracking-widest">
								Let's connect
							</p>
							<div className="flex gap-10 sm:gap-14 items-center justify-center">
								<a
									href="/"
									rel="noopener noreferrer"
									className="p-3 rounded-full shadow-lg shadow-gray-400 ease-out duration-200 hover:scale-110"
								>
									<FaLinkedinIn />
								</a>
								<a
									href="/"
									rel="noopener noreferrer"
									className="p-3 rounded-full shadow-lg shadow-gray-400 ease-out duration-200 hover:scale-110"
								>
									<AiOutlineMail />
								</a>
								<a
									href="https://telegram.me/HiRaziyeh"
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 rounded-full shadow-lg shadow-gray-400 ease-out duration-200 hover:scale-110"
								>
									<FaTelegramPlane />
								</a>
								<a
									href="/"
									rel="noopener noreferrer"
									className="p-3 rounded-full shadow-lg shadow-gray-400 ease-out duration-200 hover:scale-110"
								>
									<FaGithub />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
