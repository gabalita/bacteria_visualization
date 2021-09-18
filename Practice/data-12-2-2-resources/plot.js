var sortedCities = cityGrowths.sort((a,b)=> 
a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities)

var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

// Make arrays of city names and city populations
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityPopulations = topFiveCities.map(city => parseInt(city.Increase_from_2016));


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

  Plotly.newPlot("bar-plot", trace, layout);