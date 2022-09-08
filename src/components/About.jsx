export const About = () => {
	return (
		<div id='home' className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center'>
				<div>
					<p className='uppercase text-lg tracking-widest text-gray-600'>
						LET'S BUILD SOMETHING TOGETHER
					</p>
					<h1 className='py-4 text-3xl text-gray-700'>
						Hi, I'm <span className='text-4xl text-[#5651e5]'> Stephon Buckhanan</span>
					</h1>
					<h1 className='py-2 text-2xl text-gray-700'>Full-Stack Web Developer</h1>
					<p className='py-4 text-gray-600 text-xl sm:max-w-[70%] m-auto'>
						For the last two years I have been obsessed with learning everything that has to do with
						coding. There is nothing I love more than solving a complex real world problem with a
						unique coding solution. In my free time I enjoy working on personal projects, everything
						sports including coaching, and video gaming
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
