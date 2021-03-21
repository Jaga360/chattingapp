
// var socket = io();
var socket = io.connect(location.protocol + '//' + document.domain +':' + location.port);
//  socket.on('connect', function() {
//      socket.emit('my event', {data: 'I\'m connected!'});
//  });

function send(){
   var sendBox=document.getElementById("msgBox")
   socket.emit("msg",sendBox.value)
   sendBox.value=""
};

socket.on("push",function(data){
   var msgList=document.getElementById("msgList")
   msgList.innerHTML += "<p>" + data + "</p>"
})