import { NavLink } from "react-router";
export function FooterComponent() {
	return(
		<>
		<div className="bg-natural-90">
			<div className="max-w-7xl mx-auto py-12 md:px-18 flex justify-between">
				<ul className="flex">
					<li>
						<NavLink to={"/services"} >
							<span className="py-2 px-6">服務方案</span>
						</NavLink>
					</li>
					<li>
						<NavLink to={"/about"} >
							<span className="py-2 px-6">關於職旅</span>
						</NavLink>
					</li>
					<li>
						<NavLink to={"/contact"} >
							<span className="py-2 px-6">聯絡我們</span>
						</NavLink>
					</li>
					<li>
						<NavLink to={"/privacy-policy"} >
							<span className="py-2 px-6">隱私權政策</span>
						</NavLink>
					</li>
					<li>
						<NavLink to={"/terms-of-service"} >
							<span className="py-2 px-6">用戶條款</span>
						</NavLink>
					</li>
				</ul>
				<div>
					<p className="text-natural-50 text-body-sm">Copyright © 2025 職旅 workway. All rights reserved.</p>
				</div>
			</div>
		</div>
		</>
	)
}