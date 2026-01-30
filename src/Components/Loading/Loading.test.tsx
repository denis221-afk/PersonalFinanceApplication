import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading component", () => {
  it("renders loading image", () => {
    render(<Loading />);
    const img = screen.getByAltText("iconLoading");
    expect(img).toBeInTheDocument();
  });
});
