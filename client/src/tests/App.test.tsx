import { render } from "@testing-library/react";
import App from "../App.tsx";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  it("renders the home page", () => {
    const { getByText } = render(<MemoryRouter><App/></MemoryRouter>);

    expect(getByText("Welcome to the Restwise")).toBeInTheDocument();
  });

  it("renders the about page", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/about"]}><App/></MemoryRouter>,
    );

    expect(getByText(/About/)).
      toBeInTheDocument();
  });

  it("renders the contact page", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/contact"]}><App/></MemoryRouter>,
    );

    expect(getByText(/Contact/)).
      toBeInTheDocument();
  });

  it("renders the login page", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/login"]}><App/></MemoryRouter>,
    );

    expect(getByText("Login")).toBeInTheDocument();
  });

  it("renders the signup page", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/signup"]}><App/></MemoryRouter>,
    );

    expect(getByText("Sign up")).toBeInTheDocument();
  });
});