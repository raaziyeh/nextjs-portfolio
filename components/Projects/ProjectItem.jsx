import Image from "next/image"
import Link from "next/link"
import React from "react"

const ProjectItem = ({ title, tech, backgroundImg, projectUrl }) => {
	return (
		<div className="w-full h-[200px] md:h-[250px] lg:h-[370px] rounded-xl shadow-xl shadow-gray-400 relative flex items-center justify-center group hover:bg-gradient-to-r from-branding to-[#709dff]">
			<Image
				src={backgroundImg}
				className="h-full rounded-xl group-hover:opacity-20"
			/>
			<div className="hidden group-hover:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
				<h3 className="text-2xl text-white tracking-wider text-center">
					{title}
				</h3>
				<p className="pb-4 pt-2 text-white text-center">{tech}</p>
				<Link href={projectUrl}>
					<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-base md:text-lg cursor-pointer">
						More Info
					</p>
				</Link>
			</div>
		</div>
	)
}

export default ProjectItem
