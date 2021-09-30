import { DiMongodb } from 'react-icons/di';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import Projects from './Projects';
import Roles from './Roles';
const Section = () => {
	const listPadding = {paddingTop: '10px'};
	const rolesInfo = [{
		role: 'Front End Engineer.',
		icon: <FaReact className="icon" />,
		numProjects: 5,
		cName: 'role-one',
		skills: [<li style={listPadding}>ReactJS</li>, <li style={listPadding}>CSS</li>, <li style={listPadding}>JavaScript</li>, <li style={listPadding}>HTML</li>]

	},
	{
		role: 'Back End Engineer.',
		icon: <FaNodeJs className="icon" />,
		numProjects: 5,
		cName: 'role-two',
		skills: [<li style={listPadding}>NodeJS</li>]
	},
	{
		role: 'Database Engineer.',
		icon: <DiMongodb className="icon" />,
		numProjects: 5,
		cName: 'role-three',
		skills: [<li style={listPadding}>MongoDB</li>, <li style={listPadding}>SQL</li>]
	}
	];
	return (<div>
		<Roles rolesInfo={rolesInfo}></Roles>
		<Projects ></Projects>
	</div>);
}

export default Section;