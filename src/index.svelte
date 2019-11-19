<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import screenfull from "screenfull";

  let component;

  onMount(() => {
    screenfull.on("change", () => dispatch("onChange"));
    screenfull.on("error", () => dispatch("onError"));
  });

  const onToggle = () => {
    screenfull.toggle(component.childNodes[0]);
  };

  const onRequest = () => {
    screenfull.request(component.childNodes[0]);
  };

  const onExit = () => {
    screenfull.exit(component.childNodes[0]);
  };

  onDestroy(() => {
    screenfull.off("change", null);
    screenfull.off("error", null);
  });
</script>

<div bind:this={component}>
  <slot {onToggle} {onRequest} {onExit} />
</div>
