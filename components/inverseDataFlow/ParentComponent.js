import ChildComponent from './ChildComponent.js'

export default function ParentComponent() {

	const parentReference = dataFromChild => {
		console.log(
			'> ⚠️ Function in parent component, received data from child component : ',
			dataFromChild
		)
	}

	return (
		<div className='component'>
			<h2> Parent Component </h2>
			<ChildComponent parentReference={parentReference} name='Child component' />
		</div>
	)
}
