// Save array of cities sorted highest to lowest
var sortedCities = cityGrowths.sort((a,b)=> 
a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log("List of sorted cities: ", sortedCities)

// Save a new array of top 5 cities
var topFiveCities = sortedCities.slice(0,5);
console.log("Top 5 cities are: ", topFiveCities);

// Grab the names and populations of arrays
// For example, topFiveCities is an array of objects ... [{}, {}, {}...]
// For each element (object) in the array, we are writing a function that takes each object and returns the city (city.City) 
// and puts them in a new array.
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityPopulations = topFiveCities.map(city => parseInt(city.Increase_from_2016));

console.log("Names of cities are: ", topFiveCityNames);
console.log("Populations of cities are: ", topFiveCityPopulations);

// Create a bar chart
var trace = [{
    x: topFiveCityNames,
    y: topFiveCityPopulations,
    type: 'bar'
}]

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };

// Plot the graph by referencing the id in our index.html file
Plotly.newPlot("bar-plot", trace, layout);