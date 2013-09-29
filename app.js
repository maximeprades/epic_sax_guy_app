(function() {

  return {

    events: {
      'app.activated':'startEpicSaxGuy',
      'click .stop-it':'stopEpicSaxGuy',
      'click .play-it':'startEpicSaxGuy'
    },

    startEpicSaxGuy: function() {
         this.switchTo('epicSax');
    },

    stopEpicSaxGuy: function(event) {
        this.switchTo('noSax');
    }
  };

}());
