const RoleContent = (props) => {
	return(
		<div style={{
			transform: `translateX(-${props.translate}%)`,
			transition: `transform ease-out ${props.transition}s`,
			height: '100%',
			width: `100%`,
			display:'flex'

		}} className="role-content-transition">
			{props.children}
		</div>
	);
}

export default RoleContent;