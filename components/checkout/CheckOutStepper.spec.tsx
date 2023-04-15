import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import CheckOutStepper from "./CheckOutStepper";
import { useRouter } from "next/router";

const MockPush= jest.fn();
jest.mock('next/router', ()=> ({
    useRouter:jest.fn(),
}));
(useRouter as jest.Mock).mockImplementation(()=>({
    push: MockPush,
}))


const selectComic= {
    id: 1,
    title: 'Comic1',
    description: 'testeando',
    thumbnail: {
        path: 'elperro',
        extension: 'jpg',
    },
    price: 30,
    oldPrice: 45,
    stock: 3,
    characters: {
        items: [{resourceURI: 'test',
            name: 'test'}]
    }
} 

const emptyComic= {
    id: 0,
    title: '',
    description: '',
    thumbnail: {
        path: '',
        extension: '',
    },
    price: null,
    oldPrice: null,
    stock: null,
    characters: {
        items: [{resourceURI: '',
            name: ''}]
    }
} 

describe('CheckOutStepper', () => {
    describe('when rendering by default', () => {


      it('should render a textbox', () => {
        render(<CheckOutStepper comic={selectComic}/>)
        const titleStep1= screen.getByText('Personal data')
        expect(titleStep1).toBeInTheDocument();
      })
      it('should render the step 0 with PersonalDataForm', () => {
        render(<CheckOutStepper comic={selectComic}/>)
        const inputLastname= screen.getByRole('textbox', {'name': 'Lastname'})
        expect(inputLastname).toBeInTheDocument();
        expect(inputLastname).toHaveValue('Divan')

      })
      it('should render the Back and Next button ', () => {
        render(<CheckOutStepper comic={selectComic}/>)

        const backButton= screen.getByRole('button', {'name': 'Back'})
        const nextButton= screen.getByRole('button', {'name': 'Next'})
        expect(backButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
        

      })


      
    }) 

    describe('when activeStep is 1', ()=>{
        it('should render DeliveryDataForm', async ()=>{

            render(<CheckOutStepper comic={selectComic}/>)
           const nextButton= screen.getByRole('button', {'name': 'Next'})
            fireEvent.click(nextButton)
            expect(await screen.findByText('Delivery data')).toBeInTheDocument();

        })
    })
    describe('when activeStep is 2', ()=>{
        it('should render PaymentDataForm', async ()=>{

            render(<CheckOutStepper comic={selectComic}/>)
            const nextButton= screen.getByRole('button', {'name': 'Next'})
            fireEvent.click(nextButton)
            fireEvent.click(nextButton)

            expect(await screen.findByText('Payment data')).toBeInTheDocument();

        })
    })
    describe('when activeStep is 3', ()=>{
        it('should render a message for user', async ()=>{

            render(<CheckOutStepper comic={selectComic}/>)
            

            const nextButton= screen.getByRole('button', {'name': 'Next'})
            fireEvent.click(nextButton)
            fireEvent.click(nextButton)
            fireEvent.click(nextButton)

            expect(await screen.findByText('Processing Order...')).toBeInTheDocument();
            
        })
    })

    describe('when rendering without comic prop', () => {


        it('should render an Error Messagge', async() => {
          render(<CheckOutStepper />)
          await waitFor(()=>{
            expect(MockPush).toBeCalledTimes(1)
          })
         
        })
    })

    /* describe('when submit with incorrect card data', () => {


        it('should render an Error Messagge', async() => {
          render(<CheckOutStepper comic= {selectComic} />)

          const nextButton= screen.getByRole('button', {'name': 'Next'})
            fireEvent.click(nextButton)
            fireEvent.click(nextButton)
            const cardNumber= screen.getByRole('textbox', {'name': 'Card number'})
            await userEvent.type(cardNumber, '4242424242424240')
            fireEvent.click(nextButton)
            //expect(await screen.findByText('Ups! An error of type CARD_DATA_INCORRECT has occurred, please check the uploaded data. Thanks!')).toBeInTheDocument();
             
             await waitFor(()=>{
                const errorMessage = screen.getByText(/Ups! An error of type/i);
  const errorMessageStyles = window.getComputedStyle(errorMessage);
  expect(errorMessageStyles.color).toBe('red');
                //const snackbarElement =screen.getByRole('alert');
                //expect(snackbarElement).toBeInTheDocument(); 
              })
            
        })
    }) */
})