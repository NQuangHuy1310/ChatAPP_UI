import { Link } from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'

const Signup = () => {
	const [inputs, setInputs] = useState({
		fullName: '',
		userName: '',
		password: '',
		confirmPassword: '',
		gender: ''
	})

	const { signup, loading } = useSignup()

	const handleCheckboxChenge = (gender) => {
		setInputs({ ...inputs, gender: gender })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await signup(inputs)
	}

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Sign Up <span className="text-blue-500">ChatApp</span>
				</h1>
				<form onSubmit={handleSubmit}>
					<div className="">
						<label htmlFor="" className="label p-2">
							<span className="text-base label-text">FullName</span>
						</label>
						<input
							type="text"
							placeholder="Nguyen Quang Huy"
							className="w-full input input-bordered h-10"
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div className="">
						<label htmlFor="" className="label p-2">
							<span className="text-base label-text">Username</span>
						</label>
						<input
							type="text"
							placeholder="HuyNQ"
							className="w-full input input-bordered h-10"
							value={inputs.userName}
							onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
						/>
					</div>

					<div className="">
						<label htmlFor="" className="label p-2">
							<span className="text-base label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full input input-bordered h-10"
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
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
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					{/* Gender checkbox goes here */}
					<GenderCheckbox onCheckboxChange={handleCheckboxChenge} selectedGender={inputs.gender} />

					<Link
						to="/login"
						className="text-sm hover:underline text-blue-600 hover:text-blue-600 mt-4 inline-block"
					>
						Already have an account?
					</Link>

					<div>
						<button className="btn btn-block btn-sm mt-2 border-slate-700" disabled={loading}>
							{loading ? <span className="loading loading-spinner"></span> : 'Sign Up'}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Signup
