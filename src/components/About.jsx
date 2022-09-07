export const About = () => {
	return (
		<div className='pt-0 pb-0 mb:pb-10 md:pt-28'>
			<div className='mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
				<div className='sm:max-w-lg'>
					<h1 className='font text-2xl font-bold tracking-tight text-blue-900 sm:text-6xl'>
						About Me
					</h1>
					<p className='mt-4 text-xl text-gray-500'>
						Hello my name is Stephon Buckhanan. I am a Software Engineer. For the last two years I
						have been obsessed with learning everything that has to do with coding. There is nothing
						I love more than solving a complex real world problem with a unique coding solution.
					</p>
				</div>
				<button className='mt-5 h-16 w-32 bg-white text-blue-900 rounded'>
					<a href='files/Resume.pdf' type='button' download='Resume'>
						Download CV
					</a>
				</button>
			</div>
		</div>
	);
};
