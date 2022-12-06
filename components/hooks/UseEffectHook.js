//! This component just logs stuff, open browser console to see useEffect executing in real time

import { useState, useEffect } from 'react'

export default function UseEffectHook() {

	const [count, setCount] = useState(0)
	const [blankState, setBlankState] = useState(null)

	//? ⚛ React Docs -> "By default, the useEffect hook runs both after the first render and after every update."
	// https://reactjs.org/docs/hooks-effect.html#example-using-hooks

	//? What is a component lifecycle ?
	/*
	Lifecycle is the process which a component goes through when it is rendered (displayed to the screen),
	mainly 3 stages :
	-> MOUNT (initialization), lifecycle start
	-> UPDATE / RE-RENDER (any state or props values changes), lifecycle continues
	-> UNMOUNT (destruction), lifecycle end
	*/


	/*
	⚙️ This is the default useEffect :
	it runs at EVERY STEP of the component's lifecycle, because there is no dependency -> []
	*/
	// useEffect(() => {
	// 	const updateData = () => {
	// 		console.log('> ⚠️ useEffect call !')
	// 	}
	// 	updateData()
	// }) //! No dependency here


	/*
	⚙️ This effect runs ONLY ONCE at the beginning of the component's lifecycle,
	because there is an empty dependency -> []
	✨ ON MOUNT
	*/
	// useEffect(() => {
	// 	const updateData = () => {
	// 		console.log('> ⚠️ useEffect call : component mount')
	// 	}
	// 	updateData()
	// }, []) //! Empty dependency here


	/*
	⚙️ This effect runs on component's initialization + on every dependency (state) update (re-render)
	✨ ON MOUNT + ON UPDATE
	*/
	// useEffect(() => {
	// 	const updateData = () => {
	// 		console.log('> ⚠️ useEffect call : component mount & dependency (state) update')
	// 	}
	// 	updateData()
	// }, [count, blankState]) //! Add as many states/props as you need as dependencies


	/*
	⚙️ This effect runs ONLY ONCE at the end of the component's lifecycle
	(navigate to another page to see it happening)
	✨ ON UNMOUNT (return () => {...})
	*/
	useEffect(() => {
		return () => {
			console.log('> ⚠️ useEffect call : component unmounted')
		}
	}, [])


	/*
	⚙️ This effect runs on any state/props update + on component's destruction
	✨ ON UPDATE (every time any state/props values changes) + ON UNMOUNT (return () => {...})
	*/
	// useEffect(() => {
	// 	return () => {
	// 		console.log('> ⚠️ useEffect call : component unmounted')
	// 	}
	// }) //! Updates every time any state/props changes, because no dependency -> []


	//! GET /users (call to JSONPlaceholder API)
	// const fetchUsers = () => {
	// 	fetch('http://localhost:3000/users') // fetching /users route from Express backend
	// 		.then(response => response.json())
	// 		.then(data => console.log(data))
	// }


	//! This effect will fetch data from a webservice/backend, on component mount
	// useEffect(() => {
	// 	fetchUsers()
	// }, [])


	//! BONUS -> useEffect with anonymous IIFE (Immediately Invoked Function Expression)
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