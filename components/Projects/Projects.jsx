import React from "react"
import ProjectItem from "./ProjectItem"
import shopImg from "../../public/assets/projects/online-shop.png"
import dashboardImg from "../../public/assets/projects/react-dashboard.png"
import socialMediaImg from "../../public/assets/projects/social-media.png"
import tenziesImg from "../../public/assets/projects/tenzies-game.png"
import vanillaPortfolioImg from "../../public/assets/projects/vanilla-portfolio.png"
import weatherAppImg from "../../public/assets/projects/weather-app.png"

const projectsList = [
	{
		title: "Online Shop",
		tech: "React JS",
		backgroundImg: shopImg,
		projectUrl: "/shop",
		id: 1,
	},
	{
		title: "Admin Dashboard",
		tech: "React JS",
		backgroundImg: dashboardImg,
		projectUrl: "/dashboard",
		id: 2,
	},
	{
		title: "Social Media App",
		tech: "React JS",
		backgroundImg: socialMediaImg,
		projectUrl: "/social",
		id: 3,
	},
	{
		title: "Tenzies Game",
		tech: "React JS",
		backgroundImg: tenziesImg,
		projectUrl: "/tenzies",
		id: 4,
	},
	{
		title: "Weather App",
		tech: "Vanilla JS",
		backgroundImg: weatherAppImg,
		projectUrl: "/weather",
		id: 5,
	},
	{
		title: "Vanilla Portfolio",
		tech: "Vanilla JS",
		backgroundImg: vanillaPortfolioImg,
		projectUrl: "/vanillaPortfolio",
		id: 6,
	},
]
const Projects = () => {
	return (
		<div id="projects" className="w-full lg:min-h-screen my-10">
			<div className="max-w-[1240px] w-full min-h-full p-4 py-16 mx-auto flex flex-col justify-center">
				<p className="uppercase text-xl tracking-widest text-[#5651e5]">
					Projects
				</p>
				<h2 className="py-4">What I've Built</h2>
				<div className="grid sm:grid-cols-2 gap-8 py-4">
					{projectsList.map((project) => (
						<ProjectItem key={project.id} {...project} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Projects
