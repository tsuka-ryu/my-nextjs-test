# Claude Code Project Notes

## Development Environment
- **Package Manager**: Use `bun` for all command execution (install, build, dev, etc.)
- **Testing Framework**: Use `vitest` and `vitest-browser-react`
  - Import pattern: `import { expect, test } from "vitest";`
  - Render pattern: `import { render } from "vitest-browser-react";`
  - Test pattern: Use `async` functions with `await expect.element()` assertions
  - Screen pattern: `const screen = render(<Component />); screen.getByRole(...)`

## Example Test Structure
```tsx
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Component } from ".";

test("description", async () => {
  const screen = render(<Component />);
  await expect.element(screen.getByRole("...")).toBeInTheDocument();
});
```