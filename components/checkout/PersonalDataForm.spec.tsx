import { screen} from "@testing-library/react";
import PersonalDataForm from "./PersonalDataForm";
import { renderWithReactHookForm } from "../../utils/testing.helpers";

describe('PersonalDataForm', () => {
    describe('when rendering ', () => {
      it('should render a heading Step 1', () => {
        renderWithReactHookForm(<PersonalDataForm/>)
        const heading= screen.getByRole('heading', {'name': 'Step 1'})
        expect(heading).toBeInTheDocument();
      })
    }) 
})