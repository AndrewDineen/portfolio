import { useEffect, useRef } from 'react';
import './Introduction.css';
const Introduction = (props) => {
	const introRef = useRef(null);
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.3

	}
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting && props.cName == 'project-intro') {
					entry.target.style.animation = 'fade-in 1s forwards';
				} else if(props.cName == 'project-intro'){
					entry.target.style.animation = 'fade-out 1s forwards';
				}
			});

		}, options);
		observer.observe(introRef.current);
	}, [])

	return (<div className={props.cName + " introduction-container"} ref={introRef}>
		<p className="sub-title" id="intro">{props.intro.subTitle}</p>
		<p className="title">{props.intro.title}</p>
		<p className="information-paragraph">{props.intro.paragraph}</p>

	</div>);
}
export default Introduction;