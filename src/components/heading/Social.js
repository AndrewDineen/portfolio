import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import './Social.css';
const Social = () => {
	return (<div className="social-icons-container">
		<IconContext.Provider value={{ color: '#fff', size: window.matchMedia('(min-width: 1300px)').matches ? "1.4rem" : "1.75rem" }}>
			<a href="https://github.com/AndrewDineen" target="_blank">
				<AiFillGithub />
			</a>
			<a href="https://www.linkedin.com/in/andrew-dineen-242084180/" target="_blank">
				<AiFillLinkedin />
			</a>

		</IconContext.Provider>
	</div>);
}
export default Social;