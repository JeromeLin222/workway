/**
 * 
 * @param {Object} props - component props object
 * @param {string} props.title - Banner title
 * @param {string|React.ReactNode} props.description - Page description
 * @param {string} [props.maxWidth="800px"] - content max width
 * @returns {React.ReactElement} PageBanner component
 */


export function PageBanner({
	title,
	description,
	maxWidth = "800px"
}) {
	return (
		<div className="py-12 md:py-20 bg-[url(/images/service/banner-bg-pc.png)] bg-cover bg-center">
			<div className="container flex flex-col items-center relative">
				<h1 className="text-title-4xl md:text-title-5xl mb-6 md:mb-12">{title}</h1>
				<div className={`w-full max-w-[${maxWidth}] text-body-md text-center md:text-body-lg text-natural-50`}>{description}</div>
				<img className="hidden lg:block absolute bottom-[-88px] right-[128px]" src="/images/service/banner-person.svg" alt="banner person" />
			</div>
		</div>
	)
}




