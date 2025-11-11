import { ButtonComponent } from "./Button";

export function ConsultPlanCard({
	title,
	description,
	image,
	price,
	badge,
	highlighted = false
}) {
	return (
		<div className={`relative py-6 flex flex-col items-center bg-white rounded-2xl shadow-card ${highlighted ? 'border-2 border-secondary' : 'border-0'}`
		}>
			<img className="mb-4 lg:mb-6" src={image} alt="consult plan image" />
			<div className="text-center mb-4 lg:mb-6">
				<h3 className="text-title-xl lg:text-title-2xl mb-2">{title}</h3>
				<p className="text-body-sm text-natural-50 mb-2">{description}</p>
				<p className="text-title-xl lg:text-title-2xl text-primary">NT$ {price}</p>
			</div>
			<ButtonComponent>
				<div className="flex">
					<p>我有興趣</p>
					<p className="material-symbols-outlined">chevron_right</p>
				</div>
			</ButtonComponent>
			{badge && (
				<div className="absolute py-2 px-4 bg-secondary rounded-tl-2xl rounded-br-2xl top-[-1px] left-[-1px] text-bold text-body-sm">
					{badge}
				</div>
			)}
		</div>
	)
}