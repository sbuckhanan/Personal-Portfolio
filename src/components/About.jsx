export const About = () => {
	return (
		<div id='about' className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center'>
				<div>
					<p className='uppercase text-lg tracking-widest text-gray-400'>
						LET'S BUILD SOMETHING TOGETHER
					</p>
					<h1 className='py-4 text-3xl text-gray-400'>
						Hi, I'm <span className='text-4xl text-blue-600'> Stephon Buckhanan</span>
					</h1>
					<h1 className='py-2 text-2xl text-gray-400'>Full-Stack Software Engineer</h1>
					<p className='px-1 py-4 text-gray-400 text-xl sm:max-w-[70%] m-auto'>
						For the last two years I have been obsessed with learning everything that has to do with
						coding. There is nothing I love more than solving a complex real world problem with a
						unique coding solution. I have a passion for youth and diversity inside the tech world.
						In my free time I enjoy working on personal projects, everything sports including
						coaching, and video gaming.
					</p>
					<button className='mt-3 h-16 w-32 bg-slate-400 text-blue-900 rounded'>
						<a href='files/Resume.pdf' type='button' download='Resume'>
							Download CV
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};
