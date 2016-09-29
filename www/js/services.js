angular.module('starter.services', [])

.factory('FhemData', function($http) {

  return {

    changeStatus: function(deviceName, newStatus) {
      var url = 'http://192.168.2.100:8083/fhem&cmd.' + deviceName + '=set%20' + deviceName + '%20' + newStatus + '&XHR=1';
      return $http.jsonp(url);
    },

    getStatus: function(deviceName) {
      var url = 'http://192.168.2.100:8083/fhem&cmd=list%20' + deviceName + '%20' + 'STATE' + '&XHR=1';
      return $http.get(url).then(function(response) {

        var returnValue = response.data.substring(response.data.lastIndexOf(' ') + 1);
        returnValue = returnValue.replace(/(\r\n|\n|\r)/gm, "");
        return returnValue;
      });
    },

    changeTemperature: function(deviceName, newTemperature) {

    }
  }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
