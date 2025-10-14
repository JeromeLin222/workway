export function AdvantageCard({
	image,
	title
}) {
	return(
	<div className='relative'>
		<img className='rounded-3xl' src={image} alt="adv image" />
		<span className='py-3 pl-3 pr-6 text-natural-50 font-bold text-title-2xl flex absolute bottom-0 bg-natural-95 rounded-tr-xl'>
			<img className='mr-2' src="/images/icon/ads.svg" />
			{title}
		</span>
	</div>
	)
}