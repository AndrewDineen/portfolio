import { createContext, useState } from 'react';
import './App.css';
import BlogSection from './components/blog/Section';
import Footer from './components/contact-form/Footer';
import ContactForm from './components/contact-form/Section';
import ContactSection from './components/contact/Section';
import HeadingSection from './components/heading/Section';
import PortfolioSection from './components/portfolio/Section';
import { SidebarProvider, useSidebarUpdate, useSidebar } from './SidebarContext';

function App() {
	const toggleSidebar = useSidebarUpdate();
	const sidebar = useSidebar();
	return (
		<div className="App" onClick={() => { if(sidebar) toggleSidebar();}}>
			<SidebarProvider>
				<HeadingSection></HeadingSection>
			</SidebarProvider>
			<ContactSection></ContactSection>
			<PortfolioSection></PortfolioSection>
			<BlogSection></BlogSection>
			<ContactForm></ContactForm>
			<div className="blog-line divider"></div>
			<Footer onClick={toggleSidebar}></Footer>
		</div>
	);
}

export default App;
