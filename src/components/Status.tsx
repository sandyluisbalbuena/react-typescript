
type StatusProps = {
	status: 'loading' | 'success' | 'error'
}


export default function Status({status}: StatusProps) {
	let message

	if(status === 'loading'){
		message = 'Loading'
	}else if(status === 'success'){
		message = 'Data fetch successfully'
	}else{
		message = 'Error fetching data'
	}



	return (
		<div>
			<h2>Status - { message }</h2>
		</div>
	)
}
