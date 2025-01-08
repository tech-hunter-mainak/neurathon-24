<script>
  import { writable, derived } from "svelte/store";
  import { createEventDispatcher } from "svelte";

  const eventDate = new Date("2025-01-31T00:00:00Z").getTime();
  const timeLeft = writable(eventDate - Date.now());
  const dispatcher = createEventDispatcher();

  const countdown = derived(timeLeft, ($timeLeft) => {
    const days = Math.floor($timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(($timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor(($timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor(($timeLeft / 1000) % 60);
    return { days, hours, minutes, seconds };
  });

  const timer = setInterval(() => {
    timeLeft.set(eventDate - Date.now());
    if (eventDate - Date.now() <= 0) {
      clearInterval(timer);
      dispatcher("done");
    }
  }, 1000);
</script>

<h1>Countdown to Event</h1>
<p>
  {#if $countdown.days >= 0}
    {$countdown.days} Days, {$countdown.hours} Hours, {$countdown.minutes} Minutes, {$countdown.seconds} Seconds
  {:else}
    The event has started!
  {/if}
</p>
