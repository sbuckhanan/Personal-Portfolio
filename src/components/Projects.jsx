export const Projects = () => {
	return (
		<div id='skills' className='mt-5 md:mt-10'>
			<h2 className='mb-10 text-4xl md:mb-15 md:text-2xl font-bold tracking-tight text-blue-900 text-center'>
				Projects
			</h2>
			<div className='flex justify-center items-center'>
				<div className='flex flex-wrap justify-center items-center gap-4 w-11/12'>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
							<img className='rounded-t-lg' src='/docs/images/blog/image-1.jpg' alt='' />
							<div className='p-5'>
								<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
									Noteworthy technology acquisitions 2021
								</h5>
								<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
									Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
									chronological order.
								</p>
								<div
									href='#'
									className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
									Read more
									<svg
										aria-hidden='true'
										className='ml-2 -mr-1 w-4 h-4'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
											clipRule='evenodd'></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
