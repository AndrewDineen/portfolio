import './ProjectCard.css';
const ProjectCard = (props) => {
	return(<div className="project-card">
		<p className="project-sub">{props.info.subTitle}</p>
		<p className="project-title">{props.info.title}</p>
		<img src={props.info.source} className="project-img"></img>
		
	</div>);
}

export default ProjectCard;