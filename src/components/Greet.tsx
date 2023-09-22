type GreetProps = {
	username: string
	msgCount?: number
	isLoggedIn: boolean
}


export default function Greet({ username, msgCount = 0, isLoggedIn }: GreetProps) {
	// const { msgCount = 0 } = props
	return (
		<div>
			<h2>
				{
					isLoggedIn
					?`Welcome ${ username }!! You have ${ msgCount } messages!!`
					:`Welcome Guest`
				}
			</h2>
		</div>
	)
}