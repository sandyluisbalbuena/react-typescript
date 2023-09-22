import { personProps } from "./Person.types"

export default function Person({name}: personProps) {
	return (
		<div>{ name.first } { name.last }</div>
	)
}
