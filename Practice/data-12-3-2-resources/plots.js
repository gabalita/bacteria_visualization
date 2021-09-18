// Overview of Concepts:
// d3.json(url) method will allow us to read external JSON files, as well as place calls to external web APIs for data
//     - a JavaScript promise in this case waits for the data retrieval to finish before moving on to the next code.
// We are dynamically creating dropdown menu links by:
//    1) saving dropdown menu as selector variable 
//    2) We append our options to selector through forEach element in the object, names
//    3) <select id="selDataset" onchange="optionChanged(this.value)"></select>
//      a) select tag now has attribute "onchange", which is associated with optionChanged function. 
//      b) anytime a change takes place, optionChanged function is called where the argument is this.value (which 
//        is assigned the current value of the dropdown menu; in the context of an event, it refers to the HTML element that received the event)

//  function optionChanged(newSample) {
  // buildMetadata(newSample);
  // buildCharts(newSample);}
//    The argument, newSample, is the volunteer ID number that is passed to both of these functions

// Define the initialize function
function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

// Call the function to pre-populate the page.
init();

// The optionChanged function will be called within our index.html file.
function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Curate the metadata that you want to display
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text(result.location);
  });
}

// function init() {
//     data = [{
//       x: [1, 2, 3, 4, 5],
//       y: [1, 2, 4, 8, 16] }];
//     Plotly.newPlot("plot", data);
//   };
  
//   d3.selectAll("#dropdownMenu").on("change", updatePlotly);
//   function updatePlotly() {
//     var dropdownMenu = d3.select("#dropdownMenu");
//     var dataset = dropdownMenu.property("value");
  
//     var xData = [1, 2, 3, 4, 5];
//     var yData = [];
  
//     if (dataset === 'dataset1') {
//       yData = [1, 2, 4, 8, 16];
//     };
  
//     if (dataset === 'dataset2') {
//       yData = [1, 10, 100, 1000, 10000];
//     };
  
//     var trace = {
//       x: [xData],
//       y: [yData],
//     };
//     Plotly.restyle("plot", trace);
//   };
  
//   init();