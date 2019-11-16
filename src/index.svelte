<script>
  import screenfull from "screenfull";

  let component;
  const toggle = () => {
    screenfull.toggle(component);
  };
</script>

<div bind:this={component}>
  <slot {toggle} />
</div>
