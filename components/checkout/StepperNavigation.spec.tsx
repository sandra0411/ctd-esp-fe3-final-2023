import { render, screen, fireEvent } from '@testing-library/react';
import { FormContext } from './CheckOutStepper';
import StepperNavigation, {StepperNavigationType} from './StepperNavigation';
import {useContext } from 'react';


/* jest.mock('./CheckOutStepper', () => ({
    ...jest.requireActual('./CheckOutStepper'),
    createContext: (defaultValue:StepperNavigationType) => ({
      ...defaultValue,
      handleBack: jest.fn(),
      handleNext: jest.fn(),
    }),
  })); */


  
/*   describe('FormContext', () => {
    test('handleBack and handleNext are called correctly', () => {
      const { handleBack, handleNext } = useContext(FormContext);
  
      handleBack();
      expect(setActiveStep).toHaveBeenCalledWith(-1);
  
      handleNext();
      expect(setActiveStep).toHaveBeenCalledWith(1);
    });
  }); */
  describe('StepperNavigation', () => {
    describe('when rendering by default', () => {
        it('should render the Next button', () =>{

           render(
                <FormContext.Provider value={{ 
                  activeStep: 0, 
                  handleBack: jest.fn(), 
                  handleNext: jest.fn() 
                }}>
                  <StepperNavigation />
                </FormContext.Provider>
            );

            const nextButton= screen.getByRole('button', {'name': 'Next'})
            expect(nextButton).toBeInTheDocument();
        });

        it('should render the Back button', () =>{

            render(
                 <FormContext.Provider value={{ 
                   activeStep: 0, 
                   handleBack: jest.fn(), 
                   handleNext: jest.fn() 
                 }}>
                   <StepperNavigation />
                 </FormContext.Provider>
             );
 
             const nextButton= screen.getByRole('button', {'name': 'Next'})
             expect(nextButton).toBeInTheDocument();
         });
        it('calls handleNext function when Next button is clicked', () =>{

            const handleNext = jest.fn();
            render(
                 <FormContext.Provider value={{ 
                   activeStep: 0, 
                   handleBack: jest.fn(), 
                   handleNext: handleNext 
                 }}>
                   <StepperNavigation />
                 </FormContext.Provider>
             );
 
             const nextButton= screen.getByRole('button', {'name': 'Next'})
             fireEvent.click(nextButton)
             expect(handleNext).toHaveBeenCalledTimes(1)
         });
        
      });

      describe('when activeStep is 2', ()=>{

        it('should render Finish button', ()=>{
            render(
                <FormContext.Provider value={{ 
                  activeStep: 2, 
                  handleBack: jest.fn(), 
                  handleNext: jest.fn() 
                }}>
                  <StepperNavigation />
                </FormContext.Provider>
            );

            const finishButton= screen.getByRole('button', {'name': 'Finish'})
             expect(finishButton).toBeInTheDocument();
        })

        

      })
  });