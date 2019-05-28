// g grass, w water, t tree
const world = [
  ['g', 'g', 'g', 'g', 'g', 'g', 'g',],
  ['g', 'g', 'g', 'g', 'g', 'g', 'g',],
  ['g', 't', 't', 'g', 'w', 'w', 'g',],
  ['g', 't', 'g', 'g', 'w', 'w', 'g',],
  ['g', 'g', 'g', 'g', 'w', 'w', 'g',],
  ['g', 'g', 'g', 'g', 'g', 'g', 'g',],
];
const player = document.getElementById('player');
const mapBox = document.getElementById('map-box');
const cellSize = 32;

function drawMap(world) {


  world.forEach((line) => {
    const lineNode = document.createElement('div');
    lineNode.className = 'line';
    mapBox.appendChild(lineNode);
    line.forEach((obj) => {
      const lines = document.querySelectorAll('.line');
      const objNode = document.createElement('div');
      objNode.className = obj;
      lines[lines.length - 1].appendChild(objNode)
    });
  });
}


function setPlayerPosition(p, x, y, cellSize) {
  p.style.left = x * cellSize + 'px';
  p.style.top = y * cellSize + 'px';
}


window.addEventListener('load',
  function () {
    drawMap(world);
    setPlayerPosition(player, 2, 1, cellSize);
  });