import styles from '../../styles/SendToStore.module.css'

import { useDispatch } from 'react-redux'

import {
	addFriendToStore,
	removeFriendFromStore,
	resetFriendsInStore,
} from './reducers/friendsReducer'

import {
	increment,
	decrement,
	incrementByAmount,
	decrementByAmount,
	reset,
} from './reducers/counterReducer'

export default function SendToReduxStore() {

	const dispatch = useDispatch()

	// One single function to handle count
	const handleCount = type => {
		// Check components/reducers/counterReducer.js
		if (type === '+') dispatch(increment())
		if (type === '-') dispatch(decrement())
		if (type === '+ 10') dispatch(incrementByAmount(10))
		if (type === '- 10') dispatch(decrementByAmount(10))
		if (type === 'reset') dispatch(reset())
	}

	return (
		<div className={styles.container}>

			<div className={styles.buttonsDiv}>
				{/* Check components/reducers/friendsReducer.js */}
				<button className='button' onClick={() => dispatch(addFriendToStore('Brendan'))}> Add Friend </button>
				<button className='button' onClick={() => dispatch(removeFriendFromStore())}> Remove Friend </button>
				<button className='button' onClick={() => dispatch(resetFriendsInStore())}> Reset </button>
			</div>

			<div className={styles.buttonsDiv}>
				<div className={styles.buttonsGroup}>
					<button className='button' onClick={() => handleCount('+')}> +1 </button>
					<button className='button' onClick={() => handleCount('-')}> -1 </button>
				</div>
				<div className={styles.buttonsGroup}>
					<button className='button' onClick={() => handleCount('+ 10')}> +10 </button>
					<button className='button' onClick={() => handleCount('- 10')}> -10 </button>
				</div>
				<button className='button' onClick={() => handleCount('reset')}> Reset </button>
			</div>

		</div>
	)
}
