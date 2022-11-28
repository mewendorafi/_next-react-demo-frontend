//! Check the README.md !

import styles from '../styles/Demo.module.css'

import Link from 'next/link'

import Components from '../utils/filesImports.js'

export default function Demo() {
	return (
		<div className={styles.container}>
			<div className='navigation-links'>
				<h4> Navigation Links </h4>
				<Link href='/profile'> /profile </Link>
				<Link href='/wishlist'> /wishlist </Link>
			</div>
			<Components />
		</div>
	)
}
