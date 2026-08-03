const nodes = [
  { id: 'E4', label: 'WORK-STACK', x: 400, y: 300, url: '#' },
  { id: 'E1', label: 'NAVIDSTAD', x: 200, y: 150, url: '#' },
  { id: 'E2', label: 'CHEM / NUKE', x: 600, y: 150, url: '#' },
  { id: 'E3', label: 'HANDIBOOK', x: 200, y: 450, url: 'https://github.com/0x00ctrl/CyberSec-Books' },
  { id: 'E5', label: 'DISCORD', x: 600, y: 450, url: '#' }
];

const edgesGroup = document.getElementById('edges');
const verticesGroup = document.getElementById('vertices');
const centerNode = nodes[0];

nodes.forEach((node, index) => {
  if (index === 0) return;
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', centerNode.x);
  line.setAttribute('y1', centerNode.y);
  line.setAttribute('x2', node.x);
  line.setAttribute('y2', node.y);
  line.setAttribute('class', 'edge-line');
  edgesGroup.appendChild(line);
});

nodes.forEach(node => {
  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.setAttribute('class', 'node-group');
  group.style.cursor = 'pointer';

  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', node.x);
  circle.setAttribute('cy', node.y);
  circle.setAttribute('r', 35);
  circle.setAttribute('class', 'node-circle');

  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('x', node.x);
  text.setAttribute('y', node.y);
  text.setAttribute('class', 'node-text');
  text.textContent = node.id;

  const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  label.setAttribute('x', node.x);
  label.setAttribute('y', node.y + 55);
  label.setAttribute('class', 'node-label');
  label.textContent = node.label;

  group.appendChild(circle);
  group.appendChild(text);
  group.appendChild(label);

  group.addEventListener('click', () => {
    if (node.url.startsWith('http')) {
      window.open(node.url, '_blank');
    } else {
      alert(`// MOUNTING VOLUME: ${node.label}\n\nStrata pending. Commit 3 wires the kernel.`);
    }
  });

  verticesGroup.appendChild(group);
});
