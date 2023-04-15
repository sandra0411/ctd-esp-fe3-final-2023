import { render, screen } from "@testing-library/react";
import CharacterDetail from "dh-marvel/pages/character/[id].page";

const characterMock = {
  id: 1234,
  name: "Spider-Man (Peter Parker)",
  description: "I have a description!",
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
    extension: "jpg",
  }, 
};

const characterWithoutDescriptionMock = {
    id: 1234,
    name: "Spider-Man (Peter Parker)",
    description: "",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
      extension: "jpg",
    }, 
  };

describe("Character Detail", () => {
  describe("when rendering the Character Detail component", () => {
    it("should render the name of the character", () => {
      render(<CharacterDetail character={characterMock} />);
      const characterName = screen.getByRole('heading', {name:/peter parker/i});
      expect(characterName).toBeInTheDocument();
    });
    it("should render the description of the character", () => {
        render(<CharacterDetail character={characterMock} />);
        const characterDescription = screen.getByText("I have a description!");
        expect(characterDescription).toBeInTheDocument();
    });   
    it("should render a message saying it contains no description ", () => {
        render(<CharacterDetail character={characterWithoutDescriptionMock} />);
        const characterWithoutDescription = screen.getByText("Description coming soon");
        expect(characterWithoutDescription).toBeInTheDocument();
    });   

  });
});