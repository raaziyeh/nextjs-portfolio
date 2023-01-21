import Image from "next/image"
import dashboardImg from "../public/assets/projects/react-dashboard.png"
import Link from "next/link"

const dashboard = () => {
	return (
		<div className="w-full">
			<div className="relative w-screen h-[30vh] md:h-[40vh] tall:h-[40vh]">
				<div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
				<Image src={dashboardImg} className="absolute object-cover" fill />
				<div className="absolute top-[70%] max-w-[1240px] w-full p-5 left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
					<h2 className="py-2">React dashboard</h2>
					<h3>React JS / SASS</h3>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 py-8">
				<div className="grid md:grid-cols-5 gap-8">
					<div className="col-span-4">main</div>
					<div className="col-span-4 md:col-span-1">tech</div>
				</div>
				<Link href="/#projects" className="underline cursor-pointer">
					Back
				</Link>
			</div>
		</div>
	)
}

export default dashboard
