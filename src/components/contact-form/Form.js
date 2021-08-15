import { useRef } from 'react';
import './Form.css';
const Form = () => {
	const formRef = useRef(null);
	return (<div>
		<form action="https://formspree.io/f/xoqypeld"
			method="POST"
			ref={formRef}
		>
			<label>What's your name?</label>
			<input name="name"></input>
			<label>Your E-mail</label>
			<input name="email" type="email"></input>
			<label>Tell me about the opportunity</label>
			<textarea name="info"></textarea>
			<div onClick={() => { formRef.current.submit() }} className="button" style={{ width: '100px', borderRadius: '5px' }}>Send it Away</div>
		</form>
	</div>);
}

export default Form;