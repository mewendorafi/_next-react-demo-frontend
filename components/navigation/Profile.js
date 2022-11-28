import Link from 'next/link'

export default function Profile() {

	return (
		<div style={profile}>
			<h1> Profile page </h1>
			<div className='navigation-links'>
			<h4> Navigation Links </h4>
			<Link href='/'> /index </Link>
			<Link href='/wishlist'> /wishlist </Link>
			</div>
		</div>
	)
}

const profile = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'lightsalmon',
	height: '100vh'
}
