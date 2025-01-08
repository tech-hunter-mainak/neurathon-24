<script>
  import { writable, derived } from "svelte/store";
  import { createEventDispatcher } from "svelte";

  const round2Date = new Date("2025-02-01T10:00:00Z").getTime();
  const timeLeft = writable(round2Date - Date.now());
  const dispatcher = createEventDispatcher();

  const countdown = derived(timeLeft, ($timeLeft) => {
    const days = Math.floor($timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(($timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor(($timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor(($timeLeft / 1000) % 60);
    return { days, hours, minutes, seconds };
  });

  const timer = setInterval(() => {
    timeLeft.set(round2Date - Date.now());
    if (round2Date - Date.now() <= 0) {
      clearInterval(timer);
      dispatcher("done");
    }
  }, 1000);
</script>

<h1>Kaggle Competition Countdown</h1>
<p>
  {#if $countdown.days >= 0}
    {$countdown.days} Days, {$countdown.hours} Hours, {$countdown.minutes} Minutes, {$countdown.seconds} Seconds
  {:else}
    Round 2 has started!
  {/if}
</p>

<a href="https://kaggle.com" target="_blank">Join the Competition</a>
