export const GET = async () => {
	const now = new Date().getTime();

	const phase1End = new Date('2025-01-10T12:00:00Z').getTime();
	const phase2End = new Date('2025-01-17T12:00:00Z').getTime();

	let phase;
	let countdown;

	if (now < phase1End) {
		phase = 'competition';
		countdown = phase1End - now;
	} else if (now < phase2End) {
		phase = 'round1';
		countdown = phase2End - now;
	} else {
		phase = 'main';
		countdown = 0;
	}

	return new Response(JSON.stringify({ phase, countdown }), {
		headers: { 'Content-Type': 'application/json' }
	});
};
