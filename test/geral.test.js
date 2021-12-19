let app = require('../src/app');
let supertest = require('supertest');
let request = supertest(app);

it('A aplicacao deve responder na porta 3000', async () => {
    // return request.get('/').then(response => {
    //     expect(response.statusCode).toEqual(200);   
    // })

    let response = await request.get('/');

    expect(response.statusCode).toEqual(200);
})

it('Deve retornar vermelho', async () => {
    request.get('/cor').then(response => {
        expect(response.body.cor).toEqual('vermelho');
    })
})