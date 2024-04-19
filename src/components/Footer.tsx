import twitterIcon from '@/images/icons/twitter.svg';
import instagramIcon from '@/images/icons/instagram.svg';
import yotubeIcon from '@/images/icons/youtube.svg';
import tiktokIcon from '@/images/icons/tik-tok.svg';

export const Footer = () => {
	return (
		<footer className='w-full bg-indigo-500 p-3 xsm:flex xsm:flex-col xsm:items-center xsm:justify-center xsm:gap-2'>
			<div className='flex flex-col items-center w-full gap-3 p-3 lg:flex-row lg:justify-between lg:px-10 lg:py-0'>
				<p className='text-white font-bold xsm:text-xs md:text-base'>
					© Copyright 2024, All Rights Reserved TU1MILLON
				</p>
				<div className='flex gap-3'>
					<a href='https://twitter.com/tu1millon?lang=eu' target='_blank' rel="noreferrer">
						<img
							src={twitterIcon.src}
							alt='twitter icon'
							className='xsm:w-6 xsm:h-6 md:w-8 md:h-8 rounded p-1 hover:bg-indigo-300'
						/>
					</a>
					<a href='https://www.instagram.com/tu1millon/?hl=es' target='_blank' rel="noreferrer">
						<img
							src={instagramIcon.src}
							alt='twitter icon'
							className='xsm:w-6 xsm:h-6 md:w-8 md:h-8 rounded p-1 hover:bg-indigo-300'
						/>
					</a>
					<a
						href='https://www.youtube.com/channel/UCqPp4Wd4c7q-4AarvfI6ueA'
						target='_blank' rel="noreferrer"
					>
						<img
							src={yotubeIcon.src}
							alt='twitter icon'
							className='xsm:w-6 xsm:h-6 md:w-8 md:h-8 rounded p-1 hover:bg-indigo-300'
						/>
					</a>
					<a href='https://www.tiktok.com/@tu1millon' target='_blank' rel="noreferrer">
						<img
							src={tiktokIcon.src}
							alt='twitter icon'
							className='xsm:w-6 xsm:h-6 md:w-8 md:h-8 rounded p-1 hover:bg-indigo-300'
						/>
					</a>
				</div>
				<div className='flex gap-5'>
					<a href='https://www.tu1millon.com/terms-of-Use' target='_blank' rel="noreferrer">
						<p className='text-white font-bold xsm:text-xs md:text-base underline'>
							Terms & Conditions
						</p>
					</a>
					<a href='https://www.tu1millon.com/privacy-policy' target='_blank' rel="noreferrer">
						<p className='text-white font-bold xsm:text-xs md:text-base underline'>
							Privacy Policy
						</p>
					</a>
				</div>
			</div>
		</footer>
	);
};
