import { SiKaggle, SiTableau, SiGithub, SiLinkedin } from "react-icons/si";
import { IconContext } from 'react-icons/lib';
import './Social.css';
const Social = () => {
	return (<div className="social-icons-container">
		<IconContext.Provider value={{ color: '#fff', size: window.matchMedia('(min-width: 1300px)').matches ? "1.4rem" : "1.75rem" }}>
			<a href="https://www.kaggle.com/andrewdineen" target="_blank">
				<SiKaggle />
			</a>
			<a href="https://public.tableau.com/app/profile/andrew.dineen8747/vizzes" target="_blank">
				<SiTableau />
			</a>
			<a href="https://github.com/AndrewDineen" target="_blank">
				<SiGithub />
			</a>
			<a href="https://www.linkedin.com/in/andrew-dineen-242084180/" target="_blank">
				<SiLinkedin />
			</a>

		</IconContext.Provider>
	</div>);
}
export default Social;