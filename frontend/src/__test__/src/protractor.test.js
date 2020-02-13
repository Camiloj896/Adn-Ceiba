describe('Protractor (E2e)', function() {
    it('Create Success', function() {

      browser.ignoreSynchronization = true;

      browser.get('http://localhost:3001/');

      const EC = protractor.ExpectedConditions;
  
      expect(browser.getTitle()).toEqual('Products');

      element(by.id('Product_C')).sendKeys('Prueba');
      element(by.id('Value_C')).sendKeys(5000);
      element(by.id('Amount_c')).sendKeys(1);      
      element(by.id('btn-create')).click();

      let success = element(by.id('alert-success'))

      browser.wait(EC.visibilityOf(success), 5000);

      expect(success.getText()).toContain('Product Created');
    });

    it('Create Error', function() {

      browser.ignoreSynchronization = true;

      browser.get('http://localhost:3001/');

      const EC = protractor.ExpectedConditions;
  
      element(by.id('Product_C')).sendKeys('');
      element(by.id('Value_C')).sendKeys(0);      
      element(by.id('btn-create')).click();

      let error = element(by.id('alert-error'))

      browser.wait(EC.visibilityOf(error), 5000);

      expect(error.getText()).toContain('Por favor, complete la información');
    });

    it('Value > 0', function() {

      browser.ignoreSynchronization = true;

      browser.get('http://localhost:3001/');
  
      element(by.id('Product_C')).sendKeys('prueba');
      element(by.id('Value_C')).sendKeys(0);      
      element(by.id('btn-create')).click();

      expect(element(by.id('error-value-create')).getText()).toContain('La cantidad ingresada debe ser mayor a 1');
    });

  });