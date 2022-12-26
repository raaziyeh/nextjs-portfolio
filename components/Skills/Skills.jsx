import htmlImg from "../../public/assets/skills/html.png"
import cssImg from "../../public/assets/skills/css.png"
import javascriptImg from "../../public/assets/skills/javascript.png"
import reactImg from "../../public/assets/skills/react.png"
import nextjsImg from "../../public/assets/skills/nextjs.png"
import bootstrapImg from "../../public/assets/skills/bootstrap.png"
import tailwindImg from "../../public/assets/skills/tailwind.png"
import githubImg from "../../public/assets/skills/github.png"
import Skill from "./Skill"
import React from "react"

const skillsList = [
	{ name: "HTML", image: htmlImg },
	{ name: "CSS", image: cssImg },
	{ name: "JavaScript", image: javascriptImg },
	{ name: "React", image: reactImg },
	{ name: "Next", image: nextjsImg },
	{ name: "Bootstrap", image: bootstrapImg },
	{ name: "Tailwind", image: tailwindImg },
	{ name: "Git", image: githubImg },
]

const Skills = () => {
	return (
		<div id="skills" className="w-full lg:h-screen p-2 w-max-[1240px]">
			<div className="max-w-[1240px] w-full p-4 py-16 h-full mx-auto flex flex-col justify-center">
				<p className="uppercase text-xl tracking-widest text-[#5651e5]">
					Skills
				</p>
				<h2 className="py-4">What I Can Do</h2>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 w-full">
					{skillsList.map((skill) => (
						<Skill name={skill.name} image={skill.image} key={skill.name} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Skills
