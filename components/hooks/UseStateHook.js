import { useState } from 'react'

export default function UseStateHook() {

	const [count, setCount] = useState(0)

	// One function to handle incrementation, decrementation & reset
	const handleCount = type => {
		if (type === '+') setCount(count + 1)
		if (type === '-' && count > 0) setCount(count - 1)
		if (type === 'reset') setCount(0)
	}

	return (
		<div className='component'>
			<h2> useState Hook Component </h2>
			<h3> Count : <p style={{color: 'red', display: 'inline'}} > {count} </p> </h3>
			<div className='btn-div'>
				<button className='button' onClick={() => handleCount('+')}> Increment </button>
				<button className='button' onClick={() => handleCount('-')}> Decrement </button>
				<button className='button' onClick={() => handleCount('reset')}> Reset </button>
			</div>
		</div>
	)
}

//! To explain each action independently, instead of a single function
// const increment = () => {
// 	setCount(count + 1)
// }

// const decrement = () => {
// 	setCount(count - 1)
// }

// const resetCount = () => {
// 	setCount(0)
// }
