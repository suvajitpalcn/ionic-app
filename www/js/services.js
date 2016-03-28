angular.module('starter.services', [])

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
})

.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    location: 'Norway',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    location: 'Texas',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    location: 'San Francisco',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    location: 'Ohio',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    location: 'Las Vegas',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return friends;
    },
    remove: function(friend) {
      friends.splice(friends.indexOf(chat), 1);
    },
    get: function(friendId) {
      for (var i = 0; i < friends.length; i++) {
        if (friends[i].id === parseInt(friendId)) {
          return friends[i];
        }
      }
      return null;
    }
  };
})

.factory('Todos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var todos = [{
    id: 0,
    text: 'Ben Sparrow',
    checked: true
  }, {
    id: 1,
    text: 'Max Lynx',
    checked: false
  }, {
    id: 2,
    text: 'Adam Bradleyson',
    checked: true
  }, {
    id: 3,
    text: 'Perry Governor',
    checked: false
  }, {
    id: 4,
    text: 'Mike Harrington',
    checked: false
  }];

  return {
    all: function() {
      return todos;
    },
    getCheckText: function() {
      return 'Hide Completed?';
    }
  };
});
