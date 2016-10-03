var $currentColor;
var redCount = 0;
var yellowCount = 0;
var greenCount = 0;
var blueCount = 0;

$(function(){
  //event listener for the color buttons on click, then will run addColor function
  $('.color-button').on('click', addColor);
});

// adds the color block
function addColor(){
  //sets the variable to the data value of the color button that was clicked
  $currentColor = $(this).attr('data-color');

  switch($currentColor){
    //if the color is red...
    case 'red':
      redCount++;
      $('.container').append('<div class="color-cube red"></div>');
      $('#red').text('Total red: ' + redCount);
    break;

    //if the color is yellow...
    case 'yellow':
      yellowCount++;
      $('.container').append('<div class="color-cube yellow"></div>');
      $('#yellow').text('Total yellow: ' + yellowCount);
    break;

    //if the color is green...
    case 'green':
      greenCount++;
      $('.container').append('<div class="color-cube green"></div>');
      $('#green').text('Total green: ' + greenCount);
    break;

    //if the color is blue...
    case 'blue':
      blueCount++;
      $('.container').append('<div class="color-cube blue"></div>');
      $('#blue').text('Total blue: ' + blueCount);
    break;
  }
}
