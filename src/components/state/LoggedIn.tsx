import { useState } from "react"

export default function LoggedIn() {

	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const handleLoggedIn = () => {
		setIsLoggedIn(true)
	}

	const handleLoggedOut = () => {
		setIsLoggedIn(false)
	}

	return (
		<div>
			<button onClick={handleLoggedIn}>Login</button>
			<button onClick={handleLoggedOut}>Logout</button>
			<div>User is {isLoggedIn?'Logged In':'Logged Out'}</div>
		</div>
	)
}
