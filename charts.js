function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((data) => {
      var sampleNames = data.names;
      console.log("Initializing data... ", data)
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      var firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  // Initialize the dashboard
  init();
  
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);
    
  }
  
  // Demographics Panel 
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select("#sample-metadata");
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
  
    });
  }
  
  // 1. Create the buildCharts function.
  function buildCharts(sample) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    d3.json("samples.json").then((data) => {
      // 3. Create a variable that holds the samples array. 
        var samplesArray = data.samples; 
  
      // 4. Create a variable that filters the samples for the object with the desired sample number.
        var resultArray = samplesArray.filter(sampleObj => sampleObj.id == sample);
        console.log("Result Array is...", resultArray)
        // This is an array with 1 object. 

      //  5. Create a variable that holds the first sample in the array.
        var resultID = resultArray[0];
        console.log('The result object/sample is...', resultID);
  
      // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
        var otu_idsResult = resultID.otu_ids;
        var otu_labels = resultID.otu_labels;
        var sample_values = resultID.sample_values;
        // console.log('OTU results are...', otu_idsResult);
        // console.log('OTU labels are...', otu_labels);
        // console.log('OTU sample_values are...', sample_values);
        
        

      // 7. Create the tick marks for the bar chart.
      // Hint: Get the the top 10 otu_ids and map them in descending order  
      //  so the otu_ids with the most bacteria are last. 
  
      var topSampleValues = sample_values.slice(0,10);
      var topOTU_IDs = otu_idsResult.map(id => (('OTU ') + String(id))).slice(0,10);
      var topOTU_labels = otu_labels.slice(0,10);

      console.log('Count of top 10 bacteria are: ', topSampleValues);
      console.log('ID numbers of top 10 bacteria are: ', topOTU_IDs);
      console.log('Bacteria Species names of top 10 are: ', topOTU_labels);

      // 8. Create the trace for the bar chart. 
      var barData = [{
        x: topSampleValues.reverse(),
        y: topOTU_IDs.reverse(),
        type: 'bar',
        orientation: 'h',
        text: topOTU_labels.reverse()}];
      
      // 9. Create the layout for the bar chart. 
      var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      xaxis: { title: "Bacteria Count" }
      };
      // 10. Use Plotly to plot the data with the layout. 
      Plotly.newPlot("bar-plot", barData, barLayout);

      // Deliverable 2
      // 1. Create the trace for the bubble chart.
      var bubbleData = [{
        x: otu_idsResult,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
          size: sample_values,
          color: otu_idsResult,
          colorscale: otu_idsResult
        }

      }];
  
      // 2. Create the layout for the bubble chart.
      var bubbleLayout = {
        title: 'Bacteria Cultures per Sample',
        xaxis: {title:'Bactiera ID'},
        yaxis: {title:'Count of Bacteria Culture'},
        height: 600,
        width: 1200

      };
  
      // 3. Use Plotly to plot the data with the layout.
      Plotly.newPlot('bubble-chart', bubbleData, bubbleLayout); 

      // Deliverable 3
      // Create a variable that holds the metadata array. 
      var metaArray = data.metadata;
      console.log('Metadata array is: ', metaArray);

      // 1. Create a variable that filters the samples for the object with the desired sample number.
      var resultArray = metaArray.filter(sampleObj => sampleObj.id == sample);
      console.log('Filtered metadata array is: ', resultArray);

      // 2. Create a variable that holds the first sample in the array.
      var filteredResult = resultArray[0]
      console.log('First item is: ', filteredResult);

      // 3. Create a variable that holds the washing frequency.
      var washFreq = filteredResult.wfreq;

      // 4. Create the trace for the gauge chart.
      var gaugeData = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: washFreq,
        // 'title.text': 'Plot title<br><small>Plot subtitle</small>'
        // title: { text: "Belly Button Washing Frequency<br><small>Scrubs per week</small>" },
        
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          bar: {color: "black"},
          axis: { range: [null, 10] },
          steps: [
            { range: [0, 2], color: "red" },
            { range: [2, 4], color: "orange" },
            { range: [4, 6], color: "yellow" },
            { range: [6, 8], color: "greenyellow" },
            { range: [8, 10], color: "green" }]
        }
      }];
      
      // 5. Create the layout for the gauge chart.
      var gaugeLayout = { 
        title: 'Belly Button Washing Frequency<br><sub>Scrubs per Week</sub>'
       
      };
  
      // 6. Use Plotly to plot the gauge data and layout.
      Plotly.newPlot('gauge', gaugeData, gaugeLayout);

    });
  }