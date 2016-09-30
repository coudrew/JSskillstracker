//Initialization

//JQuery plugins
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});

//////////////////////////////////////////////////////////////
//////////////////////// Set-Up //////////////////////////////
//////////////////////////////////////////////////////////////

var margin = {top: 100, right: 100, bottom: 100, left: 100},
  width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
  height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

//////////////////////////////////////////////////////////////
////////////////////////// Data //////////////////////////////
//////////////////////////////////////////////////////////////


function data(){
  var charts = [];
  for (i=0; i<users.length; i++){
    var chart = [], currUser = users[i];
    for (j=0;j<Object.keys(user).length; j++){
      chart.push({axis: currUser[`skill${j}`].title, value: currUser.getAverage(currUser[`skill${j}`])});
    }
    charts.push(chart);
  }
  return charts;

  };

//////////////////////////////////////////////////////////////
//////////////////// Draw the Chart //////////////////////////
//////////////////////////////////////////////////////////////

var color = d3.scale.ordinal()
  .range(["#EDC951","#CC333F","#00A0B0"]);

var radarChartOptions = {
  w: width,
  h: height,
  margin: margin,
  maxValue: 1,
  levels: 5,
  roundStrokes: true,
  color: color
};
//Call function to draw the Radar chart
RadarChart(".radarChart", data(), radarChartOptions);


//Update graph when button is pressed

$('.sbtn').click(function(){
  var id = $(this).attr('id').firstEqualSplit();
  user.toggleValue(id[0], id[1]);
  $(this).toggleClass("red");
  var done = document.getElementById(this.id+'check');
  this.childNodes[0].textContent = this.childNodes[0].textContent == 'Incomplete' ? 'Complete' : 'Incomplete';
  done.innerHTML = done.innerHTML == '' ? 'done' : '';
  RadarChart(".radarChart", data(), radarChartOptions);
});

//Toggle state of 'Complete' button
function toggleButton(button){
  console.log(button.childNodes[1]);
}
