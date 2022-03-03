var angle,l1,l2,l3,l4;
var payload;
var connection = new WebSocket('ws://' + location.hostname + ':81/', ['arduino']);
connection.onopen = function () {  connection.send('Connect ' + new Date());};
connection.onerror = function (error) {  console.log('WebSocket Error ', error);};
connection.onmessage = function (e) {  console.log('Server: ', e.data);};
connection.onclose = function () {  console.log('WebSocket connection closed');};

function sendB(){
     l1 = document.getElementById("l1").value;
     l2 = document.getElementById("l2").value;
     l3 = document.getElementById("l3").value;
     payload = "b"+l1;
     angle="Angles [" +l1+ ","+l2+ ","+l3+"]";
     //var payload ="{" +l1+ ","+l2+ ","+l3+"}"; //'{"' +l1+ '","'+l2+ '","'+l3+'"}'.toString(16);
     document.getElementById("vl").innerHTML=angle;
     console.log(angle);
     console.log(payload);
     connection.send(payload);
}

function sendS(){
     l1 = document.getElementById("l1").value;
     l2 = document.getElementById("l2").value;
     l3 = document.getElementById("l3").value;
     payload = "s"+l2;
     angle="Angles [" +l1+ ","+l2+ ","+l3+"]";
     //var payload ="{" +l1+ ","+l2+ ","+l3+"}"; //'{"' +l1+ '","'+l2+ '","'+l3+'"}'.toString(16);
     document.getElementById("vl").innerHTML=angle;
     console.log(angle);
     console.log(payload);
     connection.send(payload);
}

function sendL(){
     l1 = document.getElementById("l1").value;
     l2 = document.getElementById("l2").value;
     l3 = document.getElementById("l3").value;
     payload = "l"+l3;
     angle="Angles [" +l1+ ","+l2+ ","+l3+"]";
     //var payload ="{" +l1+ ","+l2+ ","+l3+"}"; //'{"' +l1+ '","'+l2+ '","'+l3+'"}'.toString(16);
     document.getElementById("vl").innerHTML=angle;
     console.log(angle);
     console.log(payload);
     connection.send(payload);
}

function scan(){
     l1 = document.getElementById("l1").value;
     l2 = document.getElementById("l2").value;
     l3 = document.getElementById("l3").value;
     angle="Angles [" +l1+ ","+l2+ ","+l3+"]";
     payload="can"
     document.getElementById("vl").innerHTML=angle;
     console.log(angle);
     console.log(payload);
     connection.send(payload);
}
/*document.getElementById("l1").addEventListener("input", sendValue());
document.getElementById("l2").addEventListener("input", sendValue());
document.getElementById("l3").addEventListener("input", sendValue());
document.getElementById("l4").addEventListener("input", sendValue());
*/

/*function sendRGB(){
    var color,r,g,b;
     r = document.getElementById("red").value;
     g = document.getElementById("gr").value;
     b = document.getElementById("bl").value;
     color="rgb(" +r+ ","+g+ ","+b+")";
     document.getElementById("led").style.backgroundColor = color;
     document.getElementById("rgb").innerHTML=color;
}*/

