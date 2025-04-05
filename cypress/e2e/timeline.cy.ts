/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

import { TEST_IDS } from '../../src/constants/testIds';

describe('Timeline Component', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get(`[data-testid="${TEST_IDS.timelineItem}"]`).should('exist')
  })

  it('should update item name through modal', () => {
    cy.get(`[data-testid="${TEST_IDS.timelineItem}"]`).first().click()
    
    const newName = 'Updated Item Name'
    cy.get(`[data-testid="${TEST_IDS.modalInput}"]`).clear().type(newName)
    cy.get(`[data-testid="${TEST_IDS.modalSave}"]`).click()
    
    cy.get(`[data-testid="${TEST_IDS.timelineItem}"]`)
      .first()
      .should('contain', newName)
  })

  it('should show tooltip on hover', () => {
    cy.get(`[data-testid="${TEST_IDS.timelineItem}"]`)
      .first()
      .should('be.visible')
      .trigger('mouseover')
      .wait(100)
    
    cy.get(`[data-testid="${TEST_IDS.tooltip}"]`)
      .should('be.visible')
      .should('exist')
  })
}) 