import ConfirmationContext, {IConfirmationContext} from "dh-marvel/components/context/ConfirmationDataProvider";
import { useContext } from "react";

const useConfirmation = (): IConfirmationContext => {
    return useContext(ConfirmationContext);
}

export default useConfirmation;