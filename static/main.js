

 var socket = io.connect(location.protocol + '//' + document.domain +':' + location.port );
//  socket.on('connect', function() {
//      socket.emit('my event', {data: 'I\'m connected!'});
//  });

function send(){
   sendBox=document.getElementById("msgBox")
   socket.emit('msg',sendBox.value)
   sendBox.value=""
};