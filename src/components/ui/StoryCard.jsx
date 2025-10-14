export function StoryCard({ image, title, content, role, name, age }) {
    return (
        <div className='rounded-3xl shadow-sm'>
            <img className='rounded-t-3xl' src={image} alt="" />
            <div className='bg-white rounded-3xl p-4 pb-6'>
            <h3 className='text-title-2xl mb-4'>{title}</h3>
            <p className='text-natural-50 mb-4'>{content}</p>
            <div className='flex'>
                <p className='font-bold pr-2 border-r border-natural-85'>{role}</p><span className='ml-2'>{name} ({age}y)</span>
            </div>
            </div>
        </div>
    )
}