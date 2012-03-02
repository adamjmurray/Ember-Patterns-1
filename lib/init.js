(function() {

  var model = App.Model.create({
    data1: 'default data1',
    data2: 'default data2'
  });

  App.set('model', model);

  App.set('controller', App.Controller.create({model: model}));

})();
