<script>
  import Countdown1 from "$lib/Countdown1.svelte";
  import Countdown2 from "$lib/Countdown2.svelte";
  import MainPage from "$lib/MainPage.svelte";

  let currentPage = 3;

  // Functions to transition between pages
  function goToPage2() {
    currentPage = 2;
  }

  function goToMainPage() {
    currentPage = 3;
  }
</script>

<layout currentPage={currentPage}>
  {#if currentPage === 1}
    <Countdown1 on:done={goToPage2} />
  {:else if currentPage === 2}
    <Countdown2 on:done={goToMainPage} />
  {:else}
    <MainPage />
  {/if}
</layout>
