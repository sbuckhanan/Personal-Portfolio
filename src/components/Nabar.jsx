import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div>
			<nav className='h-20 px-2 w-full z-20 top-0 left-0'>
				<div className='justify-between flex flex-wrap ml-6'>
					<div className='flex'>
						<span className='text-blue-600 mt-6 text-3xl font-semibold whitespace-nowrap'>
							Portfolio
						</span>
					</div>
					<div className='flex md:order-2'>
						<div onClick={handleNav} className='block mt-8 md:hidden'>
							{nav ? (
								<AiOutlineClose color={'white'} size={20} />
							) : (
								<AiOutlineMenu color={'white'} size={20} />
							)}
						</div>
					</div>
					<div
						className='hidden w-3/4 justify-center items-center text-center md:flex md:order-1 mt-5'
						id='navbar-sticky'>
						<ul className='flex flex-col mt-2 bg-inherit rounded-lg border border-gray-100 md:flex-row md:space-x-4 md:text-xl md:border-0'>
							<li className='text-slate-400 cursor-pointer hover:text-blue-600'>
								<a href='#about'>About</a>
							</li>
							<li className='text-slate-400 cursor-pointer hover:text-blue-600'>Projects</li>
							<li className='text-slate-400 cursor-pointer hover:text-blue-600'>Contact</li>
							<li className='text-slate-400 cursor-pointer hover:text-blue-600'>
								<a href='#skills'>Skills</a>
							</li>
						</ul>
					</div>
					<div className='hidden md:flex md:order-2 mt-4'>
						<a
							href='https://github.com/stephdaking'
							type='button'
							className='rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1'>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='fab'
								data-icon='github'
								className='w-3 h-full mx-auto text-blue-600'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 496 512'>
								<path
									fill='currentColor'
									d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
							</svg>
						</a>
						<a
							href='https://www.linkedin.com/in/stephonbuckhanan/'
							type='button'
							className='rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1'>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='fab'
								data-icon='linkedin-in'
								className='w-3 h-full mx-auto text-blue-600'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'>
								<path
									fill='currentColor'
									d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
							</svg>
						</a>
						<a
							href='files/Resume.pdf'
							type='button'
							download='Resume'
							className='rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1'>
							<svg
								className='w-3 h-full mx-auto text-blue-600'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 384 512'>
								<path
									fill='currentColor'
									d='M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 224H96c22.1 0 40 17.9 40 40v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-4.4-3.6-8-8-8H80c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8H96c4.4 0 8-3.6 8-8v-8c0-8.8 7.2-16 16-16s16 7.2 16 16v8c0 22.1-17.9 40-40 40H80c-22.1 0-40-17.9-40-40V264c0-22.1 17.9-40 40-40zm72 46.4c0-25.6 20.8-46.4 46.4-46.4H216c8.8 0 16 7.2 16 16s-7.2 16-16 16H198.4c-7.9 0-14.4 6.4-14.4 14.4c0 5.2 2.8 9.9 7.2 12.5l25.4 14.5c14.4 8.3 23.4 23.6 23.4 40.3c0 25.6-20.8 46.4-46.4 46.4H168c-8.8 0-16-7.2-16-16s7.2-16 16-16h25.6c7.9 0 14.4-6.4 14.4-14.4c0-5.2-2.8-9.9-7.2-12.5l-25.4-14.5C160.9 302.4 152 287 152 270.4zM280 240v31.6c0 23 5.5 45.6 16 66c10.5-20.3 16-42.9 16-66V240c0-8.8 7.2-16 16-16s16 7.2 16 16v31.6c0 34.7-10.3 68.7-29.6 97.6l-5.1 7.7c-3 4.5-8 7.1-13.3 7.1s-10.3-2.7-13.3-7.1l-5.1-7.7c-19.3-28.9-29.6-62.9-29.6-97.6V240c0-8.8 7.2-16 16-16s16 7.2 16 16z'
								/>
							</svg>
						</a>
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
