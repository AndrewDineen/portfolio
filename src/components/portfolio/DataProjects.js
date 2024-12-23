import Introduction from '../heading/Introduction';
import ProjectCard from './ProjectCard';
import ProjectData from './ProjectData';
const Projects = () => {
	
	const Intro = {
		subTitle: "/ My Projects",
		title: "Data Projects",
		paragraph: "Here are just a few of the data projects that I've completed. If you're interested in seeing my other projects, feel free to check me out on Kaggle or Tableau (linked above)."
	}
	
	

	return (<div id="projects">
		<div className="projects-first-column">
			<Introduction intro={Intro} cName="project-intro"></Introduction>
			<ProjectCard info={ProjectData.fridgeButler}></ProjectCard>
		</div>
		<div className="projects-second-column">
			<ProjectCard info={ProjectData.xuri}></ProjectCard>
			<ProjectCard info={ProjectData.turing}></ProjectCard>
		</div>

	</div>);
}

export default Projects;