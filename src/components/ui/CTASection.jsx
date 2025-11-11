import { ButtonComponent } from "./Button";

export function CTASection ({
	title = "邁向你真正想過的生活，從這裡開始",
  description = "第一次諮詢只要 30 分鐘，可能改變你未來 30 年的生活方式",
  buttonText = "預約免費職涯探索",
  phone = "0800-123-123",
  email = "Sample@mail.com",
}) {
	return (
		<div className="py-10 container">
			<div className="rounded-2xl bg-primary py-6 px-12">
				<img className="mb-6" src="/images/logo-icon-w.svg"/>
				<div className="border-b border-dashed border-white pb-6 mb-6">
					<h2 className="text-white text-title-3xl md:text-title-4xl mb-3">{title}</h2>
					<p className="text-white text-body-md md:text-body-lg">{description}</p>
				</div>
				<div className="flex flex-col md:flex-row md:justify-between md:items-center">
					<div className="text-white flex flex-col md:flex-row mb-6 md:mb-0">
						<div className="mb-4 md:mb-0 md:mr-6 flex items-end">
							<span className="material-symbols-outlined mr-1">call</span>
							<p className="text-body-lg md:text-xl">{phone}</p>
						</div>
						<div className="flex items-end">
							<span className="material-symbols-outlined mr-1">mail</span>
							<p className="text-body-lg md:text-xl">{email}</p>
						</div>
					</div>
					<div className="self-start">
						<ButtonComponent>
							<div className="flex">
								<p>
									{buttonText}
								</p>
								<span className="material-symbols-outlined">chevron_right</span>
							</div>
							
						</ButtonComponent>
					</div>
				</div>
			</div>
		</div>
	)
}