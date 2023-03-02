import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Dropdown from "./Dropdown";

function Navbar() {
	const { user, logOut } = UserAuth();

	return (
		<nav className='flex flex-wrap items-center justify-between bg-white p-6'>
			<div className='flex items-center flex-shrink-0 mr-6'>
				<span className='font-semibold text-xl tracking-tight'>My Website</span>
			</div>
			<div className='block lg:hidden'>
				<button className='flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-gray-900 hover:border-gray-900'>
					<svg
						className='fill-current h-3 w-3'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<title>Menu</title>
						<path
							d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'
							fillRule='evenodd'
						/>
					</svg>
				</button>
			</div>
			<div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
				<div className='text-sm lg:flex-grow'>
					{/* Add any navigation links here */}
				</div>
				<div>
					{!user && (
						<Link to='/login'>
							<button className='mr-4 inline-block text-sm px-4 py-2 leading-none border rounded text-gray-800 border-gray-800 hover:text-gray-900 hover:border-gray-900 mt-4 lg:mt-0'>
								Log in
							</button>
						</Link>
					)}
					{!user && (
						<Link to='/register'>
							<button className='inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-indigo-500 hover:bg-indigo-600 mt-4 lg:mt-0'>
								Register
							</button>
						</Link>
					)}
					{user && <Dropdown />}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
