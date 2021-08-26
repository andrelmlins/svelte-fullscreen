import { render } from "@testing-library/svelte";
import SvelteFullscreen from "./Fullscreen.svelte";

test("shows proper heading when rendered", () => {
  const { container } = render(SvelteFullscreen);

  expect(container.firstChild).not.toBe(null);
});
