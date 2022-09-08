import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiReduxsaga, SiMysql } from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';

export const Skills = () => {
	return (
		<div id='skills' className='mt-5 md:mt-10'>
			<h2 className='mb-10 md:mb-15 font text-2xl font-bold tracking-tight text-blue-900 sm:text-6xl text-center'>
				Skills
			</h2>
			<div className='flex justify-center items-center'>
				<div className='flex flex-wrap justify-center items-center gap-4 w-11/12'>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<AiFillHtml5 className='h-8 w-8 md:h-16 md:w-16' color={'orange'} />
						<h5 className='text-white text-center'>HTML 5</h5>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<FaCss3Alt className='h-8 w-8 md:h-16 md:w-16' color={'blue'} />
						<h5 className='text-white text-center'>CSS 3</h5>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<SiJavascript className='h-8 w-8 md:h-16 md:w-16' color={'yellow'} />
						<h5 className='text-white text-center'>JavaScript</h5>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<SiMysql className='h-8 w-8 md:h-16 md:w-16' color={'blue'} />
						<h5 className='text-white text-center'>MySQL</h5>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<FaReact className='h-8 w-8 md:h-16 md:w-16' color={'teal'} />
						<h5 className='text-white'>React</h5>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<SiRedux className='h-8 w-8 md:h-16 md:w-16' color={'purple'} />
						<h5 className='text-white'>Redux</h5>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<SiReduxsaga className='h-8 w-8 md:h-16 md:w-16' color={'grey'} />
						<h5 className='text-white'>Redux-Saga</h5>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<DiPostgresql className='h-8 w-8 md:h-16 md:w-16' color={'blue'} />
						<h5 className='text-white'>Postgres</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
