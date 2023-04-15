import { render, screen } from "@testing-library/react";
import ConfirmationPage from "./index.page";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const purchase = JSON.stringify({
    data: {
        customer: {
            name: 'Sandra',
            lastname: 'Divan',
            address: { address1: 'Peperoni 222', state: 'Cordoba' }
        },
        order: {
            name: 'Spiderman',
            image: "http://spiderman.jpg",
            price: '30'
    
        }
    }
    
});


jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/",
            pathname: "",
            query: { purchaseInfo: purchase },
            asPath: "",
            push: jest.fn(),
        };
    },
}));

describe("Purchase Confirmation Page", () => {
    describe("when rendering default", () => {
        it("should render the success message", () => {
            useRouter.mockImplementationOnce(() => ({
                query: { purchaseInfo: purchase },
            }));
            render(<ConfirmationPage />);
            expect(
                screen.getByText(/Enjoy your purchase!/i)
            ).toBeInTheDocument();
        });
    });
});