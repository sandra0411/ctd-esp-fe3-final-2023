import { screen} from "@testing-library/react";
import PaymentDataForm from "./PaymentDataForm";
import { renderWithReactHookForm } from "../../utils/testing.helpers";

describe('PaymentDataForm', () => {
    describe('when rendering ', () => {
      it('should render a heading Step 3', () => {
        renderWithReactHookForm(<PaymentDataForm/>)
        const heading= screen.getByRole('heading', {'name': 'Step 3'})
        expect(heading).toBeInTheDocument();
      })
    }) 
})