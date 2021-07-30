import './Introduction.css';
const Introduction = (props) => {
	return (<div className="introduction-container">
		<p className="sub-title" id="intro">{props.intro.subTitle}</p>
		<p className="title">{props.intro.title}</p>
		<p className="information-paragraph">{props.intro.paragraph}</p>
		
	</div>);
}
export default Introduction;