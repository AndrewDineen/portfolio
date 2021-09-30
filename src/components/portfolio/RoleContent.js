import { useState, useEffect } from "react";
const RoleContent = (props) => {
	
	return(
		props.autoPlay ? (
			<div style={{
				transform: `translateX(-${props.translate}%)`,
				transition: `transform ease-out ${props.transition}s`,
				height: '100%',
				width: `100%`,
				display:'flex',
	
			}} className="role-content-transition">
				{props.children}
			</div>
		):(
			<div style={{height: '100%', width: '100%', cursor: 'pointer'}}>
				{props.children}
			</div>
		)
		
	);
}

export default RoleContent;