import Introduction from './Introduction';
import Name from './Name';
import Nav from './Nav';
import Portrait from './Portrait';
import './Section.css';
import Social from './Social';
const Section = () => {
	const Intro = {
		subTitle: "/ This is me",
		title: "Data Analyst",
		paragraph: "I'm a former Software Developer seeking employment opportunities in the field of Data Analytics in the Greater Seattle Area. When I'm not working on my projects, I like to read and study interesting academic subjects.",
		link: "My story"
	}
	return (<div className="primary-background heading-section">
		<Nav></Nav>
		<div className="heading-contents">
			<div className="name-social-container">
			<Name></Name>
			<Social></Social>
			</div>
			<Introduction intro={Intro} cName="initial-intro"></Introduction>
			<Portrait></Portrait>
		</div>

	</div>);
}
export default Section;