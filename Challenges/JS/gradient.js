var canvas = document.getElementById("gradient");
var ctx = canvas.getContext("2d");

var colors = ctx.createLinearGradient(0, 0, 170, 0);
colors.addColorStop(0, "green");
colors.addColorStop(1, "white");

ctx.fillStyle = colors;
ctx.fillRect(20, 20, 150, 100);
