import { useState } from 'react'
import createId from 'uniqid'

export default function ArrayState() {
	const [array, setArray] = useState([])

	const addNumber = () => {
		setArray([
			...array,
			{
				id: createId(),
				value: Math.floor(Math.random() * 10) + 1,
			},
		])
	}

	const numbers = array.map(item =>
		<h3 style={{ display: 'inline-flex', marginBottom: 10 }} key={item.id}>
			{item.value}{'-'}
		</h3>
	)

	return (
		<div className='component'>
			<div>{numbers}</div>
			<button className='button' onClick={() => addNumber()}> Add a number </button>
		</div>
	)
}
