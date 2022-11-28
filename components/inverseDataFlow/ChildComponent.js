export default function ChildComponent(props) {

	const childReference = dataForParent => {
		console.log('> ⚠️ Function inside child component, sending data to parent component !')
		// This calls the function in the parent component
		props.parentReference(dataForParent)
	}

	const dataObject = {
		id: '💊',
		message: 'Data from child component !',
	}

	return (
		<div style={childStyle}>
			<h3> {props.name} </h3>
			<button className='button' onClick={() => childReference(dataObject)}>
				Send data to parent
			</button>
		</div>
	)
}

// Inline style
const childStyle = {
	minHeight: '25vh',
	width: '50vw',
	padding: '15px 35px 15px 45px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-evenly',
	borderRadius: '25px',
	backgroundColor: '#ebebeb',
	transition: 'box-shadow 0.15s, transform 0.15s',
	boxShadow:
		'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
	// boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 2px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
	// box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -2px 0 inset
}
