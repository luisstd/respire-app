<script lang="ts">
  export let speed;
  export let animations = [
    "slowest",
    "slower",
    "slow",
    "normal",
    "fast",
    "faster",
    "fastest",
  ];
</script>

<main>
  <div class="breathe {animations[speed]}" />
</main>

<style>
  main {
    display: grid;
    place-items: center;
  }

  .breathe {
    background-color: #9c6baa;
    border-radius: 100%;
    height: 13rem;
    width: 13rem;
    box-shadow: 5px 5px 60px 8px rgba(133, 91, 145, 0.45);
  }

  /* animation speed */
  .slowest {
    animation: grow ease-in-out 6.5s infinite;
    animation-direction: alternate;
  }

  .slower {
    animation: grow ease-in-out 6s infinite;
    animation-direction: alternate;
  }

  .slow {
    animation: grow ease-in-out 5.5s infinite;
    animation-direction: alternate;
  }

  .normal {
    animation: grow ease-in-out 4.5s infinite;
    animation-delay: 0s;
    animation-direction: alternate;
  }

  .fast {
    animation: grow ease-in-out 3.5s infinite;
    animation-direction: alternate;
  }

  .faster {
    animation: grow ease-in-out 3s infinite;
    animation-direction: alternate;
  }

  .fastest {
    animation: grow ease-in-out 2.5s infinite;
    animation-direction: alternate;
  }

  /* animation type */
  @keyframes grow {
    from {
      transform: scale(0.3);
      background-color: #885d94;
      border-radius: 100%;
    }

    to {
      transform: scale(1.8);
      background-color: #9c6baa;
    }
  }
</style>
