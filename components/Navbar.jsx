import Image from "next/image"
import Link from "next/link"
import { AiOutlineMenu } from "react-icons/ai"
import React from "react"

const Navbar = () => {
	return (
		<div className="fixed top-0 left-0 h-20 w-full px-5 flex items-center justify-between shadow-xl">
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
				<div className="cursor-pointer md:hidden">
					<AiOutlineMenu size={25} />
				</div>
			</div>
		</div>
	)
}

export default Navbar
