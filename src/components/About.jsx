/* This example requires Tailwind CSS v2.0+ */
export const About = () => {
	return (
		<div className='overflow-hidden'>
			<div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
				<div className='mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
					<div className='sm:max-w-lg'>
						<h1 className='font text-2xl font-bold tracking-tight text-blue-900 sm:text-6xl'>
							About Me
						</h1>
						<p className='mt-4 text-xl text-gray-500'>
							Hello my name is Stephon Buckhanan. I am a Software Engineer. For the last two years I
							have been obsessed with learning everything that has to do with coding. There is
							nothing I love more than solving a complex real world problem with a unique coding
							solution.
						</p>
					</div>
					<div>
						<div className='mt-10'>
							<div
								aria-hidden='true'
								className='pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl'>
								<div className='md:absolute md:transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
									<div className='items-center space-x-6 lg:space-x-8'>
										<img
											src='images/portrait.png'
											alt=''
											className='mt-5 object-none object-center'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
