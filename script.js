    
    var $  = require( 'jquery' );
    var dt = require( 'datatables.net' )();
    var buttons = require( 'datatables.net-buttons' )();
    var dataset = [
        ["---","---","--","--","--","--","--","--","--","--","--","--","--"],
        ["---","---","--","--","--","--","--","--","--","--","--","--","--"],
        ["---","---","--","--","--","--","--","--","--","--","--","--","--"],
        ["---","---","--","--","--","--","--","--","--","--","--","--","--"],
    ];
    //tabletop gets data from google sheet api 
//ps this is on react --look for equal in JS
//google sheets
/*componentDidMount() {
    Tabletop.init({
      key: '1_f0LP10YhzHRqcaDv3rXprQfFR_0wDjWKn-cDJwZ1JU',
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