import { InlineWidget } from "react-calendly";
const Calendar = () => {
	return (
		<div style={{ marginBottom: '5rem'}}>
			<InlineWidget url="https://calendly.com/andrewdineen" pageSettings={{ backgroundColor: '252734', textColor: 'ffffff'}} styles={{ height: '700px' }}></InlineWidget>
		</div>
	)
};

export default Calendar;