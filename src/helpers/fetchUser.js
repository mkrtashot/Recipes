export default function fetchDataMethodPost(url, obj) {
	return fetch(`http://localhost:4000/${url}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(obj),
	});
}
