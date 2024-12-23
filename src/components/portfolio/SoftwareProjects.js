
import Introduction from '../heading/Introduction';
import ProjectCard from './ProjectCard';
import ProjectData from './ProjectData';
const Projects = () => {
	
	const Intro = {
		subTitle: "/ My Projects",
		title: "Software Projects",
		paragraph: "Here are just a few of the projects that I've completed in addition to this website which was built with React. If you're interested in seeing my other projects, feel free to reach out!",
		link: "Explore More"
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