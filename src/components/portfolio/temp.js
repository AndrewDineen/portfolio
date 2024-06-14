{
    if(isMobile)
    {
        rolesInfo.map((elem, idx) => {
            return (
                        <RoleBox idx={idx} rolesInfo={rolesInfo} key={idx}>
                            <IconContext.Provider value={{ color: 'red', size: '1.5rem', className: 'icon' }}>
                                <RoleContent idx={idx}>
                                    <Role role={elem.role} icon={elem.icon} numProjects={elem.numProjects} cName={elem.cName} />
                                </RoleContent>
                            </IconContext.Provider>
                        </RoleBox>
                    );
            
    }else{
        rolesInfo.map((elem, idx) => {
            return (
                <RoleBox idx={idx} rolesInfo={rolesInfo} key={idx}>
                    <IconContext.Provider value={{ color: '#098bea', size: '2.4rem', className: 'icon' }}>
                        <RoleContent idx={idx}>
                            <Role role={elem.role} icon={elem.icon} numProjects={elem.numProjects} cName={elem.cName} />
                        </RoleContent>
                    </IconContext.Provider>
                </RoleBox>
        );
    }})
}	