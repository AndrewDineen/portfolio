import './Form.css';
const Form = () => {
	return(<div>
		<form>
			<label>What's your name?</label>
			<input></input>
			<label>Your E-mail</label>
			<input></input>
			<label>Tell me about the opportunity</label>
			<textarea></textarea>
			<div type="submit" className="button" style={{width: '100px', borderRadius:'5px'}}>Send it Away</div>
		</form>
	</div>);
}

export default Form;