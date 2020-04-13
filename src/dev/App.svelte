<script>
  import Fullscreen from "../lib/Fullscreen.svelte";
</script>

<style>
  main {
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 100%;
    min-height: 100%;
  }

  h1 {
    color: #1f2041;
    text-transform: uppercase;
    margin-bottom: 0px;
  }

  img {
    cursor: pointer;
    width: 50%;
  }

  .root {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .card {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    width: 400px;
    min-width: 40%;
    max-width: 40%;
    background-color: white;
    box-sizing: border-box;
    min-height: 400px;
    max-height: 400px;
    overflow-x: scroll;
    padding: 16px;
    box-sizing: border-box;
    margin-right: 40px;
  }

  .card:last-child {
    margin-right: 0px;
  }
  .container-fullscreen {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f9a825;
  }

  img {
    width: 100%;
    height: auto;
  }
</style>

<main>
  <h1>Svelte Fullscreen</h1>
  <h4>Component that performs fullscreen in DOM Elements</h4>
  <div class="root">
    <div class="card">
      <Fullscreen let:onRequest let:onExit>
        <div class="container-fullscreen">
          <button on:click={() => onRequest()}>FullScreen</button>
          <button on:click={() => onExit()}>Screen</button>
        </div>
      </Fullscreen>
    </div>
    <div class="card">
      <Fullscreen let:onToggle on:change={() => console.log('change')}>
        <img
          on:click={() => onToggle()}
          alt="Fullscreen"
          src="https://spguia.melhoresdestinos.com.br/system/fotos_local/fotos/26013/show/praia-do-aventureiro.jpg" />
      </Fullscreen>
    </div>
  </div>
</main>
