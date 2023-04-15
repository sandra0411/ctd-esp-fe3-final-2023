import {createMocks} from 'node-mocks-http';
import handler from './index.route';
import {
    ERROR_CARD_DATA_INCORRECT,
    ERROR_CARD_WITHOUT_AUTHORIZATION,
    ERROR_CARD_WITHOUT_FUNDS,
    ERROR_INCORRECT_ADDRESS,
    ERROR_METHOD_NOT_ALLOWED,
    ERROR_SERVER
} from "dh-marvel/services/checkout/checkout.errors";

describe('Comics Api', () => {
    describe('when sending a valid GET', () => {
        it('should return a 200 status', async () => {
            
            const dataComics = {
                results: [{id: 1, 
                    title: 'testComic',
                    description: 'testing api comic',
                    thumbnail:{path:'http://testing', extension:'jpg'}}],
                total: 24
            }
            const {req, res} = createMocks({
                method: 'GET',
                query: {'page':'1'}
            });
            await handler(req, res);
            expect(res._getStatusCode()).toBe(200)
            /* expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining({data: dataComics}),
            ); */
        })
    })
    
})