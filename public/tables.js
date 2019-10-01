    
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
    for (e of data["opportunities-gv-data"].elements) {
    	dataset.push(e);
    }
    $('#table_id').DataTable({
      // "paging": false,
       data: dataset,
       columns: [
       {title: "Project Name", data:"title"},
       {title: "SDG", data: "sdginfosdgtargetgoalindex"},
       {title: "LC"},
       {title: "Duration"},
       {title: "Start date - End date"},
       {title: "OPP Link"},
       {title: "Opportunity Status"},
       {title: "TN Fees"},
       {title: "Accomondation type"},
       {title: "Meals/Day"},
       {title: "#Opening"},
       {title: "#Opening available"},
       {title: "Promotional Materials drive (Posters, videos...etc)"},


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