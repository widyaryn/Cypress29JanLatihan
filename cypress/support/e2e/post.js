describe ('Petstore API Inventory Testing', () => {
    it( 'post user inventory - POST', () => {
        let body = {
        "id": 0,
        "username": Cypress.env("username"),
        "firstName": "as",
        "lastName": "123",
        "email": "123",
        "password": "12345",
        "phone": "1231413",
        "userStatus": 0
        }

        //Create post request
        cy.request('POST','/user',body).as('createUser');
        //Assert hasil
        cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.equal(200)
        })
    })
}) 