import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div>
			<nav className='h-20 bg-blue-600 px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
				<div className='container flex flex-wrap justify-between items-center mx-auto'>
					<div className='flex items-center'>
						<img src='images/blueVestLogo.png' className='mr-3 h-6 sm:h-9' />
						<span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
							BlueVest
						</span>
					</div>
					<div className='flex md:order-2'>
						<button
							type='button'
							className='hidden md:flex text-white bg-inherit hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-1'>
							I'm An Agent
						</button>
						<button
							type='button'
							className='hidden md:flex text-white bg-inherit hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-50'>
							Find A Pro
						</button>
						<div onClick={handleNav} className='block md:hidden'>
							{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
						</div>
					</div>
					<div
						className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
						id='navbar-sticky'>
						<ul className='flex flex-col p-4 mt-4 bg-inherit rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:text-base md:border-0'>
							<li className='cursor-pointer hover:text-white'>Home</li>
							<li className='cursor-pointer hover:text-white'>Resources</li>
							<li className='cursor-pointer hover:text-white'>About Us</li>
						</ul>
					</div>
				</div>
			</nav>
			<ul
				className={
					nav
						? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
						: 'top-0 h-full ease-in-out duration-500 fixed left-[-100%]'
				}>
				<h1 className='w-full text-2xl font-bold text-white m-4'>BlueVest</h1>
				<li className='p-4 border-b border-gray-600 text-white'>Home</li>
				<li className='p-4 border-b border-gray-600 text-white'>Resources</li>
				<li className='p-4 border-b border-gray-600 text-white'>About</li>
			</ul>
		</div>
	);
};
