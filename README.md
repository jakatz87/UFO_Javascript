# UFO Javascript
## Overview
I used UFO sighting information to build a dynamic website with Javascript, allowing for easily filtered access.
## Resources
*Data Source*: 
- data.js

*Software*: 
- Javascript, d3
- HTML
- VS Code
- Bootstrap CSS

## Results
Using the `app.js` file, I linked the `data.js` information to begin running the webpage to include the data table.
```
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}
```
I then wrote the code to make the data filterable.
```
var filters = {};

//Use this function to update the filters. 
function updateFilters() {

    // Save the element that was changed as a variable.
    let changedElement = d3.select(this);
    // Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    // Save the id of the filter that was changed as a variable.
    let filterId = changedElement.attr("id");

    // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      filters[filterId] = elementValue;
    }
    else {
      delete filters[filterId];
    }
  
    // Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // Use this function to filter the table when data is entered.
  function filterTable() {
    console.log(filters);
    // Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // Loop through all of the filters and keep any data that matches the filter values
    let date = d3.select("#datetime").property("value"); 
      if (date) {
        filteredData = filteredData.filter(row=> row.datetime ===date);
        }
    let city = d3.select("#city").property("value");
      if (city) {
        filteredData = filteredData.filter(row=> row.city ===city);
        }
    let state = d3.select("#state").property("value");
      if (state) {
        filteredData = filteredData.filter(row=> row.state ===state);
        }
    let country = d3.select("#country").property("value");
      if (country) {
        filteredData = filteredData.filter(row=> row.country ===country);
        }
    let shape = d3.select("#shape").property("value");
      if (shape) {
        filteredData = filteredData.filter(row=> row.shape ===shape);  
        };
    
  
    // Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
  ```
To perform a search, simply type in the desired filter criteria and either hit "enter" or click anywhere other than the filter box.

![image](https://github.com/jakatz87/UFO_Javascript/blob/main/static/images/Filter_screenshot.png)

## Summary
With HTML and Bootstrap CSS (see `index.html` and `style.css`, I designed the following page:
![image](https://github.com/jakatz87/UFO_Javascript/blob/main/static/images/Web_Final_Screenshot.png)

One of the drawbacks of the page is the ability to use up to date information.  The data source `data.js` is static and outdated.  I recommend further development with accessing more up to date information, spanning across the globe instead of just North America.  I would also recommend more dynamic filtering, where results are displayed as the filter criteria is being entered, as opposed to hitting "enter" or leaving the search field. 
