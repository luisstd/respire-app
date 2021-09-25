<script lang="ts">
  import Header from "./components/header.svelte";
  import Slider from "./components/slider.svelte";
  import Animation from "./components/animation.svelte";
  import MetaTags from "svelte-meta-tags";
  export let speed;
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Respire - Breathing App</title>
  <meta name="title" content="Respire - Breathing App" />
  <meta
    name="description"
    content="Respire is a basic tool for breathing exercises. Simply adjust your breath to the circle."
  />

  <!-- Open Graph Tags -->
  <meta property="og:title" content="Respire - Breathing App" />
  <meta
    property="og:description"
    content="Respire is a basic tool for breathing exercises. Simply adjust your breath to the circle."
  />
  <meta
    property="og:image"
    content="https://www.respire.site/img/preview.png"
  />
  <meta property="og:url" content="http://www.respire.site" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.respire.site/" />
  <meta property="og:title" content="Respire - Breathing App" />
  <meta
    property="og:description"
    content="Respire is a basic tool for breathing exercises. Simply adjust your breath to the circle."
  />

  <!-- Twitter -->
  <meta property="twitter:url" content="https://www.respire.site/" />
  <meta property="twitter:title" content="Respire - Breathing App" />
  <meta
    property="twitter:description"
    content="Respire is a basic tool for breathing exercises. Simply adjust your breath to the circle."
  />
  <meta name="twitter:card" content="summary_large_image" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@600;800&display=swap"
    rel="stylesheet"
  />
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
