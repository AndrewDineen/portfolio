import { InlineWidget } from "react-calendly";
import { useEffect, useRef } from "react";
const Calendar = () => {
	const calendarRef = useRef(null);
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.5

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
		observer.observe(calendarRef.current);
		
	}, []);
	return (
		<div style={{ marginBottom: '5rem'}} ref={calendarRef}>
			<InlineWidget url="https://calendly.com/andrewdineen" pageSettings={{ backgroundColor: '252734', textColor: 'ffffff'}} styles={{ height: '700px' }} ></InlineWidget>
		</div>
	)
};

export default Calendar;