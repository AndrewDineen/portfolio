import './Section.css';
import Form from './Form';
import Footer from './Footer';
const Section = () => {
	return (<div className="form-container" id="contact">
		<p className="title form-title">GOT A PROJECT?</p>
		<p className="line form-line"></p>
		<p className="form-sub">Let's Talk</p>
		<p className="form-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
		<p className="form-instructions">Estimate your project?</p>
		<p className="second-instructions"> let me know here.</p>
		<Form></Form>
	</div>);

}

export default Section;