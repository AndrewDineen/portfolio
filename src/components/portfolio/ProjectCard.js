import { IconContext } from 'react-icons/lib';
import './ProjectCard.css';
const ProjectCard = (props) => {
	return(
	<IconContext.Provider
		value={{size: '75px'}}
	>
	<div className="project-card">
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