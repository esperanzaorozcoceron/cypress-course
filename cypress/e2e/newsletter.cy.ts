describe("funcionalidad de newsletter", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.wait(500)
    })

    it("permite al usuario suscribirse a la newsletter correctamente", () => {
        //@ts-ignore
        cy.getByData("email-input").type("orozcoeseranza@gmail.com") //El metodo type me permite escribir sobre el elemento que estamos testeando
        cy.getByData("submit-button").click() // el metodo click me permite dar click sobre el elemento que estamos llamando
        cy.getByData("success-message").should("exist").contains("orozcoeseranza@gmail.com") // el metodo should que me permite validar si el elemento existe
    })

    it("no permite al usuario utilizar un mail invalido", () => {
        cy.getByData("email-input").type("orozcoeseranza")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })

    it.only("el usuario no puede anotarse al newsletter", () => {
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist")
    })
})