import { IoSearch } from 'react-icons/io5'
const SearchInput = () => {
	return (
		<from className="flex items-center gap-2">
			<input type="text" placeholder="Search here..." className="input input-bordered rounded-full" />
			<button type="submit" className="btn btn-circle bg-sky-500 text-white">
				<IoSearch className="size-6 outline-none" />
			</button>
		</from>
	)
}

export default SearchInput
