<script>
  import screenfull from "screenfull";

  let component;
  const onToggle = () => {
    screenfull.toggle(component.childNodes[0]);
  };

  const onRequest = () => {
    screenfull.request(component.childNodes[0]);
  };

  const onExit = () => {
    screenfull.exit(component.childNodes[0]);
  };
</script>

<div bind:this={component}>
  <slot {onToggle} {onRequest} {onExit} />
</div>
