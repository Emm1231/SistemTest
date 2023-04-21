/// <reference types="cypress" />

import { MainPage } from "../page-objects/main-page"                                       
import { ShiftingContent } from "../page-objects/shifting-content-page"
import { MenuElement } from "../page-objects/menu-element-page"

describe('Pruebas_shiftingcontent', () => {

  const mainPage = new MainPage()
  const shiftingContent = new ShiftingContent()
  const menuElement = new MenuElement()

  beforeEach(() => {

     mainPage.visitarMainPage()
     mainPage.clicarShiftingContent()
    
    })

    it('usuario accede a Menu Element', () => {
      
      shiftingContent.clicarMenuElement()
      shiftingContent.comprobarElementosDeLaTabla()

  
    })
  })
