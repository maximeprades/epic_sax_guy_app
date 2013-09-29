(function() {

  return {

    events: {
      'app.activated':'startEpicSaxGuy',
      'click. stop-it':'stopEpicSaxGuy'
    },

    startEpicSaxGuy: function() {
         this.switchTo('epicSax');
    },

    stopEpicSaxGuy: function(event) {
        this.switchTo('noSax');
    }
  };

}());
