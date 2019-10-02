 //  var $       = require( 'jquery' );
 //  var dt      = require( 'datatables.net' )( window, $ );
 //  var buttons = require( 'datatables.net-buttons' )( window, $ );

    var dataset = [];



    var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1asg1epgBjVE4xACzO2ok4m7zOu9d1tmUYGbBc20JKns/pubhtml';
//google sheets
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: false,	
                      prettyColumnNames: false,
                      wanted: ["opportunities-gv-data"],
                     debug: true } )
  }

  function showInfo(data, tabletop) {
    console.log(data);
    //fill dataset with data array(one column here) i got from tabletop
    for (e of data["opportunities-gv-data"].elements) {
    	dataset.push(e);
    }
    //datatable have dataset infos 
    $('#table_id').DataTable({
      // "paging": false,
       data: dataset,
       columns: [
       {title: "Project Name", data:"title"},
       {title: "Program", data:"programmesshortname"},
       {title: "SDG", data: "sdginfosdgtargetgoalindex"},
       {title: "LC",data:"hostlcfullname"},
       {title: "Duration",data:"duration"},
       {title: "Start date",data:"earlieststartdate"},
       {title: "End date",data:"latestenddate"},
       //{title: "Opportunity Link" },   
       {title: "Opening", data:"openings"},
       {title: "Available Opening", data:"availableopenings"},
       {title: "Meals/Day", data:"logisticsinfofoodcovered"},
       ]}
    );	
  }

//ps this is on react --look for equal in JS
//google sheets
/*componentDidMount() {
    Tabletop.init({
      key: '1BJk9riIpNyulObL-B3UfKcWr2KdmA6UFGMZXNmeRM-0',
      callback: googleData => {
        this.setState({
          dataset: googleData
        })
      },
      simpleSheet: true
    })
  }*/
 //datatables display data   
$(document).ready( function () {
	init();
   
} );