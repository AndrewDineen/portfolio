import { Link } from 'react-scroll';
import Menu from './Menu';
import MenuData from './MenuData';
import './Nav.css';
const Nav = () => {
	return (
		<>
			<div className="nav-container">
				<Menu />
				<div className="button"><Link activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>Hire me</Link></div>
			</div>
			<div className="nav-list-container">
				<ul className="nav-list">
					{MenuData.map((elem, idx) => {
						return (
							<li key={idx}><Link
								activeClass="active"
								to={elem.ref}
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>{elem.title}
							</Link>
								<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="dot">
									<circle cx="3" cy="3" r="3" fill="#098BEA" />
								</svg>
							</li>
						)

					})}

				</ul>
				<div className="bar-button button"><Link activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>Hire me</Link></div>
			</div>
		</>
	);
}
export default Nav;