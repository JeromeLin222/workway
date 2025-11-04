/**
 * Service step card component for displaying service workflow steps
 * 
 * @param {object} props - Component props
 * @param {string} props.image - Icon/image URL for the step
 * @param {string} props.title - Step title
 * @param {string} props.description - Step description
 * @param {number} props.index - Step number (0-based, display as index+1)
 */

export function ServeCard({
	image,
	title,
	description,
	index
}) {
	return (
		<div className="relative flex flex-col bg-white rounded-3xl shadow-sm items-center pt-16 pb-12 px-6">
			<img className='mb-4 md:mb-6' src={image} alt="serve step1" />
			<h3 className='mb-4 md:mb-6 text-title-xl md:text-title-2xl'>{title}</h3>
			<p className='text-center text-body-sm text-natural-50'>{description}</p>
			<span className='absolute top-0 left-0 py-[10.5px] px-4 rounded-tl-3xl rounded-br-3xl bg-natural-95 text-body-sm text-primary font-bold'>STEP
				<span className='ml-1'>{index + 1}</span>
			</span>
		</div>
	)
}