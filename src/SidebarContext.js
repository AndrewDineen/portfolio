
import { useContext, useState, createContext } from "react";

const SidebarContext = createContext();
const SideBarUpdateContext = createContext();

export function useSidebar(){
	return useContext(SidebarContext);
}

export function useSidebarUpdate(){
	return useContext(SideBarUpdateContext);
}
export function SidebarProvider({ children }) {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	return(
		<SidebarContext.Provider value={sidebar}>
			<SideBarUpdateContext.Provider value={showSidebar}>
			{children}
			</SideBarUpdateContext.Provider>
		</SidebarContext.Provider>
	)
}