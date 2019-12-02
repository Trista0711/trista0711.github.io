$(document).ready(function(){


    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appkggctHFt6xzWPZ/HealthyFood?api_key=keyqCeiJ2hCd2sEpn";
        
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.Food);
                       items.push(value.fields.Description);
                       items.push(value.fields.Category);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                    { title: "Name",
                      defaultContent:"" },
                     { title: "Description",
                         defaultContent:"" },
                     { title: "Category",
                       defaultContent:"" },
                 ]
             } );
        }); // end .getJSON
     }); // end button

}); // document ready
