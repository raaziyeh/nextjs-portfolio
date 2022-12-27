import Head from "next/head"
import About from "../components/About"
import Contact from "../components/Contact"
import Main from "../components/Main"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects/Projects"
import Skills from "../components/Skills/Skills"

export default function Home() {
	return (
		<div>
			<Head>
				<title>Raziyeh | Front-end Developer</title>
				<meta
					name="description"
					content="Portfolio website of Raziyeh S. Moghaddam. the Front-end developer"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Navbar />
				<Main />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
		</div>
	)
}
