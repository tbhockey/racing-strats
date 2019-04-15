function calculateLaps() {
  var $raceTimeHour  = $('#race-time-hour').val();
  var $raceTimeMin   = $('#race-time-minute').val();
  var $lapTimeMin    = $('#lap-time-minute').val();
  var $lapTimeSecond = $('#lap-time-second').val();
  var $totalLaps     = $('#total-laps').val();

  var raceTimeSeconds = timeToSeconds($raceTimeHour, $raceTimeMin, 0);
  var lapTimeSeconds  = timeToSeconds(0, $lapTimeMin, $lapTimeSecond);
  var laps            = Math.ceil(raceTimeSeconds / lapTimeSeconds);

  $('#total-laps').val(laps);
};

function timeToSeconds(hours, minutes, seconds) {
  var hours   = (parseInt(hours) || 0) * 3600;
  var minutes = (parseInt(minutes) || 0) * 60;
  var seconds = parseInt(seconds) || 0;

  return hours + minutes + seconds;
};

$(document).ready(function() {

  calculateLaps();

  $('input').change(function() {
    calculateLaps();
  });

});
