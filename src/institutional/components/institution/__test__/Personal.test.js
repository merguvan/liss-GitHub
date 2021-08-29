import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Personal from "../personalInfo/index";
import store from "../../../../store";
import { Provider } from "react-redux";

const MockPersonal = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Personal />
      </BrowserRouter>
    </Provider>
  );
};

test("should render a heading", () => {
  render(<MockPersonal />);
  const headerElement = screen.getByRole("heading", {
    name: "Personal Information - 1",
  });

  expect(headerElement).toBeInTheDocument();
});

test("should render modal Header", () => {
  render(<MockPersonal />);
  const headerElement = screen.getByTestId("contained-modal-title-vcenter");

  expect(headerElement).toBeVisible();
});

test("should contain p tag", () => {
  render(<MockPersonal />);
  const headerElement = screen.getByTestId("contained-modal-title-vcenter");

  expect(headerElement).toContainHTML("p");
});
test("should contain title", () => {
  render(<MockPersonal />);
  const headerElement = screen.getByTestId("title");

  expect(headerElement).toHaveTextContent("Title");
});

test("should contain first name", () => {
  render(<MockPersonal />);
  const headerElement = screen.getByTestId("firstName");

  expect(headerElement.innerHTML).toBe("First Name");
});
