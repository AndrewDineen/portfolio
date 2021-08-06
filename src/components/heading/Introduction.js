import './Introduction.css';
const Introduction = (props) => {
	return (<div className={props.cName + " introduction-container"}>
		<p className="sub-title" id="intro">{props.intro.subTitle}</p>
		<p className="title">{props.intro.title}</p>
		<p className="information-paragraph">{props.intro.paragraph}</p>
		{/* xs: '480px',
  		sm: '576px',
  		md: '768px',
  		lg: '992px',
  		xl: '1200px',
  		xxl: '1600px', */}
	</div>);
}
export default Introduction;