import BlogCard from './BlogCard';
import './Section.css';
const Section = () => {
	return (<div className="secondary-background black-text blog-container">
		<div className="blog-sub-container">
			<div className="blog-heading-container">
				<p className="sub-title contact-sub blog-sub" id="blogs"></p>
				<p className="title contact-title blog-title">Blogs</p>
			</div>
			<div className="blog-card-container">
				<BlogCard idx={0}></BlogCard>
				<div className="additional-blogs">
					<BlogCard idx={1}></BlogCard>
					<BlogCard idx={2}></BlogCard>
				</div>




			</div>
		</div>

	</div>);
}

export default Section;