import React from "react";
import { UserAuth } from "../context/AuthContext";

function DropdownMenu() {
	const { user, logOut } = UserAuth();
	const [isOpen, setIsOpen] = React.useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleSignOut = async () => {
		await logOut();
	};

	return (
		<div className='relative inline-block text-left'>
			<div>
				<button
					className='inline-flex justify-center items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
					onClick={handleToggle}
				>
					Settings
				</button>
			</div>
			{isOpen && (
				<div className='absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
					<div
						className='py-1'
						role='menu'
						aria-orientation='vertical'
						aria-labelledby='options-menu'
					>
						<a
							href='/'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white'
							role='menuitem'
						>
							Home
						</a>
						<a
							href='/profile'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white'
							role='menuitem'
						>
							Profile
						</a>

						<button
							onClick={handleSignOut}
							className='w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white'
							role='menuitem'
						>
							Sign out
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default DropdownMenu;
