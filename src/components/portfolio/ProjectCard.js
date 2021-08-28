import { IconContext } from 'react-icons/lib';
import './ProjectCard.css';
import {useEffect, useRef} from 'react';

const ProjectCard = (props) => {
	const projectRef = useRef(null);
	const colOneProjectRef = useRef(null);
	const colTwoProjectOneRef = useRef(null);
	const colTwoProjectTwoRef = useRef(null);
	// useEffect(() => {
	// 	const options = {
	// 		root: null,
	// 		rootMargin: "0px",
	// 		threshold: 0.3
	// 	}
	// 	const observer = new IntersectionObserver((entries) => {
			
	// 	}, options)
	// 	observer.observe(introRef.current);
	// }, []);
	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.3
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry)=>{
				if(entry.isIntersecting){
					entry.target.style.animation = 'col-one 1s forwards'
				}else{
					entry.target.style.animation ='fade-out 1s forwards';
				}
			});
		}, options);
		observer.observe(projectRef.current);
	}, []);
	return(
	<IconContext.Provider
		value={{size: '75px'}}
	>
	<div className="project-card" ref={projectRef}>
		<div className="project-cover">
			<p style={{marginBottom: '1rem'}}>{props.info.info}</p>
			<p style={{marginBottom: '0.5rem'}}>Accomplishment highlights:</p>
			<ul style={{marginTop: 0}}>
			{props.info.highlights.map((elem) => {
				return(<li>
					{elem}
				</li>);
			})}
			</ul>
		</div>
		<p className="project-sub">{props.info.subTitle}</p>
		<p className="project-title">{props.info.title}</p>
		<img src={props.info.source} className="project-img"></img>
		
	</div>
	</IconContext.Provider>
	);
}

export default ProjectCard;