import {render, screen} from "@testing-library/react";
import Faqs from "dh-marvel/pages/faqs/index.page";

describe('Faqs page', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Faqs faq={[ 
                {id: 1,
                question: "¿Cuántos comics tienen?",
                answer: "Actualmente disponemos de toda la colección de Marvel. Algunos ejemplares pueden contar con poca o nula disponibilidad por el momento. Para mas información puede acceder a https://marvel.com"}
                  ]} />)
            const title = screen.getByText('Preguntas Frecuentes')
            expect(title).toBeInTheDocument()
        })
        it('should render the question', () => {
            render(<Faqs faq={[ 
                {id: 1,
                question: "¿Cuántos comics tienen?",
                answer: "Actualmente disponemos de toda la colección de Marvel. Algunos ejemplares pueden contar con poca o nula disponibilidad por el momento. Para mas información puede acceder a https://marvel.com"}
                  ]} />)
            const quest = screen.getByText('¿Cuántos comics tienen?')
            expect(quest).toBeInTheDocument()
        })
        it('should render the question', () => {
            render(<Faqs faq={[ 
                {
                    id: 2,
                    question: "¿Se puede reservar nuevos lanzamientos?",
                    answer: "Lamentablemente nuestro sitio todavía no acepta reservas anticipadas. Pero nos encontramos trabajando en esa funcionalidad. Seguí nuestro twitter para estar al tanto de las ultimas novedades."
                }
             ]} />)
            const quest2 = screen.getByText('¿Se puede reservar nuevos lanzamientos?')
            expect(quest2).toBeInTheDocument()
        })
    })

})