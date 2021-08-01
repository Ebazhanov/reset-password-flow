describe('screenshot tests', () => {
  describe('navigate to forgot password page', () => {
    before(() => {
      cy.visit('/?lng=de');
      cy.viewport(375, 812);
    });
    it('compares screenshots on this page', () => {
      cy.matchImageSnapshot();
    });
  });
});
