import { NavLink } from "react-router";
import { useState } from "react";
import { ButtonComponent } from "../ui/Button";

export function HeaderComponent() {
	const [userInfo, setUserInfo] = useState(null);

	// mock login
	const handleLogin = () => {
		const mockUser = {
			username: "Alan",
			email: "alan@example.com",
			avatar: "/images/avatar_default.png"
		};
		setUserInfo(mockUser);
	};

	const handleLogout = () => {
		setUserInfo(null);
	};



	return(
		<header className="bg-white">
			<div className="max-w-7xl py-3 px-18 mx-auto flex justify-between items-center">
				<NavLink to={"/"}>
					<img className="hidden md:block" src="/images/logo.svg" alt="logo" />
					<img className="w-[92px] h-[35.61px] md:hidden" src="/images/logo.svg" alt="logo" />
				</NavLink>
				<div className="hidden md:block">
					<ul className="flex gap-3">
						<li>
							<NavLink 
								to={"/services"}
								className={({ isActive }) => 
									isActive
										? "py-2 px-6 bg-natural-90 rounded-2xl"
										: "py-2 px-6 hover:bg-natural-90 hover:rounded-2xl"
								}
							>
							服務方案</NavLink>
						</li>
						<li>
							<NavLink
								to={"/about"}
								className={({ isActive }) => 
									isActive
									? "py-2 px-6 bg-natural-90 rounded-2xl"
									: "py-2 px-6 hover:bg-natural-90 hover:rounded-2xl"
								}
							>
							關於我們</NavLink>
						</li>
						<li>
							<NavLink 
								to={"/contact"}
								className={({ isActive }) => 
									isActive
									? "py-2 px-6 bg-natural-90 rounded-2xl"
									: "py-2 px-6 hover:bg-natural-90 rounded-2xl"
								}
							>
							聯絡我們</NavLink>
						</li>
					</ul>
				</div>
				
				<div className="flex gap-3">
					{ userInfo ? (
						<button type="button" onClick={handleLogout} className="flex items-center justify-center">
							<img src={userInfo.avatar} alt="avatar" className="w-[44px] h-[44px] rounded-full mr-2"/>
							<p className="md:font-medium">
								{userInfo.username}
							</p>
						</button>
					):
						<button 
							type="button"
							onClick={handleLogin} 
							className="border border-natural-85 text-body-sm md:text-body-md py-2 px-4 md:px-6 rounded-2xl hover:bg-natural-90 hover:border-0"
						>
							登入/註冊
						</button>
					}

					<div>
						<button
							type="button"
							className="p-[10px] md:hidden"
						>
							<img src="/images/icon/menu.svg" alt="menu" />
						</button>
					</div>
			</div>
				</div>
		</header>
	)
}