const timeDisplay = document.getElementById('timeDisplay');
const dateDisplay = document.getElementById('dateDisplay');

function updateClock() {
  const now = new Date();

  // format time as SS : MM : HH
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  timeDisplay.textContent = `${s} : ${m} : ${h}`;

  // format date with Arabic day+month names but Latin digits
  const dateOpts = {
    weekday: 'long',
    year:   'numeric',
    month:  'long',
    day:    'numeric',
    numberingSystem: 'latn' // ensure Latin digits
  };
  const dateStr = new Intl.DateTimeFormat('ar-EG-u-nu-latn', dateOpts).format(now);
  dateDisplay.textContent = dateStr;
}

setInterval(updateClock, 1000);
updateClock();
