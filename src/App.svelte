<script lang="ts">
  import Header from "./components/header.svelte";
  import Slider from "./components/slider.svelte";
  import Animation from "./components/animation.svelte";
  export let speed;
</script>

<main>
  <Header />
  <Animation {speed} />
  <h2>Breathe with the circle</h2>
  <Slider bind:speed />
</main>

<style>
  :global(body) {
    padding: 0px;
    background-color: var(--bg-color);
  }

  :root {
    --bg-color: #fff2f0;
    --text-color: #514444;
    --button-color: #9c6baa;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #00080f;
      --text-color: #aebbbb;
      --button-color: #9c6baa;
    }
  }

  main {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    text-align: center;
    color: var(--text-color);
  }

  h2 {
    font-family: "Work Sans", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }
</style>
