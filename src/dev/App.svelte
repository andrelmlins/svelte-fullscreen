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
    padding: 16px;
    box-sizing: border-box;
  }

  h1 {
    margin-bottom: 0px;
    text-align: center;
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
    height: 400px;
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

  .image {
    background-image: url("https://spguia.melhoresdestinos.com.br/system/fotos_local/fotos/26013/show/praia-do-aventureiro.jpg");
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image h1 {
    color: white;
    text-shadow: 1px 1px 2px black;
  }

  @media screen and (max-width: 800px) {
    .root {
      flex-direction: column;
    }

    .card {
      max-width: 100%;
      margin-right: 0px;
      margin-bottom: 16px;
    }
  }
</style>

<main>
  <h1>Svelte Fullscreen</h1>
  <h4>Component that performs fullscreen in DOM Elements</h4>
  <br />
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
      <Fullscreen let:onToggle>
        <div class="image" on:click={() => onToggle()}>
          <h1>Click Here</h1>
        </div>
      </Fullscreen>
    </div>
  </div>
</main>
