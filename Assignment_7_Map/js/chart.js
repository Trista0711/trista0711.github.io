$(document).ready(function(){

var items = [];
var i = 0;
var airtable_read_endpoint = "https://api.airtable.com/v0/appLPE7yDFPFC33k2/Imported%20table?api_key=keysAky6ucMNj4qo4";
var dataSet = [];

$.getJSON(airtable_read_endpoint, function(result) {
    $.each(result.records, function(key,value) {
        items = [];
           items.push(value.fields.Name);
           items.push(value.fields.Quantity);
           dataSet.push(items);
            console.log(items);
        }); 
        console.log(dataSet);

    });

 var chart = c3.generate({
     data: {
         columns: dataSet,
         type: 'bar',
     },


     });
});