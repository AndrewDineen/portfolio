import { AiOutlineProfile} from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import {GrProjects} from 'react-icons/gr';
import {GrArticle} from 'react-icons/gr';
import {GrContact} from 'react-icons/gr';


const MenuData = [
	{
		title: 'Introduction',
		ref: 'intro',
		icon: <AiOutlineProfile/>,
		cName: 'nav-links'
	},
	{
		title: 'Experience',
		ref: 'experience',
		icon: <GiSkills/>,
		cName: 'nav-links'
	},
	{
		title: 'Projects',
		ref: 'projects',
		icon: <GrProjects className="icon"/>,
		cName: 'nav-links'
	},
	{
		title: 'Blogs',
		ref: 'blogs',
		icon: <GrArticle className="icon"/>,
		cName: 'nav-links'
	},
	{
		title: 'Contact',
		ref: 'contact',
		icon: <GrContact className="icon"/>,
		cName: 'nav-links'
	}
]

export default MenuData;
