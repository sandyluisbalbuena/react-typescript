type OscarProps = {
	children: React.ReactNode
}

export default function Oscar({children}: OscarProps) {
	return (
		<h2>{ children }</h2>
		// <div>Oscar goes to Leonardo Dicaprio!</div>
	)
}
