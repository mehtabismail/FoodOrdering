import { render, screen } from "@testing-library/react";
import { Contact } from "../components";

describe("Contact Us Page Test Cases", () => {
  it("Should Render Contact Page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should Load contact us text", () => {
    render(<Contact />);
    const contactUsText = screen.getByText(
      "Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know."
    );
    expect(contactUsText).toBeInTheDocument();
  });

  it("Should Load submit button in Contact Page", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should Check submit button text in Contact Page", () => {
    render(<Contact />);
    const buttonText = screen.getByText("Send message");
    expect(buttonText).toBeInTheDocument();
  });

  it("Should Load input name inside textinput componnet", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name@flowbite.com");
    expect(inputName).toBeInTheDocument();
  });

  it("Should Load 3 input boxes", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(3);
  });
});
