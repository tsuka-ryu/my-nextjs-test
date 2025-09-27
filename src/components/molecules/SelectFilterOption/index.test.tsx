import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { SelectFilterOption } from ".";

test("SelectFilterOptionが正しくレンダリングされる", async () => {
  const options = [
    { value: "option1", label: "オプション1" },
    { value: "option2", label: "オプション2" },
  ];

  const screen = render(
    <SelectFilterOption
      title="フィルター"
      selectProps={{ value: "option1", onChange: () => {} }}
      options={options}
    />
  );

  await expect.element(screen.getByLabelText("フィルター")).toBeInTheDocument();
  await expect.element(screen.getByRole("combobox")).toBeInTheDocument();
});

test("オプションが正しく表示される", async () => {
  const options = [
    { value: "option1", label: "オプション1" },
    { value: "option2", label: "オプション2" },
  ];

  const screen = render(
    <SelectFilterOption
      title="フィルター"
      selectProps={{ value: "option1", onChange: () => {} }}
      options={options}
    />
  );

  await expect.element(screen.getByText("オプション1")).toBeInTheDocument();
  await expect.element(screen.getByText("オプション2")).toBeInTheDocument();
});
