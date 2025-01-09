export async function load({ fetch }) {
	const res = await fetch('/api/countdown');
	const { phase } = await res.json();

	if (phase !== 'round1') {
		throw new Response(null, {
			status: 404,
			headers: { Location: `/${phase}` }
		});
	}

	return {};
}
