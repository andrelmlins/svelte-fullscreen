<script>
  import screenfull from "screenfull";

  let component;
  const toggle = () => {
    screenfull.toggle(component);
  };

  const request = () => {
    screenfull.request(component);
  };
</script>

<div bind:this={component}>
  <slot {toggle} {request} />
</div>
