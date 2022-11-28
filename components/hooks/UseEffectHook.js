import { useState, useEffect } from 'react'

export default function UseEffectHook() {

	const [count, setCount] = useState(0)

	//? ⚛ React Documentation -> "By default, the useEffect hook runs both after the first render and after every update."
	// https://reactjs.org/docs/hooks-effect.html#example-using-hooks

	//! This effect runs at EVERY STEP of the component's lifecycle, because there is no dependency -> []
	useEffect(() => {
		const updateData = () => {
			console.log('> ⚠️ useEffect call !')
		}
		updateData()
	}) //! No dependency here !

	//! This effect runs ONLY ONCE at the beginning of the component's lifecycle -> ON MOUNT (initialization)
	// useEffect(() => {
	// 	const updateData = () => {
	// 		console.log('> ⚠️ useEffect call : component mount')
	// 	}
	// 	updateData()
	// }, [])

	//! This effect runs on every dependency update -> ON MOUNT (initialization) + ON EVERY DEPENDENCY (STATE) UPDATE
	// useEffect(() => {
	// 	const updateData = () => {
	// 		console.log('> ⚠️ useEffect call : component mount & dependency (state) update')
	// 	}
	// 	updateData()
	// }, [count]) //! Here, the count state is the useEffect dependency (add as many states as you need)

	//! This effect also runs at the end of the component's lifecycle -> ON MOUNT (initialization) + ON UNMOUNT (destruction)
	// useEffect(() => {
	// 	return () => {
	// 		console.log('> ⚠️ useEffect call : component mount & unmount')
	// 	}
	// }, [])

	//! GET /users (call to JSONPlaceholder API)
	// const fetchUsers = () => {
	// 	fetch('http://localhost:3000/users') // fetching /users route from Express backend
	// 		.then(response => response.json())
	// 		.then(data => console.log(data))
	// }

	//! This effect will run at the start of the component lifecycle to fetch data from a webservice/backend
	// useEffect(() => {
	// 	fetchUsers()
	// }, [])

	// BONUS -> useEffect with anonymous function call
	// useEffect(() => {
	// 	(() => console.log('> ⚠️ useEffect call !'))()
	// }, [])

	return (
		<div className='component'>
			<h2> useEffect Hook Component </h2>
			<h3> Count : <p style={{color: 'red', display: 'inline'}} > {count} </p> </h3>
			<div className='btn-div'>
				<button className='button' onClick={() => setCount(count + 1)}> Increment </button>
				<button className='button' onClick={() => count > 0 && setCount(count - 1)}> Decrement </button>
			</div>
		</div>
	)
}