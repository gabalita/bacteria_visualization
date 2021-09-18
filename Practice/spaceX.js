// In the first line, the URL to the SpaceX is defined.
const url = "https://api.spacexdata.com/v2/launchpads";

// In the second line, d3.json() method places a call to SpaceX's API, 
// retrieves the data, and prints it to the browser console.

// d3.json(url).then(receivedData => console.log(receivedData));

// Once the data is retrieved, it is assigned the arbitrary parameter 
// name receivedData by the arrow function and printed in the console.

// JavaScript is an asynchronous language, meaning that a code statement doesn't
//  necessarily wait for the previous statement to finish executing.

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
