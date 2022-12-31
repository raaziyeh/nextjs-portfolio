import Head from "next/head"
import About from "../components/About"
import Contact from "../components/Contact"
import GoToTop from "../components/GoToTop"
import Main from "../components/Main"
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
				<Main />
				<About />
				<Skills />
				<Projects />
				<Contact />
				<GoToTop />
			</main>
		</div>
	)
}
