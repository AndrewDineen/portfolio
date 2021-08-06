import Form from './Form';
import './Section.css';
const Section = () => {
	return (<div className="form-container" id="contact">
		<div className="contact-column-1">
			<p className="title form-title">GOT A PROJECT?</p>
			<p className="line form-line"></p>
			<p className="form-sub">Let's Talk</p>
			<p className="form-info">If you would like to know more, or schedule an interview, use this form or send me an <a href="mailto:addineen@gmail.com">email</a> for a quicker response.</p>
		</div>
		<Form></Form>
	</div>);

}

export default Section;