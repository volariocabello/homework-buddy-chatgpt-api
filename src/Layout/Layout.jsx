import React from "react";

function Layout() {
	return (
		<div className='flex flex-col h-screen'>
			<nav className='flex items-center justify-between bg-gray-800 px-4 py-3 md:py-4'>
				<div className='text-white font-bold text-sm md:text-lg'>
					My Website
				</div>
				<div>
					<button className='bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2 text-sm md:text-lg'>
						Log In
					</button>
					<button className='bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-sm md:text-lg'>
						Register
					</button>
				</div>
			</nav>
			<div className='flex-grow'>Main Content</div>
			<footer className='bg-gray-800 text-white px-4 py-3 md:py-4 text-sm md:text-lg'>
				Footer Content
			</footer>
		</div>
	);
}

export default Layout;
