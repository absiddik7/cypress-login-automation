describe('login process', () => {
  it('successful login', () => {
    // Visit login page
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    
    // Enter username and password in form inputs
    cy.get('input[name="username"').type("student")
    cy.get('input[name="password"').type("Password123")

    // Click submit button
    cy.get('button[id="submit"').click()

    // Ensure login is successful:
    cy.get('h1').should('have.text', 'Logged In Successfully')
  });
})

