let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
document.getElementById("gameScreen").style.visibility = "hidden";

function main() {
    document.getElementById("gameScreen").style.visibility = "visible";
    
    setInterval(function() {
        var color = "#00f";
        color = randomColor();
        ctx.clearRect(0, 0, 800, 600);
    
        ctx.fillStyle = randomColor();
        var num1 = [Math.floor(Math.random() * 450)];
        var num2 = [Math.floor(Math.random() * 240)];
        ctx.fillRect(num1, num2, [Math.floor(Math.random() * 150) + 10], [Math.floor(Math.random() * 150) + 10]);

        ctx.fillStyle = randomColor();
        num1 = [Math.floor(Math.random() * 450)];
        num2 = [Math.floor(Math.random() * 240)];
        ctx.fillRect(num1, num2, [Math.floor(Math.random() * 150) + 10], [Math.floor(Math.random() * 150) + 10]);
    
        ctx.fillStyle = randomColor();
        num1 = [Math.floor(Math.random() * 450)];
        num2 = [Math.floor(Math.random() * 240)];
        ctx.fillRect(num1, num2, [Math.floor(Math.random() * 150) + 10], [Math.floor(Math.random() * 150) + 10]);
    
        ctx.fillStyle = randomColor();
        num1 = [Math.floor(Math.random() * 450)];
        num2 = [Math.floor(Math.random() * 240)];
        ctx.fillRect(num1, num2, [Math.floor(Math.random() * 150) + 10], [Math.floor(Math.random() * 150) + 10]);
    
        ctx.fillStyle = randomColor();
        num1 = [Math.floor(Math.random() * 450)];
        num2 = [Math.floor(Math.random() * 240)];
        ctx.fillRect(num1, num2, [Math.floor(Math.random() * 150) + 10], [Math.floor(Math.random() * 150) + 10]);
    }, 500);
}

function randomColor() {
    
    var colors = ["#6f3d8b", "#131313", "#33963f", "#eb0c0c", "#035ee8"];
    
    var color = colors[Math.floor(Math.random() * colors.length)];
    
    return color;
}