
// g grass, w water, t tree
const world = [
  ['g','g','g','g','g','g','g',],
  ['g','g','g','g','g','g','g',],
  ['g','t','t','g','w','w','g',],
  ['g','t','g','g','w','w','g',],
  ['g','g','g','g','w','w','g',],
  ['g','g','g','g','g','g','g',],
];

function drawMap(world) {
  const mapBox = 
    document.getElementById('map-box');
 
  world.forEach((line, i) => {
    const lineNode=document.createElement('div');
    //console.log('line', i);
    lineNode.className = 'line';  
    mapBox.appendChild(lineNode);
    line.forEach((obj) => {
      const lines=document.querySelectorAll('.line');
      const objNode= document.createElement('div')
      objNode.className=obj
      lines[lines.length-1].appendChild(objNode)
    });
  });
}

const player= document.getElementById('player')

function setPlayerPosition(p,x,y)
{
    const cellSize=32;
    p.style.left=x*cellSize+'px';
    p.style.top=y*cellSize+'px';
}


window.addEventListener('load', 
function() {
  drawMap(world)
  setPlayerPosition(player, 2,1)
});