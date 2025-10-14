/**
 * Story card component for displaying user success stories
 * 
 * @param {object} props - Component props
 * @param {string} props.image - Image URL for the story cover
 * @param {string} props.title - Story title
 * @param {string} props.content - Story content/description
 * @param {string} props.role - User's professional role
 * @param {string} props.name - User's name
 * @param {number} props.age - User's age
 * @param {string|null} [props.tag=null] - Optional tag to display (e.g., "數位遊牧 2 年")
 * 
*/
export function StoryCard({ 
	image, 
	title, 
	content, 
	role, 
	name, 
	age, 
	tag = null 
}) {
	return (
		<div className='rounded-3xl shadow-sm relative'>
			<img className='rounded-t-3xl' src={image} alt="story image" />
			<div className='bg-white rounded-3xl p-4 pb-6'>
				<h3 className='text-title-xl md:text-title-2xl mb-4'>{title}</h3>
				<p className='text-natural-50 text-body-sm mb-4'>{content}</p>
				<div className='flex'>
						<p className='text-body-sm md:text-body-md font-bold pr-2 border-r border-natural-85'>{role}</p><span className='ml-2'>{name} ({age}y)</span>
			</div>
			</div>
			{tag && (
				<span className="px-4 py-2 inline absolute top-[12px] left-[12px] bg-primary rounded-xl text-white">
					{tag}
				</span>
			)}		
		</div>
	)
} 