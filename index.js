// define all variables needed
const meter1 = document.getElementById('meter1');
const meterSelector = document.querySelector('.meter-selector');
const controlButtons = document.querySelectorAll('.btn');

// setup first progress bar
controlButtons.forEach( function(btn) {
  $(btn).on('click', updateMeter.bind(this, meter1, btn));
})

// setup change to update eventListeners
meterSelector.addEventListener('change', function(e) {
  const num = e.target.value;
  const activeMeter = document.querySelector(`#meter${num}`);

  controlButtons.forEach( function(btn) {
    $(btn).off('click');
    $(btn).on('click', updateMeter.bind(this, activeMeter, btn));
  })
})

function updateMeter(activeMeter, btn) {
  const value = Number(btn.innerText);
  activeMeter.value += value;
}