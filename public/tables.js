
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
      console.log(e);
    }
    //delete unnecessary lines 
    var dataset1 = dataset.filter(function(obj){
      return obj.title !== "/title";
     });
   
    //link update
     dataset1.forEach(myFunction);
     function myFunction(obj, index,dataset1) {
     dataset1[index].id = "https://aiesec.org/opportunity/"+ obj.id ;
    };
    
    $('#table_id').DataTable({
      // "paging": false,
       data: dataset1,
       columns: [
       {title: "Program", data:"programmesshortname"},
       {title: "Project Name", data:"title"},
       {title: "SDG", data: "sdginfosdgtargetgoalindex"},
       {title: "LC",data:"hostlcfullname"},
       {title: "Duration",data:"duration"},
       {title: "Start date",data:"earlieststartdate"},
       {title: "End date",data:"latestenddate"},
       {title: "Opportunity Link",data:"id" },   
       {title: "Opening", data:"openings"},
       {title: "Available Opening", data:"availableopenings"},
       {title: "Meals/Day", data:"logisticsinfofoodcovered"},
       ],
       className: 'mdl-data-table__cell--non-numeric'
      // "order": [[ 1, "desc" ]]
      }
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