import FridgeButler from '../../Images/AppPhotos/fridge_combined.png';
import Turing from '../../Images/AppPhotos/turing-combined.png';
import XuriBot from '../../Images/AppPhotos/xuri-combined-2.png';
import Introduction from '../heading/Introduction';
import ProjectCard from './ProjectCard';
const Projects = () => {
	const Intro = {
		subTitle: "/ My Projects",
		title: "Portfolio",
		paragraph: "Here are just a few of the projects that I've completed in addition to this website which was built with React. If you're interested in seeing my other projects, feel free to reach out!",
		link: "Explore More"
	}
	return (<div id="projects">
		<div className="projects-first-column">
			<Introduction intro={Intro} cName="project-intro"></Introduction>
			<ProjectCard info={{ subTitle: "Android App.", title: "Fridge Butler", source: FridgeButler }}></ProjectCard>
		</div>
		<div className="projects-second-column">
			<ProjectCard info={{ subTitle: "Web Application.", title: "Xuri Bot", source: XuriBot }}></ProjectCard>
			<ProjectCard info={{ subTitle: "Web Application.", title: "Turing Search Engine", source: Turing }}></ProjectCard>
		</div>

	</div>);
}

export default Projects;