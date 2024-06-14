import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import Role from './Role';
import RoleBox from './RoleBox';
import RoleContent from './RoleContent';
import './Roles.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Roles = ({ rolesInfo }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1300);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
	{isMobile ? (
		<AwesomeSlider bullets={false} cssModule={{backgroundColor: 'red'}}>
			{rolesInfo.map((elem, idx) => (
				<RoleBox idx={idx} rolesInfo={rolesInfo} key={idx}>
					<IconContext.Provider value={{ color: '#098bea', size: '2.4rem', className: 'icon' }}>
						<RoleContent idx={idx}>
							<Role role={elem.role} icon={elem.icon} numProjects={elem.numProjects} cName={elem.cName} />
						</RoleContent>
					</IconContext.Provider>
				</RoleBox>
			))}
		</AwesomeSlider>
	) : (
		<div className = "role-container-secondary">
			{rolesInfo.map((elem, idx) => (
				<RoleBox idx={idx} rolesInfo={rolesInfo} key={idx}>
					<IconContext.Provider value={{ color: '#098bea', size: '2.4rem', className: 'icon' }}>
						<RoleContent idx={idx}>
							<Role role={elem.role} icon={elem.icon} numProjects={elem.numProjects} cName={elem.cName} />
						</RoleContent>
					</IconContext.Provider>
				</RoleBox>
			))}
		</div>
	)}
    </>
  );
};

export default Roles;