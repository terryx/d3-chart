const d3 = require('d3');

const margin = {
  top: 10,
  left: 10,
  bottom: 10,
  right: 10
};
const width = 500 - (margin.left + margin.right);
const height = 500 - (margin.top + margin.bottom);

const svg = d3
  .select('#svg')
  .append('svg')
  .attr('width', width + (margin.left + margin.right))
  .attr('height', height + (margin.top + margin.bottom))
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)

svg
  .append('rect')
  .attr('width', width)
  .attr('height', height)
  .style('fill', 'lightblue')
  .style('stroke', 'green')
