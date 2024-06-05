describe('Login BIT web page', () => {

  it('LMS login username password', () => {

    //cy.visit('https://www.bit.lk/')

    cy.visit('https://vle.bit.lk/login/index.php')

    cy.get('#username').type("R220313");

    cy.get('#password').type("200166601622")

    cy.get('#loginbtn').click();
  })
})