(function() {

  return {

    events: {
      'app.activated':'startEpicSaxGuy'
    },

    startEpicSaxGuy: function() {
        this.$('section[data-main]').show();
        services.appsTray().show();
        this.$('epicSax').show();
    }

  };

}());
