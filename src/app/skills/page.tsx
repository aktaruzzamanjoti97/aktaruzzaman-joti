'use client';

import Head from 'next/head';
import Image from 'next/image';
import { Scrollbars } from 'react-custom-scrollbars-2';

const Skills = () => {
	return (
		<Scrollbars
			autoHide
			autoHideTimeout={1000}
			autoHideDuration={200}
			universal={true}>
			<Head>
				<title>Skills</title>
				<meta name='description' content={`Skills`} />
				<link rel='icon' href='/favicon.ico' />
				<meta property='og:title' content={'Skills'} />
				<meta name='description' content={`Skills`} />
				<link rel='canonical' href={'https://www.rajsavaliya.com'} />
				<meta property='og:locale' content='en_US' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content={'https://www.rajsavaliya.com'} />
				<meta property='og:site_name' content='M. Aktaruzzaman Joti' />
				<meta property='og:image' content='/mainthumbnail.PNG' />
				<meta property='og:image:width' content='1040' />
				<meta property='og:image:height' content='600' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='HandheldFriendly' content='True' />
				<meta name='MobileOptimized' content='320' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<meta name='twitter:widgets:csp' content='on' />
			</Head>
			<div className=' mt-2 w-full p-5 pb-40 ml-3 text-left'>
				<h2 className='lg:text-5xl  font-bold leading-tight text-indigo-500 text-3xl '>
					Skills
				</h2>
				<p className='mt-4 max-w-2xl text-lg font-medium text-gray-300'>
					Data Structures and Algorithms, Frontend Development, Backend
					Development, Database Management, System Design and Cloud.
				</p>

				<div className='w-full  mb-5 pb-5 '>
					<div className='mt-5'>
						<p className='mt-2  tracking-tight text-gray-400 text-xl'>
							Programming
						</p>
						<dl className='space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10'>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/color/144/000000/javascript--v1.png'
											alt=''
											width={20}
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										JavaScript
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/color/96/000000/typescript.png'
											alt=''
											width={20}
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										TypeScript
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/color/48/null/python--v1.png'
											alt=''
											width={20}
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										Python
									</p>
								</dt>
							</div>
						</dl>
					</div>

					<div className='mt-5 pt-5'>
						<p className='mt-2  tracking-tight text-gray-400 text-xl'>
							Full-Stack Development
						</p>
						<dl className='space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10'>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											width={90}
											src='https://img.icons8.com/color/144/000000/react-native.png'
											alt=''
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										React
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/fluency/144/000000/node-js.png'
											alt=''
											width={20}
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										Node.js
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											width={90}
											src='https://i.ibb.co/Kj1TqRv/image.png'
											alt=''
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										Next.js
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default'
											alt=''
											width={20}
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										Tailwind
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/color/144/000000/bootstrap.png'
											alt=''
											width={20}
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										Bootstrap
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/color/144/000000/sass.png'
											alt=''
											width={20}
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										SASS
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/ios-filled/150/000000/jquery.png'
											alt=''
											width={90}
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										JQuery
									</p>
								</dt>
							</div>
						</dl>
					</div>

					<div className='mt-5 pt-5'>
						<p className='mt-2  tracking-tight text-gray-400 text-xl'>
							Database
						</p>
						<dl className='space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10'>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/ios-filled/100/000000/sql.png'
											alt=''
											width={20}
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										SQL
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/color/48/null/redis.png'
											alt=''
											width={20}
											height={20}
										/>{' '}
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										Redis
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/color/48/null/postgreesql.png'
											alt=''
											width={20}
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										PostgresSQL
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cassandra_logo.svg/1200px-Cassandra_logo.svg.png'
											alt=''
											width={20}
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										Cassandra
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/color/48/000000/mongodb.png'
											alt=''
											width={20}
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										MongoDB
									</p>
								</dt>
							</div>
						</dl>
					</div>

					<div className='mt-5 pt-5'>
						<p className='  tracking-tight text-gray-400 text-xl'>
							DevOps
						</p>
						<dl className='space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10'>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/color/144/000000/amazon-web-services.png'
											width={70}
											alt=''
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										AWS
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://i.ibb.co/CnLsjhp/download.png'
											width={70}
											alt=''
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										Cloudflare
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/color/144/000000/git.png'
											alt=''
											width={20}
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										Git
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/fluency/144/000000/github.png'
											width={80}
											alt=''
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										GitHub
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/color/144/000000/bitbucket.png'
											width={80}
											alt=''
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										Bitbucket
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/color/144/000000/azure-1.png'
											width={80}
											alt=''
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										Azure App Service
									</p>
								</dt>
							</div>
						</dl>
					</div>

					<div className='mt-5 pt-5'>
						<p className='  tracking-tight text-gray-400 text-xl'>
							Tools
						</p>
						<dl className='space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10'>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/fluency/144/000000/visual-studio-code-2019.png'
											width={80}
											height={20}
											alt=''
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										Visual Studio Code
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILwHh21Dky51ePyPy2V_qsPeQWd5n136Sa8PQuhIMmOGLpprK6Zt7qWn9cRL21LE3RzM&usqp=CAU'
											width={80}
											alt=''
											height={20}
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										Postman
									</p>
								</dt>
							</div>
							<div className='relative'>
								<dt>
									<div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white'>
										<Image
											src='https://img.icons8.com/color/144/000000/jira.png'
											width={80}
											height={20}
											alt=''
										/>
									</div>
									<p className='ml-16 text-lg leading-6 font-medium pt-3 text-gray-100'>
										JIRA
									</p>
								</dt>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</Scrollbars>
	);
};

export default Skills;
