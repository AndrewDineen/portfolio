import Form from './Form';
import './Section.css';
import Calendar from './Calendar';
const Section = () => {
	return (<div className="form-container" id="contact" style={{display: 'flex', flexDirection:'column'}}>
		<div className="contact-column-1">
			<p className="title form-title">GOT A PROJECT?</p>
			<p className="line form-line"></p>
			<p className="form-sub">Let's Talk</p>
			<p className="form-info" style={{marginBottom: '78px'}}>If you would like to know more, or schedule an interview, use this form or send me an <a href="mailto:addineen@gmail.com">email</a>.</p>
			<p className="form-sub" style={{marginBottom: '12px'}} >Schedule a meeting:</p>
			<p className="line schedule-line" style={{border: '3px solid #098bea'}}></p>

		</div>
		<Calendar></Calendar>
		
		<Form></Form>
	</div>);

}

export default Section;