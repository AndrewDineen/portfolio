import { useEffect, useRef, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { GiWhiteBook } from "react-icons/gi";


const RoleBox = (props) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const roleRef = useRef(null);
	const backRoleRef = useRef(null);
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
		observer.observe(backRoleRef.current);
	}, []);
	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
			<div className={"role-container-" + props.idx + " role-container role-box"} onClick={() => {
				setIsFlipped((prevState) => !prevState);
			}} ref={roleRef}>
				{!isFlipped ? props.children : ''}
			</div>
			<div className={"role-container-" + props.idx + " role-container role-box"} style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}  onClick={() => {
				setIsFlipped((prevState) => !prevState);
			}} ref={backRoleRef}>
				{isFlipped ? <div style={{position: 'absolute', left: '0', top: '0', width: '100%', height: '100%'}}>
					 <h3 style={{paddingTop: '20px'}}>Languages & Frameworks</h3> 
					 <ul style={{listStyle: 'none', paddingLeft:'0', paddingTop: '30px'}}>{props.rolesInfo[props.idx].skills}</ul> 
					 </div>: ''
				}
			</div>

		</ReactCardFlip>
	);
}

export default RoleBox;