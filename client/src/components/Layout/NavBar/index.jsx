import React from 'react'
import { navBar, logo, navContentRight, login, searchInput } from './navbar.css'

const NavBar = () => (
	<main className={navBar}>
		<div className={logo}>Planted</div>
		<div className={navContentRight}>
			<input
				className={searchInput}
				type='text'
				placeholder=' &#xf002;    Search Plant Names'
			/>
			<button className={login}>Log in</button>
		</div>
	</main>
)

export default NavBar
