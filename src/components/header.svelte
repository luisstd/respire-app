<script lang="ts">
  import Fa from "svelte-fa";
  import { faMoon } from "@fortawesome/free-solid-svg-icons";
  import { faSun } from "@fortawesome/free-solid-svg-icons";
  import { faBars } from "@fortawesome/free-solid-svg-icons";
  import DarkMode from "svelte-dark-mode";

  let theme;

  $: switchTheme = theme === "dark" ? "light" : "dark";
  $: document.body.className = theme; // "dark" or "light
</script>

<main>
  <DarkMode bind:theme />
  <div class="container">
    <h1>Respire</h1>
    <nav class="menu-container">
      <button class="menuButton" on:click={() => (theme = switchTheme)}>
        <Fa icon={faMoon} style="font-size: 1.6rem;" /></button
      >
      <button class="menuButton"
        ><Fa icon={faBars} style="font-size: 2rem;" /></button
      >
    </nav>
  </div>
</main>

<style>
  :global(.dark) {
    background: #00080f;
    color: #aebbbb;
  }

  :global(.dark .menuButton) {
    filter: invert(100%);
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  .container {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: baseline;
    gap: 1rem;
    margin-top: -3.5rem;
  }

  .menu-container {
    display: flex;
    flex-flow: row;
    align-content: space-around;
    align-items: center;
    gap: 1.5rem;
    cursor: pointer;
  }

  h1 {
    font-family: "Baloo 2";
    font-size: 2.5rem;
  }
</style>
