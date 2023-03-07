import { cleanup, render, screen } from "@testing-library/react";
import Article from "../components/Article";
import DATA from "../MOCK_DATA.json";
import { Article as _article } from "../types";

cleanup();

describe("testing article component", () => {
  it("article renders correctly", () => {
    render(<Article {...DATA[0]} />);
    cleanup();
  });
  it("checks image rendering", () => {
    render(<Article {...DATA[0]} />);
    const imageEl = screen.getByTestId("image");
    expect(imageEl).toBeInTheDocument();

    cleanup();
  });
  it("checks renders of upvote icon", () => {
    render(<Article {...DATA[0]} />);
    const upvoteIconEl = screen.getByTestId("upvoteicon");
    expect(upvoteIconEl).toBeInTheDocument();

    cleanup();
  });
});