import Link from 'next/link'

export default function Wishlist() {

	return(
		<div style={wishlist}>
			<h1> Wishlist page </h1>
			<div className='navigation-links'>
			<h4> Navigation Links </h4>
			<Link href='/'> /index </Link>
			<Link href='/profile'> /profile </Link>
			</div>
		</div>
	)
}

const wishlist = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'lightskyblue',
	height: '100vh',
}
