import React, { useState } from "react";

function SignUpForm() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Full Name:", fullName);
		console.log("Email:", email);
		console.log("Password:", password);
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-white'>
			<h1 className='text-3xl font-bold mb-4 text-center text-219ebc'>
				Sign Up
			</h1>
			<form onSubmit={handleSubmit} className='w-full max-w-md'>
				<div className='mb-4'>
					<label
						htmlFor='full-name'
						className='block text-gray-700 font-bold mb-2'
					>
						Full Name
					</label>
					<input
						type='text'
						id='full-name'
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						required
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
						Email
					</label>
					<input
						type='email'
						id='email'
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className='mb-6'>
					<label
						htmlFor='password'
						className='block text-gray-700 font-bold mb-2'
					>
						Password
					</label>
					<input
						type='password'
						id='password'
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button
					type='submit'
					className='bg-219ebc hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
				>
					Sign Up
				</button>
			</form>
		</div>
	);
}

export default SignUpForm;
