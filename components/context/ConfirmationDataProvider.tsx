
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { CheckoutInput, defValCheckInput } from "dh-marvel/features/checkout/checkout.types";
export interface IConfirmationContext {
  confirmData: CheckoutInput;
  setConfirmData: Dispatch<SetStateAction<CheckoutInput>>;
}

const defaultValues= {
  confirmData: defValCheckInput,
  setConfirmData:() => console.log('')
}

const ConfirmationContext = createContext<IConfirmationContext>(defaultValues);

export const ConfirmationProvider = ({ children }: { children: React.ReactNode }) => {
  const [confirmData, setConfirmData] = useState<CheckoutInput>(defValCheckInput);

  return (
    <ConfirmationContext.Provider value={{ confirmData, setConfirmData }}>
      {children}
    </ConfirmationContext.Provider>
  );
};

export default ConfirmationContext;