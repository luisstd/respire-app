<script lang="ts">
  import Header from "./components/header.svelte";
  import Slider from "./components/slider.svelte";
  import Animation from "./components/animation.svelte";
  import MetaTags from "svelte-meta-tags";
  export let speed;
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Respire - Breathing app</title>
  <meta name="title" content="Respire - Breathing app" />
  <meta
    name="description"
    content="Respire is a basic tool for breathing exercises. Simply adjust your breath to the circle."
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.respire.site/" />
  <meta property="og:title" content="Respire - Breathing app" />
  <meta
    property="og:description"
    content="Respire is a basic tool for breathing exercises. Simply adjust your breath to the circle."
  />
  <meta property="og:image" content="" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://www.respire.site/" />
  <meta property="twitter:title" content="Respire - Breathing app" />
  <meta
    property="twitter:description"
    content="Respire is a basic tool for breathing exercises. Simply adjust your breath to the circle."
  />
  <meta property="twitter:image" content="" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@600;800&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<MetaTags
  title="Respire - Breathing app"
  description="Respire is a basic tool for breathing exercises. Simply adjust your breath to the circle."
  canonical="https://www.respire.site/"
  openGraph={{
    url: "https://www.respire.site/",
    title: "Respire - Breathing app",
    description:
      "Respire is a basic tool for breathing exercises. Simply adjust your breath to the circle.",
    images: [
      {
        url: "./img/preview-01.png",
        width: 800,
        height: 600,
        alt: "Respire App",
      },
      {
        url: "./img/preview-02.png",
        width: 900,
        height: 800,
        alt: "Respire App",
      },
    ],
    site_name: "Respire App",
  }}
/>

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
    font-weight: 800;
  }
</style>
