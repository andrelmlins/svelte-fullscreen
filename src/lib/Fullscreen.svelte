<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import screenfull from "screenfull";

  let component;
  const dispatch = createEventDispatcher();

  onMount(() => {
    screenfull.on("change", () => dispatch("change"));
    screenfull.on("error", () => dispatch("error"));
  });

  const onToggle = () => {
    screenfull.toggle(component.nextElementSibling);
  };

  const onRequest = () => {
    screenfull.request(component.nextElementSibling);
  };

  const onExit = () => {
    screenfull.exit(component.nextElementSibling);
  };

  onDestroy(() => {
    screenfull.off("change", null);
    screenfull.off("error", null);
  });
</script>

<div style="width:0; height:0" bind:this={component} />
<slot {onToggle} {onRequest} {onExit} />
