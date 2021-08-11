import App from "./App.svelte";
export let speed;

const app = new App({
  target: document.body,
  props: { speed },
});

export default app;
