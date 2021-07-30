const Role = (props) => {
	return (

		<div className={"role-content " + props.cName} >
			{props.icon}
			<p className="product-title">{props.role}</p>
			<div className="small-line"></div>
			<p className="product-text">{props.numProjects}+ Projects</p>
		</div>


	)
}

export default Role
