import { ButtonComponent } from "./Button"

export function PlanCard({
	label,
	title,
	description,
	features,
	targetAudience,
	price,
	image,
	badge,
	highlighted = false
}) {
	return (
		<div className={`rounded-2xl p-12 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.12)] flex relative ${highlighted ? 'border-2 border-secondary' : 'border-0'}`}>
			<div className="mr-6 w-full max-w-[876px]">
				<div className="text-primary mb-2">{label}</div>
				<h3 className="text-title-2xl mb-2">{title}</h3>
				<p className="mb-2">{description}</p>
				<ul className="flex flex-col gap-1 mb-6">
					{features.map((feature, index) => (
						<li key={index} className="flex">
							<span class="material-symbols-outlined text-primary mr-2">stat_0</span>
							{feature}
						</li>
					))}
				</ul>
				<div className="p-6 bg-natural-95 rounded-2xl mb-6">
					<p className="mb-2">適合對象：<span className="font-bold">{targetAudience}</span></p>
					<p>優惠價格：<span className="text-title-2xl text-primary">{price}</span></p>
				</div>
				<ButtonComponent>
					<div className="flex">
						<p>我有興趣</p>
						<span className="material-symbols-outlined">chevron_right</span>
					</div>
				</ButtonComponent>
			</div>
			<div className="shrink max-w-[300px] max-h-[337px]">
				<img className="w-full h-full" src={image} alt="" />
			</div>
			{badge && (
				<div className="absolute py-2 px-4 bg-secondary rounded-tl-2xl rounded-bt-2xl top-[-1px] left-[-1px] text-bold text-body-sm">
					{badge}
				</div>
			)}
		</div>
	)
}
