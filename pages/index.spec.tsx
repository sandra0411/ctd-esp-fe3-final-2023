import {render, screen} from "@testing-library/react";
//import IndexPage from "dh-marvel/pages/index.page";
import Index from "dh-marvel/pages/index.page";

const comic= [{
    id: 1, 
    title: 'Title test1',
    description: 'Applying testing1',
    thumbnail:{path:'testing1', extension:'jpg'}
},{
    id: 2, 
    title: 'Title test2',
    description: 'Applying testing2',
    thumbnail:{path:'testing2', extension:'jpg'}
},{
    id: 3, 
    title: 'Title test3',
    description: 'Applying testing3',
    thumbnail:{path:'testing3', extension:'jpg'}
}]

const pages= 2

describe('IndexPage', () => {

    let component;
    beforeEach(()=>{
        component=render(<Index comics={comic} pages={pages}/>)
        /* component.debug() */
    })

    
    describe('when rendering default', () => {
        it('should render the title', () => {

            const title = screen.getByText('Marvel Comics')
            expect(title).toBeInTheDocument()
        })
    });

    it("should render the pagination", () => {

        const pagination = screen.getAllByRole(/nav/i);
        expect(pagination).toBeInTheDocument
    });



})