App.View = Ember.ContainerView.extend({

  classNames: ['graybox'],

  childViews: ['dataView', 'buttonView'],


  dataView: Ember.View.create({

    modelBinding: 'App.model',

    template: Ember.Handlebars.compile('{{model.data1}}, {{model.data2}}')
  }),


  buttonView: Ember.Button.create({

    controllerBinding: 'App.controller',

    template: Ember.Handlebars.compile('click me'),

    click: function() {
      this.get('controller').updateModel("Hello","World");
    }
  })

});