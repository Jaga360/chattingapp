

 var socket = io.connect(location.protocol + '//' + document.domain +':' + location.port );
 socket.on('connect', function() {
     socket.emit('my event', {data: 'I\'m connected!'});
 });

function send(){
   sendBox=document.getElementById("msgBox")
   console.log(sendBox.value)
   sendBox.value=""
};