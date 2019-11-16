<script>
  import screenfull from "screenfull";

  let component;
  const onToggle = () => {
    screenfull.toggle(component);
  };

  const onRequest = () => {
    screenfull.request(component);
  };

  const onExit = () => {
    screenfull.exit(component);
  };
</script>

<div bind:this={component}>
  <slot {onToggle} {onRequest} {onExit} />
</div>
