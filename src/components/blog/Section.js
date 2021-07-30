import BlogCard from './BlogCard'
import './Section.css';
const Section = () => {
	return(<div className="secondary-background black-text blog-container">
		<p className="sub-title contact-sub blog-sub" id="blogs">/ My Research</p>
		<p className="title contact-title blog-title">Blogs</p>
		<BlogCard></BlogCard>
	</div>);
}

export default Section;