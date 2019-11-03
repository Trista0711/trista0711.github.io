var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appEc48NUSnMDLuom/DailyMaxIntake?api_key=keyuiXff1qX79IbYA"

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
         type: 'bar'
     },


     })
    

