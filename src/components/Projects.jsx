export const Projects = () => {
	return (
		<div id='skills' className='mt-5 md:mt-10'>
			<h2 className='mb-10 text-4xl md:mb-15 md:text-2xl font-bold tracking-tight text-blue-900 text-center'>
				Projects
			</h2>
			<div className='flex justify-center items-center'>
				<div className='flex flex-wrap justify-center items-center gap-4 w-11/12'>
					{/* Beginning of project one */}
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
							<img className='rounded-t-lg' src='images/tarkovConnect.png' alt='' />
							<div className='p-5'>
								<h5 className='mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white'>
									Tarkov Connect
								</h5>
								<p className='mb-3 text-center font-normal text-gray-700 dark:text-gray-400'>
									Live chat application to find people to play the game "Escape From Tarkov" with.
									Features include live chat, private messaging, friend system, notifications, and
									player feedback system.
								</p>
								<ul className='mb-2 mr-2 flex flex-row flex-wrap justify-center'>
									<li className='mr-2 mb-2 border rounded p-1 bg-sky-700'>React</li>
									<li className='mr-2 mb-2 border rounded p-1 bg-sky-700'>Redux</li>
									<li className='mr-2 mb-2 border rounded p-1 bg-sky-700'>Redux-Saga</li>
									<li className='mr-2 mb-2 border rounded p-1 bg-sky-700'>Socket.io</li>
									<li className='mr-2 mb-2 border rounded p-1 bg-sky-700'>Material-UI</li>
									<li className='mr-2 mb-2 border rounded p-1 bg-sky-700'>Node</li>
									<li className='mr-2 mb-2 border rounded p-1 bg-sky-700'>Express</li>
									<li className='mr-2 mb-2 border rounded p-1 bg-sky-700'>Postgres</li>
								</ul>
								<div className='flex justify-center items-center'>
									<button className='inline-flex mr-2 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
										<a href='https://tarkov-connect.herokuapp.com/#/login'>Deployed App</a>
									</button>
									<button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
										<a href='https://github.com/stephdaking/solo-project'>GitHub Repo</a>
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* End of project one */}
				</div>
			</div>
		</div>
	);
};
