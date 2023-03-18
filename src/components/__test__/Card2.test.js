import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "../Card";
import "@testing-library/jest-dom";

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

  await waitFor(
    () => {
      const loadingMessage = screen.getByText(/loading/i);
      console.log("loadingMessage", loadingMessage);
      expect(loadingMessage).toBeInTheDocument();
    },
    { timeout: 10000 }
  );

  jest.setTimeout(5000);
});
