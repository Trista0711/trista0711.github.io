$(document).ready(function(){


    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appEc48NUSnMDLuom/Recipes?api_key=keyqCeiJ2hCd2sEpn";
        
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.菜名);
                       items.push(value.fields.菜式);
                       items.push(value.fields.進食時間);
                       items.push(value.fields.卡路里_每份);
                       items.push(value.fields.難度);
                       items.push(value.fields.素食);
                       items.push(value.fields.純素);
                       items.push(value.fields.烹調方式);
                       items.push(value.fields.份量);
                       items.push(value.fields.食材類別);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                    { title: "菜名",
                      defaultContent:"" },
                     { title: "菜式",
                         defaultContent:"" },
                     { title: "進食時間",
                       defaultContent:"" },
                     { title: "卡路里_每份",
                       defaultContent:""},
                     { title: "難度",
                         defaultContent:""},
                     { title: "素食",
                       defaultContent:""},
                     { title: "純素",
                       defaultContent:""},
                     { title: "烹調方式",
                       defaultContent:""},
                     { title: "份量",
                       defaultContent:""}, 
                     { title: "食材類別",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

}); // document ready
