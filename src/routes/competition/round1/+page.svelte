<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	/**
	 * @type {number}
	 */
	let countdown;

	async function fetchCountdown() {
		const res = await fetch('/api/countdown');
		const { phase, countdown: serverCountdown } = await res.json();

		if (phase !== 'round1') {
			goto(`/${phase}`);
		} else {
			countdown = Math.max(serverCountdown / 1000, 0);
		}
	}

	onMount(() => {
		fetchCountdown();
		const interval = setInterval(fetchCountdown, 1000);
		return () => clearInterval(interval);
	});
</script>

<h1>Round 2 Countdown</h1>
<p>{countdown} seconds remaining</p>
<a href="https://www.kaggle.com">Go to Kaggle Competition</a>
