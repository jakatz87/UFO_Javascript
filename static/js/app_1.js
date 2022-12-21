// import the data from data.js
const tableData =data;

// reference the HTML table using D3
var tbody = d3.select('tbody');

// build a function to take the table of data, with the title(argument)
function buildTable(data) {
    tbody.html(""); //this line clears existing data and makes us ready for a new data search

    data.forEach((dataRow) => {  //create a forEach function to loop through the data array, dataRow will be each row of data
        let row = tbody.append("tr"); //create a row variable that will append the row from the data table into the table body
        Object.values(dataRow).forEach((val) => {  // loop through each field in dataRow and prepare to add them to the table with "td" tags
            let cell = row.append("td"); // this will add to the table with "td" tags
            cell.text(val); //calling back "val" from the forEach iteration
            
            }

        );

    });
}

//build a function for clicking a button for the search by date
function handleClick() {
    let date = d3.select("#datetime").property("value");  //this tells d3 to look for date values on the webpage and hold it in the "date" variable
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row=> row.datetime ===date);
    };
    buildTable(filteredData);

}

d3.selectAll("#filter-btn").on("click", handleClick);  //tells d3 to execute the handleClick function when the button with id "filter-btn" is clicked
buildTable(tableData);