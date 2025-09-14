const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let stars = [];

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = [];
  for(let i=0;i<150;i++){
    stars.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      r: Math.random()*2,
      d: Math.random()*0.5 + 0.2
    });
  }
}
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#fff';
  stars.forEach(s=>{
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fill();
  });
  update();
}
function update(){
  stars.forEach(s=>{
    s.y += s.d;
    if(s.y>canvas.height){
      s.y=0; s.x=Math.random()*canvas.width;
    }
  });
}
function animate(){
  draw();
  requestAnimationFrame(animate);
}
window.addEventListener('resize', resize);
resize();
animate();
