
const Role = (props) => {


	return (
		<div className={"role-content " + props.cName}>
			{props.icon}
			<p className="role-title">{props.role}</p>
			<div className="small-line"></div>
			<p className="role-text">{props.numProjects}+ Projects</p>
		</div>


	)
}

export default Role
