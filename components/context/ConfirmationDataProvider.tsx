
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";
export interface IConfirmationContext {
  confirmData: CheckoutInput | undefined;
  setConfirmData: Dispatch<SetStateAction<CheckoutInput | undefined>> | undefined;
}

const ConfirmationContext = createContext<IConfirmationContext | undefined>(undefined);

export const ConfirmationProvider = ({ children }: { children: React.ReactNode }) => {
  const [confirmData, setConfirmData] = useState<CheckoutInput>();

  return (
    <ConfirmationContext.Provider value={{ confirmData, setConfirmData }}>
      {children}
    </ConfirmationContext.Provider>
  );
};

export default ConfirmationContext;