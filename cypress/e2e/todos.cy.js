describe('Pruebas-pagina-todo',() => {


beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    
})

it('User can add ONE task', () => {
    cy.get('.new-todo').type('comprar_el_pan{enter}')
    cy.get('.toggle').click()
})

it('Crear una tarea', () => {
    cy.get('.new-todo').type('comprar-refrescos{enter}')
    cy.get('label').contains('comprar-refrescos')
})

it('Marcar tarea como completada', () => {  
    cy.get('.new-todo').type('comprar-juguetes{enter}')
    cy.get('.toggle').type('comprar-juguetes')
    cy.get('.selected')
    
})

it('Desmarcar tarea completa',() => {
    cy.get('.new-todo').type('hacer-la-compra{enter}')
    cy.get('.toggle').click()
    cy.get('.toggle').click()

})

it('Editar una tarea',() => {
    cy.get('.new-todo').type('preparar-la-cena{enter}')
    cy.get('label').dblclick()
    cy.get('.editing').type('preparar-el-almuerzo{enter}')
    cy.get('label').contains('preparar-el-almuerzo')



})




    




    

    




 
})
