import {render, screen} from "@testing-library/react";
import { renderWithReactHookForm } from "../../utils/testing.helpers";
import ControlledTextInput from "./ControlledTextInput";

describe('ControlTextInput', () => {
    describe('when rendering without defaultValues', () => {
      it('should render a textbox', () => {
        renderWithReactHookForm(<ControlledTextInput name='email' label="Email"/>)
        const textbox= screen.getByRole('textbox', {'name': 'Email'})
        expect(textbox).toBeInTheDocument();
        expect(textbox).toHaveValue('')
      })
    }) 
})