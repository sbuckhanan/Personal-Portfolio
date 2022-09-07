import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div>
			<nav className='h-20 px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0'>
				<div className='justify-between flex flex-wrap ml-4'>
					<div className='flex'>
						<span className='text-blue-600 mt-4 text-3xl font-semibold whitespace-nowrap'>
							Portfolio
						</span>
					</div>
					<div className='flex md:order-2'>
						<div onClick={handleNav} className='block md:hidden'>
							{nav ? (
								<AiOutlineClose color={'white'} size={20} />
							) : (
								<AiOutlineMenu color={'white'} size={20} />
							)}
						</div>
					</div>
					<div className='hidden md:flex md:order-1 mt-5' id='navbar-sticky'>
						<ul className='flex flex-col mt-2 bg-inherit rounded-lg border border-gray-100 md:flex-row md:space-x-4 md:text-xl md:text-base md:border-0'>
							<li className='text-white cursor-pointer hover:text-blue-600'>About</li>
							<li className='text-white cursor-pointer hover:text-blue-600'>Projects</li>
							<li className='text-white cursor-pointer hover:text-blue-600'>Contact</li>
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
				<h1 className='w-full text-3xl font-bold text-blue-600 m-4'>Portfolio</h1>
				<li className='p-4 border-b border-gray-600 text-white'>About</li>
				<li className='p-4 border-b border-gray-600 text-white'>Projects</li>
				<li className='p-4 border-b border-gray-600 text-white'>Contact</li>
			</ul>
		</div>
	);
};
