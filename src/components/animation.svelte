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
    animation: grow 6.5s infinite;
    animation-delay: 0s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.65, 0.05, 0.55, 1);
    animation-play-state: running;
  }

  .slower {
    animation: grow 6s infinite;
    animation-delay: 0s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.65, 0.05, 0.55, 1);
    animation-play-state: running;
  }

  .slow {
    animation: grow 5.5s infinite;
    animation-delay: 0s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.65, 0.05, 0.55, 1);
    animation-play-state: running;
  }

  .normal {
    animation: grow 4.9s infinite;
    animation-delay: 0s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.65, 0.05, 0.55, 1);
    animation-play-state: running;
  }

  .fast {
    animation: grow 3.5s infinite;
    animation-delay: 0s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.65, 0.05, 0.55, 1);
    animation-play-state: running;
  }

  .faster {
    animation: grow 3s infinite;
    animation-delay: 0s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.65, 0.05, 0.55, 1);
    animation-play-state: running;
  }

  .fastest {
    animation: grow 2.5s infinite;
    animation-delay: 0s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.65, 0.05, 0.55, 1);
    animation-play-state: running;
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
