import Head from "next/head"
import Navbar from "../components/Navbar"

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
			</main>
		</div>
	)
}
