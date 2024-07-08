import Introduction from './Introduction';
import Name from './Name';
import Nav from './Nav';
import Portrait from './Portrait';
import './Section.css';
import Social from './Social';
const Section = () => {
	const Intro = {
		subTitle: "/ This is me",
		title: "Software Engineer.",
		paragraph: "I'm a consultant seeking employment as a Software Engineer. When I'm not programming, I like to read and study interesting academic subjects.",
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