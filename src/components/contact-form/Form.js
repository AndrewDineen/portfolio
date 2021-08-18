import { useRef } from 'react';
import './Form.css';
const Form = () => {
	const formRef = useRef(null);
	return (<div style={{ width: '100%' }}>
	
		<form action="https://formspree.io/f/xoqypeld"
			method="POST"
			ref={formRef}
			style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<p className="form-sub form" style={{marginBottom: '12px', alignSelf: 'flex-start'}}>Send me a message:</p>
			<p className="line form" style={{border: '3px solid #098bea', marginBottom: '78px', alignSelf: 'flex-start'}}></p>
			<div className="form-contents">
				
				<label>What's your name?</label>
				<input name="name"></input>
				<label>Your E-mail</label>
				<input name="email" type="email"></input>
				<label>Tell me about the opportunity</label>
				<textarea name="info"></textarea>
				<div onClick={() => { formRef.current.submit() }} className="button" style={{ width: '100px', borderRadius: '5px' }}>Send it Away</div>
			</div>
		</form>
	</div>);
}

export default Form;