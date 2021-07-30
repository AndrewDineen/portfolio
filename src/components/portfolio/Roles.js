import { useEffect, useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import Role from './Role';
import RoleContent from './RoleContent';
import './Roles.css';
const Roles = (props) => {
	const firstRole = props.rolesInfo[0];
	const secondRole = props.rolesInfo[1];
	const thirdRole = props.rolesInfo[2];

	const [state, setState] = useState({
		translate: 100,
		transition: 0.5,
		activeIndex: 0,
		roles: [thirdRole,  firstRole, secondRole]
	});

	const { translate, transition, activeIndex, roles} = state;


	const autoPlayRef = useRef();
	const transitionRef = useRef();

	useEffect(() => {
		autoPlayRef.current = nextRole;
		transitionRef.current = smoothTransition;
	});

	useEffect(() => {
		const play = () => {
			autoPlayRef.current();
		};

		const smooth = (e) => {
			if (e.target.className == "role-content-transition") {
				transitionRef.current();
			}

		}
		const transitionEnd = window.addEventListener('transitionend', smooth);
		const interval = setInterval(play, 3000);
		return () => {
			clearInterval(interval);
			window.removeEventListener('transitionend', transitionEnd)
		}
	}, []);
	useEffect(() => {
		if (transition === 0) setState({ ...state, transition: 0.5 })
	}, [transition]);

	const smoothTransition = () => {
		let roles = [...state.roles]
		if (activeIndex === roles.length - 1) {roles = [secondRole, thirdRole, firstRole];}
		else if (activeIndex === 0) {roles = [thirdRole, firstRole, secondRole];}
		else {roles = [firstRole, secondRole, thirdRole];}
		setState({
			...state,
			roles,
			transition: 0,
			translate: 100
		})
	}

	const nextRole = () => {
		setState({
			...state,
			translate: translate + 100,
			activeIndex: activeIndex === roles.length - 1 ? 0 : activeIndex + 1
		})
	}

	return (
		<div className="role-container">
			<IconContext.Provider value={{ color: '#098bea', size: '2.4rem' }}>
				<RoleContent translate={translate} transition={transition} activeIndex={activeIndex}>
					{roles.map((elem, idx) => (
						<Role role={elem.role} icon={elem.icon} numProjects={elem.numProjects} cName={elem.cName} key={idx} />
					))}
				</RoleContent>

			</IconContext.Provider>
		</div>
	);
}

Roles.defaultProps = {
	roles: []
};


export default Roles;