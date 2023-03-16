import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "../Card";
import "@testing-library/jest-dom";

// test that the component renders without errors
test("renders Card component", () => {
  render(
    <BrowserRouter>
      <Card />
    </BrowserRouter>
  );
});

// test that the component displays the correct image and name
test("displays the correct image and name", async () => {
  const fakeData = {
    id: 1,
    image: "http://localhost/fake-image-url",
    name: "Fake Name",
    country: "Fake Country",
  };
  render(
    <BrowserRouter>
      <Card
        id={fakeData.id}
        image={fakeData.image}
        name={fakeData.name}
        country={fakeData.country}
      />
    </BrowserRouter>
  );

  const image = screen.getByAltText(fakeData.name);
  expect(image.src).toBe(fakeData.image);

  const name = screen.getByText(fakeData.name);
  expect(name).toBeInTheDocument();
});

// Test that the component displays the correct flag

test("displays the correct flag", async () => {
  const fakeData = {
    id: 1,
    image: "http://localhost/fake-image-url",
    name: "Fake Name",
    country: "United States of America",
  };
  render(
    <BrowserRouter>
      <Card
        id={fakeData.id}
        image={fakeData.image}
        name={fakeData.name}
        country={fakeData.country}
      />
    </BrowserRouter>
  );

  await waitFor(() => {
    const flag = screen.getByAltText(fakeData.country);
    expect(flag).toBeInTheDocument();
  });
});

// test that the component displays a loading message while waiting for the API response

test("displays a loading message while waiting for API response", async () => {
  const fakeData = {
    id: 1,
    image: "http://localhost/fake-image-url",
    name: "Fake Name",
    country: "Fake Country",
  };

  jest.setTimeout(10000);
  render(
    <BrowserRouter>
      <Card
        id={fakeData.id}
        image={fakeData.image}
        name={fakeData.name}
        country={fakeData.country}
      />
    </BrowserRouter>
  );

  await waitFor(() => {
    const loadingMessage = screen.getByText(/loading.../i);
    expect(loadingMessage).toBeInTheDocument();
  });

  jest.setTimeout(5000);
});

// Test that the component displays an error message when the API call fails
test("displays an error message when API call fails", async () => {
  const fakeData = {
    id: 1,
    image: "http://localhost/fake-image-url",
    name: "Fake Name",
    country: "Invalid Country Name",
  };
  render(
    <BrowserRouter>
      <Card
        id={fakeData.id}
        image={fakeData.image}
        name={fakeData.name}
        country={fakeData.country}
      />
    </BrowserRouter>
  );

  // Wait for error message to display
  await waitFor(() => {
    const errorMessage = screen.getByText(/an error occurred/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
