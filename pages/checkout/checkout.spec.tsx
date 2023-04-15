import { render, screen } from "@testing-library/react";
import CheckOutPage from "./index.page";


const comicMock = {
    id: 1234,
    title: 'The best spiderman',
    name: "Spider-Man (Peter Parker)",
    description: "This is my description!",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
      extension: "jpg",
    }, 
    price: 35,
    oldPrice: 40,
    stock: 2,
    characters: {
        items: [{resourceURI: 'http://hulk.jpg',
            name: 'Hulk'}]
    }
};


describe("Checkout Page", () => {
    describe("when rendering default", () => {
        it("should render the title", () => {
            render(<CheckOutPage comic={comicMock} />);
            const title= screen.getByText('The best spiderman')
            expect(title).toBeInTheDocument();
        });
    });
});