import me from '../../Images/meTwo.png';
import './Portrait.css';
const Portrait = () => {
	return (<div className="portrait-container">
		<img src={me} className="profile-image"></img>
	</div>);
}
export default Portrait;