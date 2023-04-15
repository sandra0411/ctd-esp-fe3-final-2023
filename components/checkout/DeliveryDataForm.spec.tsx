import { screen} from "@testing-library/react";
import DeliveryDataForm from "./DeliveryDataForm";
import { renderWithReactHookForm } from "../../utils/testing.helpers";

describe('DeliveryDataForm', () => {
    describe('when rendering ', () => {
      it('should render a heading Step 2', () => {
        renderWithReactHookForm(<DeliveryDataForm/>)
        const heading= screen.getByRole('heading', {'name': 'Step 2'})
        expect(heading).toBeInTheDocument();
      })
    }) 
})