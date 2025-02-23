import { render, screen } from "@testing-library/react";
import App from "../App.tsx";

describe("App", () => {
  it("should render Vite + React", () => {
    render(<App/>);
    const text = screen.getByText("Vite + React");
    expect(text).toBeInTheDocument();
  });
});