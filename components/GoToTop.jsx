import Link from "next/link"
import { useRouter } from "next/router"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"

const GoToTop = () => {
	const { route } = useRouter()

	return (
		<div className="flex justify-center mt-12 mb-12">
			<Link
				href={route}
				className="rounded-full shadow-lg shadow-gray-400 p-3 text-[#5651e5] cursor-pointer hover:scale-105 ease-in duration-300"
			>
				<HiOutlineChevronDoubleUp size={24} />
			</Link>
		</div>
	)
}

export default GoToTop
