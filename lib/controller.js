App.Controller = Ember.Object.extend({

  model: null, // to be set at construction time

  updateModel: function(data1, data2) {
    this.get('model').setProperties({
      data1: data1,
      data2: data2
    });
  }

});