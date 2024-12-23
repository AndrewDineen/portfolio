import { DiMongodb } from 'react-icons/di';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import SoftwareProjects from './SoftwareProjects';
import DataProjects from './DataProjects';
import Roles from './Roles';
const Section = () => {
	const listPadding = {paddingTop: '10px'};
	const rolesInfo = [{
		role: 'Front End',
		icon: <FaReact className="icon" />,
		numProjects: 5,
		cName: 'role-one',
		skills: [<li style={listPadding}>ReactJS</li>, <li style={listPadding}>CSS</li>, <li style={listPadding}>JavaScript</li>, <li style={listPadding}>HTML</li>]

	},
	{
		role: 'Back End',
		icon: <FaNodeJs className="icon" />,
		numProjects: 5,
		cName: 'role-two',
		skills: [<li style={listPadding}>C#</li>, <li style={listPadding}>NodeJS</li>]
	},
	{
		role: 'Databases',
		icon: <DiMongodb className="icon" />,
		numProjects: 5,
		cName: 'role-three',
		skills: [<li style={listPadding}>SQL</li>, <li style={listPadding}>MongoDB</li>]
	}
	];
	return (<div>
		<Roles rolesInfo={rolesInfo}></Roles>
		<DataProjects></DataProjects>
		<SoftwareProjects ></SoftwareProjects>
	</div>);
}

export default Section;