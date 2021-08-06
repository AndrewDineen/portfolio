import './Section.css';
import Stats from './Stats';
const Section = () => {
	return (
		<div className="contact-container secondary-background introduction-container">
			<div className="contact-sub-container">
				<div className="contact-col-1">
					<p className="contact-sub">/ Contact</p>
					<p className="title contact-title">Any Type Of Query Or Discussion.</p>
					<p className="contact-paragraph">The fastest way to reach me is by email. If you have any questions or would like to discuss particular opportunities, please feel free to reach out to me at any time. P.S. You can also use the form at the end of the page.</p>
					<div className="contact-link large-link"><a href="mailto:addineen@gmail.com">addineen@gmail.com</a><svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="arrow">
						<path d="M4.16675 9.99996H15.8334M15.8334 9.99996L10.0001 4.16663M15.8334 9.99996L10.0001 15.8333" stroke="#098BEA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>

					</div>
				</div>
				<div className="contact-col-2">
					<p className="title contact-title" id="experience">I have experience working with several clients and companies.</p>
					<p className="information-paragraph contact-paragraph paragraph-two">Technologies I've used the most include ReactJS, NodeJS, Express, MongoDB, and SQL.</p>
					<Stats></Stats>
				</div>
			</div>
		</div>);
}

export default Section;