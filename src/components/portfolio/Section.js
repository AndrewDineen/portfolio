import Roles from './Roles';
import Projects from './Projects';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
const Section = () => {
	const rolesInfo = [{
		role: 'Front End Engineer.',
		icon: <FaReact className="icon"/>,
		numProjects: 5,
		cName: 'role-one'
	},
	{
		role: 'Back End Engineer.',
		icon: <FaNodeJs className="icon"/>,
		numProjects: 5,
		cName: 'role-two'
	},
	{
		role: 'Database Engineer.',
		icon: <DiMongodb className="icon"/>,
		numProjects: 5,
		cName: 'role-three'
	}
];
	return (<div>
		<Roles rolesInfo={rolesInfo}></Roles>
		<Projects ></Projects>
	</div>);
}

export default Section;