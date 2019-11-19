<script>
  import SvelteFullscreen from "svelte-fullscreen";
</script>

<style>
  main {
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 100%;
  }

  div {
    align-items: center;
    background-color: #417b5a;
    display: flex;
    flex-flow: column wrap;
    height: 120px;
    justify-content: center;
    margin: 10px;
    width: 300px;
  }

  h1 {
    color: #1f2041;
    text-transform: uppercase;
  }

  img {
    cursor: pointer;
    width: 50%;
  }

  .buttonImage {
    border: none;
    background: transparent;
  }

  .buttonImage:focus {
    outline: none;
  }
</style>

<main>
  <h1>Svelte Fullscreen</h1>
  <SvelteFullscreen let:onRequest let:onExit>
    <div>
      <button on:click={() => onRequest()}>FullScreen</button>
      <button on:click={() => onExit()}>Screen</button>
    </div>
  </SvelteFullscreen>

  <SvelteFullscreen let:onToggle on:change={() => console.log('change')}>
    <button class="buttonImage" on:click={() => onToggle()}>
      <img
        alt="Fullscreen"
        src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2" />
    </button>
  </SvelteFullscreen>
</main>
