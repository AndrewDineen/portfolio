import Introduction from '../heading/Introduction';
import ProjectCard from './ProjectCard';
import Zurichan from '../../Images/AppPhotos/zurichan.png';
import Rambble from '../../Images/AppPhotos/rambble.png';
import Shrimpin from '../../Images/AppPhotos/shrimpin.png';
const Projects = () => {
	const Intro = {
		subTitle: "/ My Projects",
		title: "Portfolio",
		paragraph: "Here are just a few of the projects that I've completed in addition to this website which was built with React. If you're interested in seeing my other projects, feel free to reach out!",
		link: "Explore More"
	}
	return(<div id="projects">
		<Introduction intro={Intro}></Introduction>
		<ProjectCard info={{subTitle: "Android App.", title:"Fridge Butler", source: Zurichan}}></ProjectCard>
		<ProjectCard info={{subTitle: "Web Application.", title:"Xuri Bot", source: Rambble}}></ProjectCard>
		<ProjectCard info={{subTitle: "Web Application.", title:"Turing Search Engine", source: Shrimpin}}></ProjectCard>
	</div>);
}

export default Projects;