import { AiFillRobot } from 'react-icons/ai';
import { GiFruitBowl } from 'react-icons/gi';
import { SiNodeRed } from 'react-icons/si';
import FridgeButler from '../../Images/AppPhotos/fridge_combined.png';
import Turing from '../../Images/AppPhotos/turing-combined.png';
import XuriBot from '../../Images/AppPhotos/xuri-combined-2.png';
const iconStyle = {alignSelf: 'center', margin: '1rem 0'};
const ProjectData = {
	fridgeButler: {
		subTitle: "Android App.",
		title: "Fridge Butler",
		source: FridgeButler,
		info: `Fridge Butler is a team project built in Android Studio that helps users track the expiration date on foods that they have in their pantry.`,
		highlights: ['A list view that allows users to see a description of an item, quantity, expiration date, etc.', 'Added the ability to add food items.', 'Added the ability to expand a food item card to see more detailed information on that food.'],
		icon: <GiFruitBowl style={iconStyle}></GiFruitBowl>
	},
	xuri: {
		subTitle: "Web Application.",
		title: "Xuri Bot",
		source: XuriBot,
		info: ' Xuri Bot is a chat bot that, based on an uploaded resume and questionnaire, matches candidates with open positions relevant to their personality and skillset.',
		highlights: ['Gained experience with NodeJS, React, MongoDB, and DialogFlow.', 'Added the ability to detect keywords in natural language presented by the user.', 'Added the ability to cross reference keywords and find a percentage match for various positions.'],
		icon: <AiFillRobot style={iconStyle}></AiFillRobot>
	},
	turing: {
		subTitle: "Web Application.",
		title: "Turing Search Engine",
		source: Turing,
		info: 'The Turing Search Engine is a next gen stock market analysis tool that recommends filters based on Machine Learning analysis of market trends. This is a team project.',
		highlights: ['An interface for testing different parameters on the ML model.', 'A filter panel for recommending filters based on market trends.', 'A global state management system to keep track of information pertaining to ongoing searches.'],
		icon: <SiNodeRed style={iconStyle}></SiNodeRed>
	}
}

export default ProjectData;