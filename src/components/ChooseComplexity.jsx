import React, { useState } from "react";

function ChooseComplexity() {
	return (
		<div className='ChooseComplexity'>
			<div className='flex justify-center h-screen items-start'>
				<div className='w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 flex justify-center items-center flex-col mt-20 border-2'>
					<h1 className='text-3xl'>Let's get started</h1>
					<p className='pt-3'>Select level of AI assistance</p>
					<div className='leftright-container flex justify-around w-11/12 items-center p-3 mt-5'>
						<div
							onClick={handleClick}
							className='left flex flex-col flex-wrap text-center w-1/2 mr-10 hover:bg-indigo-100 p-10 cursor-pointer rounded-md'
						>
							<h1 className='text-4xl font-display pb-3'>Full AI</h1>
							<ul>
								<li>
									Choose a topic and let AI completely do the work for you
								</li>
							</ul>
						</div>
						<div className='right text-center w-1/2 h-1/2 hover:bg-indigo-100 p-10 cursor-pointer rounded-md'>
							<h1 className='text-4xl font-display pb-3'>Partial AI</h1>
							<ul>
								<li>
									Choose a topic and AI will generate an outline for you to
									complete.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChooseComplexity;
