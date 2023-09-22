import { personListProps } from "./PersonList.types"

export default function PersonList({usernames}: personListProps) {
	return (
		<div>
			{usernames.map((username)=>(
				<h2 key={ username.first }>{username.first} {username.last}</h2>
			))}
		</div>
	)
}
