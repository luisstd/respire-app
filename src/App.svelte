<script lang="ts">
  import Header from "./components/header.svelte";
  import Slider from "./components/slider.svelte";
  import Animation from "./components/animation.svelte";
  export let speed;
</script>

<svelte:head>
  <title>Respire - Breathing App</title>
</svelte:head>

<main>
  <Header />
  <Animation {speed} />
  <h2>Breathe with the circle</h2>
  <Slider bind:speed />
</main>

<style>
  :global(body) {
    padding: 0px;
    background-color: #fff2f0;
  }

  main {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    text-align: center;
  }

  h2 {
    font-family: "Work Sans", sans-serif;
    font-size: 1.5rem;
  }
</style>
