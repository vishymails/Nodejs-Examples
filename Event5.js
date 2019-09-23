var EventEmitter = require('events').EventEmitter;
var util = require('util');

var User = function(username){
    this.username = username;
}
util.inherits(User, EventEmitter);
var user = new User('Krunal Lathiya');
user.on('nuevent', function(props){
    console.log(props);
});
user.emit('nuevent', 'dancing');