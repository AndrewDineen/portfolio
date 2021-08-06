import NoteTaking from '../../Images/notetaking.png';
import './BlogCard.css';
const BlogCard = () => {
	return (
		<div className="blog-card">
			<div className="back-drop">
				<p className="coming-soon">Coming Soon</p>
				<p className="coming-soon-details">This part of the site is currently under construction, please check back later for details.</p>
			</div>
			<img src={NoteTaking} className="blog-card-img"></img>
			<div className="blog-text-container">
				<p className="title-text">Lorem ipsum dolor sit amet, consect adipiscing elit</p>
				<p className="date-text">Jun 15, 2021 </p>
				<div className="blog-line"></div>
				<p className="blog-description"> </p>
				<p className="large-link blog-link">Read More <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="arrow">
					<path d="M4.16675 10H15.8334M15.8334 10L10.0001 4.16669M15.8334 10L10.0001 15.8334" stroke="#098BEA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg></p>
			</div>
		</div>
	);
}

export default BlogCard;