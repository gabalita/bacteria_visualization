// Plotly.newPlot("plotAreaGabby", [{x: [1, 2, 3], y: [10, 20, 30]}]);
// Plotly.newPlot("plotAreaGabby", [{x:[5,13,17],y:[16,36,50]}]);

// newPlot(name_of_Div_ID, [outer array {object pairs of x: array, y:array}])

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type:'bar'
 };

 var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

var drinks_types = ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", 
"nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"]

var drinks_percent = [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6]

// Skill Drill Exercise
var trace2 = {
    x: drinks_types,
    y: drinks_percent,
    type: "bar"
};

var layout2 = {
    title: "Percent of market based on drink type",
    xaxis: {title: "Drink Types"},
    yaxis: {title: "Drink percentages"}
};

// 12.1.4
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };
  var data = [trace];
  var layout = {
    title: "'Pie' Chart",
  };
  Plotly.newPlot("plotArea", data, layout);

//   12.2.1
var numbers = [1,2,3,4,5];
var doubled = numbers.map(num => num * 4);
console.log(doubled);

// Skill drill

var numbers = [0,2,4,6,8];
var addFive = numbers.map(number => number+5);
console.log(addFive);

// Skill drill - use map to extract property of an object
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

// A map function calls another function.
var cityNames = cities.map(city => city.City);
console.log(cityNames)

// Filter function accepts another function, but it doesn't 
// always return an array that is the same length. 

var numbers = [1,2,3,4,5];

var larger = numbers.filter(num => num > 1);
console.log(larger);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var startsWithS = words.filter(word => word.charAt(0) === 's');
console.log(startsWithS);

// To accomplish this goal, she should sort the most common species 
// of bacteria with sort(), and then display the results on the webpage.
var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);

// Roza also needs to be able to select a subset of the data. 
// In her project, for example, she might perform a transformation on an array, 
// filter it, sort it, and then display only the top five results.
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1);

// To slice end of array, just leave second argument blank.
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );

//  She will create a bar chart of five cities whose populations
//  have seen the greatest increase in the period 2016–2017