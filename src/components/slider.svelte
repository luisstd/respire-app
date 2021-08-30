<script lang="ts">
  import Fa from "svelte-fa";
  import { faPlus } from "@fortawesome/free-solid-svg-icons";
  import { faMinus } from "@fortawesome/free-solid-svg-icons";

  import DarkMode from "svelte-dark-mode";
  let theme;
  $: document.body.className = theme; // "dark" or "light

  export let speed = 3;
  export let animations = [
    "slowest",
    "slower",
    "slow",
    "normal",
    "fast",
    "faster",
    "fastest",
  ];

  function handleChange(e) {
    speed = e.srcElement.value;
  }

  function increaseSpeed() {
    if (speed < 6) {
      speed = speed + 1;
    }
  }

  function decreaseSpeed() {
    if (speed > 0) {
      speed = speed - 1;
    }
  }
</script>

<main>
  <DarkMode bind:theme />
  <button class="speedButton" on:click={decreaseSpeed}>
    <Fa icon={faMinus} style="font-size: 1.5rem;" />
  </button>
  <div class="input-wrapper">
    <input
      on:change={handleChange}
      id="speed"
      min="0"
      max="6"
      step="1"
      type="range"
      value={speed}
    />
    <label class="speed-label" for="speed">{animations[speed]}</label>
  </div>
  <button class="speedButton" on:click={increaseSpeed}>
    <Fa icon={faPlus} style="font-size: 1.5rem;" />
  </button>
</main>

<style>
  :global(.dark .speedButton) {
    background: #00080f;
    box-shadow: none;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  button {
    display: grid;
    place-items: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #fff7f0;
    box-shadow: 20px 20px 60px #999490, -20px -20px 60px #ffffff;
    border: none;
    cursor: pointer;
    font-weight: 900;
    color: #9c6baa;
  }

  .speed-label {
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: 1rem;
  }

  .input-wrapper {
    width: 45%;
  }

  /* range input styling */

  input[type="range"] {
    background: transparent;
    border: none;
    -webkit-appearance: none;
  }

  input[type="range"] {
    width: 100%;
    margin: 7.3px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    background: #333333;
    border: 0;
    border-radius: 5px;
    width: 100%;
    height: 11.4px;
    cursor: pointer;
  }

  input[type="range"]::-webkit-slider-thumb {
    margin-top: -7.3px;
    width: 26px;
    height: 26px;
    background: #9c6baa;
    border: 0;
    border-radius: 15px;
    cursor: pointer;
    -webkit-appearance: none;
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #333333;
  }

  input[type="range"]::-moz-range-track {
    background: #333333;
    border: 0;
    border-radius: 5px;
    width: 100%;
    height: 11.4px;
    cursor: pointer;
  }
  input[type="range"]::-moz-range-thumb {
    width: 26px;
    height: 26px;
    background: #9c6baa;
    border: 0;
    border-radius: 15px;
    cursor: pointer;
  }

  input[type="range"]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 8.2px 0;
    color: transparent;
    width: 100%;
    height: 11.4px;
    cursor: pointer;
  }

  input[type="range"]::-ms-fill-lower {
    background: #333333;
    border: 0;
    border-radius: 10px;
  }

  input[type="range"]::-ms-fill-upper {
    background: #333333;
    border: 0;
    border-radius: 10px;
  }

  input[type="range"]::-ms-thumb {
    width: 26px;
    height: 26px;
    background: #9c6baa;
    border: 0;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }

  input[type="range"]:focus::-ms-fill-lower {
    background: #333333;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #333333;
  }

  input[type="range"] {
    width: 100%;
    margin: 7.3px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    background: #333333;
    border: 0;
    border-radius: 5px;
    width: 100%;
    height: 11.4px;
    cursor: pointer;
  }
  input[type="range"]::-webkit-slider-thumb {
    margin-top: -7.3px;
    width: 26px;
    height: 26px;
    background: #9c6baa;
    border: 0;
    border-radius: 15px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #333333;
  }
  input[type="range"]::-moz-range-track {
    background: #333333;
    border: 0;
    border-radius: 5px;
    width: 100%;
    height: 11.4px;
    cursor: pointer;
  }
  input[type="range"]::-moz-range-thumb {
    width: 26px;
    height: 26px;
    background: #9c6baa;
    border: 0;
    border-radius: 15px;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 8.2px 0;
    color: transparent;
    width: 100%;
    height: 11.4px;
    cursor: pointer;
  }
  input[type="range"]::-ms-fill-lower {
    background: #333333;
    border: 0;
    border-radius: 10px;
  }
  input[type="range"]::-ms-fill-upper {
    background: #333333;
    border: 0;
    border-radius: 10px;
  }
  input[type="range"]::-ms-thumb {
    width: 26px;
    height: 26px;
    background: #9c6baa;
    border: 0;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #333333;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #333333;
  }
</style>
