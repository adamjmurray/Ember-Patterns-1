$(document).ready(function() {

  module("App.UpdateModelButton");

  test("click() calls controller.updateModel()", function() {
    expect(1);
    var subject = App.UpdateModelButton.create();
    var mockController = Ember.Object.create({
      isModelUpdated: false,
      updateModel: function() {
        this.set('isModelUpdated', true);
      }
    });
    App.set('controller', mockController); // <=== DANGEROUS

    Ember.run.sync(); // force the view's controller binding to be evaluated
    subject.click();
    ok( mockController.get('isModelUpdated'), 'model was not updated' );
  });


  module("Global namespace");

  test("App.controller is an instance of App.Controller", function() {
    // This test is really stupid, an dnot something I would normally test (duck typing, anyone?).
    // I'm simply trying to demonstrate the problem with replacing the global App.controller with a mock in the previous test
    ok( App.get('controller') instanceof App.Controller, 'Oh noes! App.controller is wrong type');
  });

});