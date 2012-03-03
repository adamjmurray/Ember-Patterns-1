App = Ember.Application.create();


//---------------------------------------


App.Model = Ember.Object.extend({
  data1: null,
  data2: null
});


//---------------------------------------


App.Controller = Ember.Object.extend({

  model: null, // to be set at construction time

  updateModel: function(data1, data2) {

    // This is contrived, but it's a reasonable simplification of a real-world app.
    // We typically do not allow views to update models directly, they can only talk to controllers.
    // One reason for this is to implement the "command" pattern to provide an undo/redo system.

    this.get('model').setProperties({
      data1: data1,
      data2: data2
    });
  }
});


//---------------------------------------
// Views

App.DataView = Ember.View.extend({

  modelBinding: 'App.model',

  tagName: 'span',

  classNames: ['graybox'],

  template: Ember.Handlebars.compile('{{model.data1}}, {{model.data2}}')
});


App.UpdateModelButton = Ember.Button.extend({

  controllerBinding: 'App.controller',

  data1: null, data2: null,

  template: Ember.Handlebars.compile('Update model to: [{{data1}},{{data2}}]'),

  click: function() {
    this.get('controller').updateModel(this.get('data1'), this.get('data2'));
  }
});


//---------------------------------------
// Initialization

(function() {

  var model = App.Model.create({
    data1: 'default data1',
    data2: 'default data2'
  });

  App.set('model', model);

  App.set('controller', App.Controller.create({model: model}));

})();
