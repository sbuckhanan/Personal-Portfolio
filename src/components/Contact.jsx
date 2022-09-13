export const Contact = () => {
	return (
		<div id='contact' className='bg-inherit w-full mb-10 mt-10'>
			<center>
				<div className='max-w-[1240px] items-center justify-center m-auto px-2 py-16 w-full '>
					<p className='text-4xl font-bold text-center uppercase text-blue-900 mb-5'>Contact Me</p>
					<div className='w-full lg:w-2/4 h-auto bg-inherit rounded-xl lg:p-4'>
						<div className='p-4'>
							<form
								action='https://getform.io/f/f143ae53-5b8d-4b3f-8104-9db433cf318f'
								method='POST'
								encType='multipart/form-data'>
								<div className='grid lg:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Name</label>
										<input
											className='text-black border-2 bg-neutral-300 rounded-lg p-3 flex border-gray-300'
											type='text'
											name='name'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Phone Number</label>
										<input
											className='text-black border-2 bg-neutral-300 rounded-lg p-3 flex border-gray-300'
											type='text'
											name='phone'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Email</label>
									<input
										className='text-black border-2 bg-neutral-300 rounded-lg p-3 flex border-gray-300'
										type='email'
										name='email'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Subject</label>
									<input
										className='text-black border-2 bg-neutral-300 rounded-lg p-3 flex border-gray-300'
										type='text'
										name='subject'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Message</label>
									<textarea
										className='text-black border-2 bg-neutral-300 rounded-lg p-3 border-gray-300'
										rows='10'
										name='message'></textarea>
								</div>
								<button className='w-full border hover:bg-blue-600 p-4 text-gray-100 mt-4'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</center>
		</div>
	);
};
