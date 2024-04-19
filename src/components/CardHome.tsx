import { dataHome } from "@/types/home";

// colores: #5193E8 #CBE851 #E86051 #936964 #596069 #596069

export const HomeCard = () => {
	return (
		<>
			{dataHome().map(({ title, description, href, icon }) => (
				<div
					key={title}
					className='relative flex flex-col justify-between min-w-60 w-full rounded-xl p-5 border-white border xsm:flex xsm:flex-col xsm:pl-11 xsm:p-3 md:pl-14 md:w-1/4 xl:pl-16 xl:w-1/4'
				>
					<div className='absolute inset-0 bg-white/30 backdrop-blur-sm rounded-xl -z-10'></div>
					<div>
						<dt className='text-white border-b pb-1 font-bold xsm:text-base md:text-xl xl:text-3xl'>
							<div className='absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full p-1 bg-white xsm:w-6 xsm:h-6 xsm:top-3 md:w-8 md:h-8 xl:w-10 xl:h-10'>
								{icon}
							</div>
							{title}
						</dt>
						<dd
							className='mt-2 leading-7 text-white xsm:text-xs xsm:mt-1 md:text-sm xl:text-lg'
							dangerouslySetInnerHTML={{ __html: description }}
						/>
					</div>
					<a href={href} title={title}>
						<button className='text-white border-b px-3 py-1 mt-3 font-bold cursor-pointer hover:text-yellow-300 hover:border-yellow-300 xsm:text-xs md:text-sm xl:text-lg'>
							¡Quiero ganar!
						</button>
					</a>
				</div>
			))}
		</>
	);
};
