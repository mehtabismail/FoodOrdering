import { render, screen } from "@testing-library/react";
import { Header } from "../components";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";

describe("Header Component Test Cases", () => {
  it("Should Render Header with Text Home", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const homeText = screen.getByText("Home");
    expect(homeText).toBeInTheDocument();
  });
  it("Should Render Header with Text About", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const aboutText = screen.getByText("About");
    expect(aboutText).toBeInTheDocument();
  });
  it("Should Render Header with Text Cart", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartText = screen.getByText("Cart - 0");
    expect(cartText).toBeInTheDocument();
  });
  it("Should Render Header with Text Contact", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const contactText = screen.getByText("Contact");
    expect(contactText).toBeInTheDocument();
  });
  it("Should Render Header with Text Grocery", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const groceryText = screen.getByText("Grocery");
    expect(groceryText).toBeInTheDocument();
  });
});
