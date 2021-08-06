import Menu from './Menu';
import './Nav.css';
const Nav = () => {
	return (
		<>
			<div className="nav-container">
				<Menu />
				<div className="button">Hire me</div>
			</div>
			<div className="nav-list-container">
				<ul className="nav-list">
					<li><a href="#intro">Introduction</a><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="3" cy="3" r="3" fill="#098BEA" />
					</svg>
					</li>
					<li><a href="#experience">Experience</a><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="3" cy="3" r="3" fill="#098BEA" />
					</svg>
					</li>
					<li><a href="#projects">Projects</a><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="3" cy="3" r="3" fill="#098BEA" />
					</svg>
					</li>
					<li><a href="#blogs">Blogs</a><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="3" cy="3" r="3" fill="#098BEA" />
					</svg>
					</li>
					<li><a href="#contact">Contact</a><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="3" cy="3" r="3" fill="#098BEA" />
					</svg>
					</li>
				</ul>
				<div className="bar-button button"><a href="#contact">Hire me</a></div>
			</div>
		</>
	);
}
export default Nav;