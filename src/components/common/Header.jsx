import { NavLink } from "react-router";
import { useState } from "react";

export function HeaderComponent() {
	return(
		<header className="bg-white">
			<div className="max-w-7xl py-3 px-18 mx-auto flex items-center">
				<NavLink to={"/"}>
					<img className="mr-16" src="/images/logo.svg" alt="logo" />
				</NavLink>
				<div className="mr-20">
					<ul className="flex gap-3">
						<li>
							<NavLink to={"/services"}>服務方案</NavLink>
						</li>
						<li>
							<NavLink to={"/about"}>關於我們</NavLink>
						</li>
						<li>
							<NavLink to={"/contact"}>聯絡我們</NavLink>
						</li>
					</ul>
				</div>
				<button type="button" className="border border-natural-85 py-2 px-6 rounded-2xl">
					登入/註冊
				</button>
			</div>
		</header>
	)
}