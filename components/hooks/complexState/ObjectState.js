import { useState } from 'react'

export default function ObjectState() {

	const initialState = {
		mission: 'developer',
		skills: ['creating web & mobile apps', 'changing the world'],
		stack: [
			{ lang: ['html', 'css', 'javascript'] },
			{ database: 'mongodb' },
			{ front: ['react', 'nextjs'] },
			{ back: 'express' },
		],
	}

	const [object, setObject] = useState(initialState)

	const mutateObject = () => {
		setObject({ ...object, fact: 'javascript was created in 10 days' })
	}

	return (
		<div className='component'>
			<h4>{object.mission}</h4>
			<h4>{object.skills[0]}</h4>
			<h4>{object.stack[2].front[1]}</h4>
			<h4>{object.fact}</h4>
			<button style={{marginTop: 10}} className='button' onClick={() => mutateObject()}> Mutate Object State </button>
		</div>
	)
}
