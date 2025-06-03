describe('home spec', () => { //contiene dos metodos un string y una funcion callback, el string = descripcion del caso de prueba y el callback= contiene el caso de prueba dentro del bloque

  //Ganchos con el metodo beforeEach: 
  beforeEach(() => {
    cy.visit('http://localhost:3000') //visit indica donde ejecutar nuestras pruebas
    cy.wait(500) //el metodo wait es para agregrar un tiempo de espera antes de ejecutar el siguiente paso 
  })

  //metodo context: permite agrupar los casos de pruebas que estan relacionadas y ponerlas juntos 

  context("seccion inicial", () => {
    //correr un caso de prueba singular -> uno solo
    it('el titulo de la pagina contenga el texto indicado', () => {
      //@ts-ignore
      cy.getByData("hero-heading").contains('Testing Next.js Applications with Cypress') // el metodo get sirve para obtener el elemento de la pagina. ".contains" = encadenamientos de comandos una cadena de multiples comandos que termina uno despues del otro
    })

    it('verificamos las caracteristicas de los cursos', () => { //agregar el comando only despues del it le esta diciendo a cypress que ejecute esta prueba en especifico
      cy.get('dt').eq(0).contains("4 Courses") //dt = nos devuelve un numero de elementos como encontro un arreglo de 3 elementos el comando eq = nos permite acceder a un indice del arreglo
      cy.get('dt').eq(1).contains("25+ Lessons")
      cy.get('dt').eq(2).contains(/Free and open source/i) // .contains(/4 courses/i) me permite pasar expresiones regulares esto quiere decir que no se fija si es mayuscula o minuscula
    })
  })

  context.only("seccion cursos", () => {
    it("curso: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").contains("Get started").click() // identifcamos el elemento padre para encontrar el elemento hijo, el metodo find me permite encontrar el elemento dentro de un grupo padre de elementos
      cy.location("pathname").should("equal", "/testing-your-first-application")// metodo location nos permite encontrar el pathname que es la ruta 
    })

    it("curso: Testing foundations", () => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })

    it("curso: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})