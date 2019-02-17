// Analog clock

var can = document.querySelector('.canvas');
console.log(can);
var c = can.getContext('2d');
c.translate(300,300);
draw()
function draw()
{
c.fillStyle="white";
c.arc(0,0,275,0,Math.PI*2,false);
c.fill();
c.lineWidth = 9;
c.fillStyle = "Black";
c.lineCap = "round";
for(i=1;i<13;i++)
{
    c.rotate((Math.PI*2/12)*i)

    c.beginPath();
    c.moveTo(275,0);
    c.lineTo(265,0);
    c.stroke();
    c.rotate(-i * (Math.PI*2)/12);
}
const date = new Date();
const h = ((date.getHours()%12)*60+date.getMinutes())*(Math.PI*2/(12*60));
const m = date.getMinutes()*(Math.PI*2/60);
const s = date.getSeconds()*(Math.PI*2/60);
hand(s,8,160);
hand(m,12,180);
hand(h,16,130);

requestAnimationFrame(draw);
}

function hand(s,w,h){
    c.fillStyle = "black";
    c.lineWidth = w;
    c.rotate(s);
    c.lineCap = "round"
    c.beginPath();
    c.moveTo(0,0)
    c.lineTo(0,-h)
    c.stroke();
    c.rotate(-s);
}
requestAnimationFrame(draw);