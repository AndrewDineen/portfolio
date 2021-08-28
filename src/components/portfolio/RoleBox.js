import { useEffect, useRef } from "react";

const RoleBox = (props) => {
	const roleRef = useRef(null);
	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.4
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (props.idx == 1) {
						entry.target.style.animation = 'fade-in 0.5s 0.5s forwards';
					} else if (props.idx == 0) {
						entry.target.style.animation = 'fade-in 0.5s forwards';
					} else {
						entry.target.style.animation = 'fade-in 0.5s 1s forwards';
					}
				} else {
					entry.target.style.animation = 'fade-out 1s forwards';
				}
			});
		}, options);
		observer.observe(roleRef.current);
	}, []);
	return (<div className={"role-container-" + props.idx + " role-container role-box"} ref={roleRef}>
		{props.children}
	</div>);
}

export default RoleBox;