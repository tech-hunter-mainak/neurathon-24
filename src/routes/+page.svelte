<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import About from '../components/About.svelte';
	import Hero from '../components/Hero.svelte';
	import Timeline from '../components/Timeline.svelte';
	import FaQs from '../components/FAQs.svelte';

	async function fetchCountdown() {
		const res = await fetch('api/countdown');
		const { phase } = await res.json();

		// if(phase !== 'main'){
		//   goto(`/${phase}`);
		// }
	}

	onMount(fetchCountdown);
</script>

<Hero />
<About />
<Timeline />
<FaQs />
