// script.js — static interactions for the portfolio

document.addEventListener('DOMContentLoaded', function () {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  // restore pref
  if (localStorage.getItem('theme') === 'dark') body.classList.add('dark');
  updateToggle();

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    updateToggle();
  });

  function updateToggle(){
    themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
  }

  // Draw a simple area-like chart for skills
  const data = [
    {name: 'Réseau', value: 80},
    {name: 'Montage PC', value: 85},
    {name: 'HTML/CSS/JS', value: 60},
    {name: 'PHP/SQL', value: 55},
    {name: 'Windows', value: 70}
  ];

  const svg = document.getElementById('skillsChart');
  const w = 500, h = 150, padding = 20;
  svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);

  // calculate points
  const step = (w - 2*padding) / (data.length - 1);
  let points = data.map((d,i) => {
    const x = padding + i * step;
    const y = padding + (1 - d.value/100) * (h - 2*padding);
    return {x,y};
  });

  // path for area
  let path = 'M ' + points.map(p=>`${p.x},${p.y}`).join(' L ') + ' L ' + (w-padding) + ',' + (h-padding) + ' L ' + padding + ',' + (h-padding) + ' Z';
  let poly = document.createElementNS('http://www.w3.org/2000/svg','path');
  poly.setAttribute('d', path);
  poly.setAttribute('fill', 'url(#grad)');
  poly.setAttribute('opacity', '0.18');
  svg.appendChild(poly);

  // stroke line
  let line = document.createElementNS('http://www.w3.org/2000/svg','path');
  line.setAttribute('d', 'M ' + points.map(p=>`${p.x},${p.y}`).join(' L '));
  line.setAttribute('fill', 'none');
  line.setAttribute('stroke', '#7c3aed');
  line.setAttribute('stroke-width', '2');
  svg.appendChild(line);

  // points
  points.forEach(p=>{
    let c = document.createElementNS('http://www.w3.org/2000/svg','circle');
    c.setAttribute('cx', p.x);
    c.setAttribute('cy', p.y);
    c.setAttribute('r', 3);
    c.setAttribute('fill', '#7c3aed');
    svg.appendChild(c);
  });

  // gradient definition
  const defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
  defs.innerHTML = `
    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.05"/>
    </linearGradient>
  `;
  svg.appendChild(defs);
});
