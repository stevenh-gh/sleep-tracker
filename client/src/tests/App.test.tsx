import { render } from "@testing-library/react";
import App from "../App.tsx";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {

  it("can link to about", () => {
    const { getByText } = render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>,
    );
    const link = getByText(/About/);
    expect(link).toHaveAttribute("href", "/about");
  });

  it("can link to contact", () => {
    const { getByText } = render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>,
    );
    const link = getByText(/Contact/);
    expect(link).toHaveAttribute("href", "/contact");
  });

  it("can link to login", () => {
    const { getByText } = render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>,
    );
    const link = getByText(/Log in/);
    expect(link).toHaveAttribute("href", "/login");
  });

  it("can link to signup", () => {
    const { getByText } = render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>,
    );
    const link = getByText(/Sign up/);
    expect(link).toHaveAttribute("href", "/signup");
  });
});