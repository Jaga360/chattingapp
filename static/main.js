
// var socket = io();
var socket = io.connect(location.protocol + '//' + document.domain +':' + location.port);
//  socket.on('connect', function() {
//      socket.emit('my event', {data: 'I\'m connected!'});
//  });

// socket.on("push",function(data){
//    console.log(data)
// })

function send(){
   sendBox=document.getElementById("msgBox")
   socket.emit("msg","hello")
   sendBox.value=""
};