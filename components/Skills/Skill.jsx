import Image from "next/image"
import React from "react"

const Skill = (props) => {
	return (
		<div className="flex items-center justify-between m-2 md:m-5 p-4 py-6 md:p-6 rounded-xl shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-300 m-5">
			<h3 className="text-sm md:text-base">{props.name}</h3>
			<Image
				src={props.image}
				alt="html"
				width="60px"
				height="60px"
				className="w-6 h-6 md:w-10 md:h-10"
			/>
		</div>
	)
}

export default Skill
