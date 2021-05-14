/// <reference types="cypress" />


describe('The LogIn Page', () => {   


  beforeEach(function() {
    cy.fixture('demoUser').then(function(data){
      this.data =data
    })
  })

  it('Log In', function(){
      cy.demoLogIn(this.data.un, this.data.pass)
    })
})