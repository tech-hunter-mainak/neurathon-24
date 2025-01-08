<script>
  export let data; // Required for layout in SvelteKit
</script>

{#if data.currentPage === 3}
  <!-- Show a layout only for the main page -->
  <nav>
    <a href="/">Home</a>
    <a href="/main">Hackathon</a>
    <a href="https://kaggle.com" target="_blank">Kaggle Competition</a>
  </nav>
{/if}

<slot /> <!-- Renders the current page -->

{#if data.currentPage === 3}
  <!-- Footer only for the main page -->
  <footer>
    <p>© 2025 Hackathon Event. All rights reserved.</p>
  </footer>
{/if}

<style>
  nav {
    background-color: #333;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav a {
    text-decoration: none;
    color: lightblue;
    margin: 0 1rem;
  }
  footer {
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f4f4f4;
    font-size: 0.9rem;
  }
</style>
