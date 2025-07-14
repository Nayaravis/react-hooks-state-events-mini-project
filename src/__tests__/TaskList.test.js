import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";
import { TASKS } from "../data";

test("displays all items when initially rendered", () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll(".task")).toHaveLength(TASKS.length);
});
