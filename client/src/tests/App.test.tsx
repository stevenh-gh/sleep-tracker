import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App", () => {
  it("renders the home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App/>
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "Welcome to the Restwise" })).
      toBeInTheDocument();
  });

  it("renders the about page", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App/>
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
  });

  it("renders the contact page", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <App/>
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "Contact" })).
      toBeInTheDocument();
  });

  it("renders the login page", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App/>
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();
  });

  it("renders the signup page", () => {
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <App/>
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "Sign up" })).
      toBeInTheDocument();
  });
});
