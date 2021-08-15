import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import './Menu.css';
import MenuData from './MenuData';
import { Link } from 'react-scroll';
const Menu = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);
	return (
		<>
		<IconContext.Provider value={{color: '#fff',fill:"#fff", strokeWidth: 1}}>
			<svg width="32" height="32" viewBox="0 0 30 30" fill="none" className="navbar" onClick={showSidebar}>
				<path d="M5 7.5L17.5 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M5 15L25 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M5 22.5L12.5 22.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
			<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
				<ul className="nav-menu-items">
					<li className="navbar-toggle" onClick={showSidebar}>
						<a className="menu-bars">
							<AiOutlineClose />
						</a>

					</li>
					{MenuData.map((elem, idx) => {
						return (
							<li key={idx} className={elem.cName} onClick={showSidebar}>
								<Link
								activeClass="active"
								to={elem.ref}
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								>
									{elem.icon}
									<span className="menu-span">{elem.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
				
			</nav>
			</IconContext.Provider>
		</>
	);
}

export default Menu;