import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Sign Up <span className="text-blue-500">ChatApp</span>
				</h1>
				<form action="">
					<div className="">
						<label htmlFor="" className="label p-2">
							<span className="text-base label-text">FullName</span>
						</label>
						<input type="text" placeholder="Nguyen Quang Huy" className="w-full input input-bordered h-10" />
					</div>

					<div className="">
						<label htmlFor="" className="label p-2">
							<span className="text-base label-text">Username</span>
						</label>
						<input type="text" placeholder="HuyNQ" className="w-full input input-bordered h-10" />
					</div>

					<div className="">
						<label htmlFor="" className="label p-2">
							<span className="text-base label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full input input-bordered h-10"
						/>
					</div>

					<div className="">
						<label htmlFor="" className="label p-2">
							<span className="text-base label-text">Confrim Password</span>
						</label>
						<input
							type="password"
							placeholder="Confrim Password"
							className="w-full input input-bordered h-10"
						/>
					</div>

					{/* Gender checkbox goes here */}
					<GenderCheckbox />

					<a href="#" className="text-sm hover:underline text-blue-600 hover:text-blue-600 mt-4 inline-block">
						Already have an account?
					</a>

					<div>
						<button className="btn btn-block btn-sm mt-2 border-slate-700">Sing Up</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Signup
