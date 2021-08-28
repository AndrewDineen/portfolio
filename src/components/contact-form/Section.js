import { useEffect, useRef } from 'react';
import Calendar from './Calendar';
import Form from './Form';
import './Section.css';
const Section = () => {
	const projectRef = useRef(null);
	const subRef = useRef(null);
	const infoRef = useRef(null);
	const subTwoRef = useRef(null);
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 1

	}
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.style.animation = 'fade-in 1s forwards';
				} else {
					entry.target.style.animation = 'fade-out 1s forwards';
				}
			});
		}, options);
		observer.observe(projectRef.current);
		observer.observe(subRef.current);
		observer.observe(infoRef.current);
		observer.observe(subTwoRef.current);
	}, []);
	return (<div className="form-container" id="contact" style={{ display: 'flex', flexDirection: 'column' }}>
		<div className="contact-column-1">
			<p className="title form-title" ref={projectRef}>GOT A PROJECT?</p>
			<p className="line form-line"></p>
			<p className="form-sub" ref={subRef}>Let's Talk</p>
			<p className="form-info" style={{ marginBottom: '78px' }} ref={infoRef}>If you would like to know more, or schedule an interview, use this form or send me an <a href="mailto:addineen@gmail.com">email</a>.</p>
			<p className="form-sub" style={{ marginBottom: '12px' }} ref={subTwoRef}>Schedule a meeting:</p>
			<p className="line schedule-line" style={{ border: '3px solid #098bea' }}></p>

		</div>
		<Calendar></Calendar>

		<Form></Form>
	</div>);

}

export default Section;