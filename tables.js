    
   var $       = require( 'jquery' );
   var dt      = require( 'datatables.net' )( window, $ );
   var buttons = require( 'datatables.net-buttons' )( window, $ );

    var dataset = [
        ["A","---","--","--","--","--","--","--","--","--","--","--","--"],
        ["B","---","--","--","--","--","--","--","--","--","--","--","--"],
        ["C","---","--","--","--","--","--","--","--","--","--","--","--"],
        ["D","---","--","--","--","--","--","--","--","--","--","--","--"],
    ];

    var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSP04OPVIT2nLNUfqjmyHthSTFTwnmWAqLhN4uHgMEy5h4nmHJ-4x5j8e71G5I5_waC82mza77IZmIJ/pubhtml';
//google sheets
  function init() {
    Tabletop.init( { key: '1BJk9riIpNyulObL-B3UfKcWr2KdmA6UFGMZXNmeRM-0',
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    alert('Successfully processed!')
    console.log(data);
  }

  window.addEventListener('DOMContentLoaded', init)
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
   $('#table_id').DataTable({
      // "paging": false,
       data: dataset,
       columns: [
       {title: "Project Name"},
       {title: "SDG"},
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
} );