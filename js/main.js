function calculateFuel() {
  var fuelPerLap      = $('#fuel-per-lap').val();
  var totalLaps       = $('#total-laps').val();
  var tankCapacity    = $('#tank-capacity').val();

  var totalFuelNeeded = Math.ceil((parseFloat(fuelPerLap) * parseInt(totalLaps))) || 0;
  var pitsNeeded      = Math.floor(parseInt(totalFuelNeeded) / parseInt(tankCapacity)) || 0;
  var finalFuelNeeded = totalFuelNeeded - (tankCapacity * pitsNeeded);

  $('.total-fuel-needed').text(totalFuelNeeded);
  $('.total-litres').text(totalFuelNeeded);
  $('.final-litres').text(finalFuelNeeded);
  $('.pit-count').text(pitsNeeded);
};

function calculateLaps() {
  var raceTimeHour  = $('#race-time-hour').val();
  var raceTimeMin   = $('#race-time-minute').val();
  var lapTimeMin    = $('#lap-time-minute').val();
  var lapTimeSecond = $('#lap-time-second').val();
  var totalLaps     = $('#total-laps').val() || 0;

  var raceTimeSeconds = timeToSeconds(raceTimeHour, raceTimeMin, 0);
  var lapTimeSeconds  = timeToSeconds(0, lapTimeMin, lapTimeSecond);
  var calculatedLaps  = Math.ceil(raceTimeSeconds / lapTimeSeconds) || 0;

  if(raceTimeSeconds > 0) {
    // Use calculated lap value.
    $('#total-laps').val(calculatedLaps);
    $('.lap-count').text(calculatedLaps);
  } else {
    // Use direct lap value.
    $('.lap-count').text(totalLaps);
  };
};

function timeToSeconds(hours, minutes, seconds) {
  var hours   = (parseInt(hours) || 0) * 3600;
  var minutes = (parseInt(minutes) || 0) * 60;
  var seconds = parseFloat(seconds) || 0;

  return hours + minutes + seconds;
};

$(document).ready(function() {

  calculateLaps();
  calculateFuel();

  $('input').change(function() {
    calculateLaps();
    calculateFuel();
  });

});
