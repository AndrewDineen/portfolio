import './App.css';
import BlogSection from './components/blog/Section';
import ContactForm from './components/contact-form/Section';
import ContactSection from './components/contact/Section';
import HeadingSection from './components/heading/Section';
import PortfolioSection from './components/portfolio/Section';
import Footer from './components/contact-form/Footer';



function App() {
	return (
		<div className="App">
			<HeadingSection></HeadingSection>
			<ContactSection></ContactSection>
			<PortfolioSection></PortfolioSection>
			<BlogSection></BlogSection>
			<ContactForm></ContactForm>
			<div className="blog-line divider"></div>
			<Footer></Footer>
		</div>
	);
}

export default App;
