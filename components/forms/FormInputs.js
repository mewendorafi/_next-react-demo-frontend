import { useState, useRef } from 'react'

	// Inputs in React can be handled via state of via reference
export default function FormInputs() {
	const placeholders = {
		email: 'Enter an email (example@mail.com)',
		password: 'Enter a strong password (letters, numbers, symbols)',
		username: 'Enter a username',
	}

	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const usernameRef = useRef(null)
	const emailRef = useRef(null)
	const passwordRef = useRef(null)

	// fetch payload
	const stateReqBody = { username, email, password }
	const refReqBody = {
		username: usernameRef.current?.value,
		email: emailRef.current?.value,
		password: passwordRef.current?.value,
	}

	const fetchBackendRoute = () => {
		fetch('http://localhost:3000/users/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(refReqBody),
		})
			.then(res => res.json())
			.then(data => console.log(data))
	}

	return (
		<div className='component'>
			<form className='form'>
				<input
					placeholder={placeholders.username}
					value={username}
					onChange={e => setUsername(e.target.value)}
					ref={usernameRef}
					className='input'
					type='text'
					name='username'
				/>
				<input
					placeholder={placeholders.email}
					value={email}
					onChange={e => setEmail(e.target.value)}
					ref={emailRef}
					className='input'
					type='email'
					name='email'
				/>
				<input
					placeholder={placeholders.password}
					value={password}
					onChange={e => setPassword(e.target.value)}
					ref={passwordRef}
					className='input'
					style={{marginBottom: 40}}
					type='password'
					name='password'
				/>
				<button type='button' className='button' onClick={fetchBackendRoute}> Submit </button>
			</form>
		</div>
	)
}
