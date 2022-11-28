import styles from '../../styles/DisplayFromStore.module.css'
import { useSelector } from 'react-redux'

export default function DisplayFromReduxStore() {

	const countFromStore = useSelector(state => state.counter.value)
	const friendsFromStore = useSelector(state => state.friends)

	const friendsDisplay = friendsFromStore.map((friend, i) => (
		<p key={i} style={{ marginBlock: 10 }}> {friend} </p>
	))

	return (
		<div className={styles.container}>

			<div>
				<h4 className={styles.title}> Friends In Store </h4>
				<div className={styles.friends}>
					{friendsDisplay}
				</div>
			</div>

			<div className={styles.counter}>
				<h4>
					Count In Store :
					<p className={styles.count}> {countFromStore} </p>
				</h4>
			</div>

		</div>
	)
}
