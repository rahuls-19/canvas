var can = document.getElementById("Newcanvas");
var Jctx = can.getContext("2d");
Jctx.moveTo(200,0);// x-axis y-axis
Jctx.lineTo(00,400);
Jctx.lineWidth = 10;
Jctx.strokeStyle = "blue";
Jctx.stroke();

Jctx.moveTo(200,0);// x-axis y-axis
Jctx.lineTo(400,400);
Jctx.lineWidth = 10;
Jctx.strokeStyle = "blue";
Jctx.stroke();

Jctx.moveTo(100,200);// x-axis y-axis
Jctx.lineTo(300,200);
Jctx.lineWidth = 10;
Jctx.strokeStyle = "blue";
Jctx.stroke();


var can2 = document.getElementById("Newcanvas2");
var Jctx2 = can2.getContext("2d");
Jctx2.beginPath();
Jctx2.arc(200,200,100,0,2*Math.PI);
Jctx2.strokeStyle = "green";
Jctx2.lineWidth=4;
Jctx2.stroke();

Jctx2.beginPath();
Jctx2.arc(160,160,24,0,2*Math.PI);
Jctx2.strokeStyle = "green";
Jctx2.lineWidth=4;
Jctx2.stroke();

Jctx2.beginPath();
Jctx2.arc(300,100,40,0,2*Math.PI);
Jctx2.strokeStyle = "green";
Jctx2.lineWidth=4;
Jctx2.stroke();

Jctx2.beginPath();
Jctx2.arc(100,100,40,0,2*Math.PI);
Jctx2.strokeStyle = "green";
Jctx2.lineWidth=4;
Jctx2.stroke();

Jctx2.beginPath();
Jctx2.arc(240,160,24,0,2*Math.PI);
Jctx2.strokeStyle = "green";
Jctx2.lineWidth=4;
Jctx2.stroke();


Jctx2.moveTo(200,215);
Jctx2.lineTo(200,190);
Jctx2.stroke();


Jctx2.beginPath();
Jctx2.arc(200,230,24,0,3.3);
Jctx2.strokeStyle = "green";
Jctx2.lineWidth=4;
Jctx2.stroke();
