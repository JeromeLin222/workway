import { useEffect } from "react";

/**  
 * 
 *  @param {object} props - Component props
 *  @param {"full-screen" | "center"} [props.type="full-screen"] - modal style variant
 *  @param {true | false} [props.isOpen] - modal open status
 * 
*/


export function ModalComponent({
	type = "full-screen",
	isOpen,
	children,
}) {
	const typeMap = {
			"full-screen": "inset-0",
			center: "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
	};

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [isOpen])
	return (
		<>
			<div
				className={`fixed ${typeMap[type]} ${type != "full-screen" && "rounded-xl"} bg-white ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-200 z-50 ease-in-out`}
			>
				{children}
			</div>
			<div
				className={`fixed inset-0 z-40 bg-black ${isOpen ? "opacity-40": "opacity-0 pointer-events-none"} transition-opacity duration-150 ease-in-out`}
			/>
		</>
	)
	



}