var previousDays, previousHours, previousMins, previousSecs = 0;

window.onload = function() {
  countUpFromTime("Jun 29, 2024 23:30:00 UTC+2", 'countup');
};

function countUpFromTime(countFrom, id) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
      countFrom = new Date(countFrom),
      timeDifference = (now - countFrom);
    
  var secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAHour = 60 * 60 * 1000;
    
  currentDays = Math.floor(timeDifference / (secondsInADay) * 1);
  // years = Math.floor(currentDays / 365);
  // if (years > 1) currentDays = currentDays - (years * 365);
  currentHours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
  currentMins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
  currentSecs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

  // zerofill
  currentDays = (currentDays < 10 ? '0' : '') + currentDays;
  currentHours = (currentHours < 10 ? '0' : '') + currentHours;
  currentMins = (currentMins < 10 ? '0' : '') + currentMins;
  currentSecs = (currentSecs < 10 ? '0' : '') + currentSecs;
  
  var counter = document.getElementById(id);

  if (currentDays !== previousDays) {
    previousDays = currentDays === '00' ? '00' : currentDays - 1;
    previousDays = (previousDays < 10 ? '0' : '') + previousDays; // zerofill

    counter.getElementsByClassName('days')[0].innerHTML = currentDays;
    counter.getElementsByClassName('days')[1].setAttribute('data-value', currentDays);
    counter.getElementsByClassName('days')[2].setAttribute('data-value', previousDays);
    counter.getElementsByClassName('days')[3].setAttribute('data-value', previousDays);
    
    document.getElementById('days').classList.remove('flip');
    void document.getElementById('days').offsetWidth;
    document.getElementById('days').classList.add('flip');

    previousDays = currentDays;
  }

  if (currentHours !== previousHours) {
    previousHours = currentHours === '00' ? '23' : currentHours - 1;
    previousHours = (previousHours < 10 ? '0' : '') + previousHours; // zerofill

    counter.getElementsByClassName('hours')[0].innerHTML = currentHours;
    counter.getElementsByClassName('hours')[1].setAttribute('data-value', currentHours);
    counter.getElementsByClassName('hours')[2].setAttribute('data-value', previousHours);
    counter.getElementsByClassName('hours')[3].setAttribute('data-value', previousHours);
    
    document.getElementById('hours').classList.remove('flip');
    void document.getElementById('hours').offsetWidth;
    document.getElementById('hours').classList.add('flip');

    previousHours = currentHours;
  }

  if (currentMins !== previousMins) {
    previousMins = currentMins === '00' ? '59' : currentMins - 1;
    previousMins = (previousMins < 10 ? '0' : '') + previousMins; // zerofill

    counter.getElementsByClassName('minutes')[0].innerHTML = currentMins;
    counter.getElementsByClassName('minutes')[1].setAttribute('data-value', currentMins);
    counter.getElementsByClassName('minutes')[2].setAttribute('data-value', previousMins);
    counter.getElementsByClassName('minutes')[3].setAttribute('data-value', previousMins);
    
    document.getElementById('minutes').classList.remove('flip');
    void document.getElementById('minutes').offsetWidth;
    document.getElementById('minutes').classList.add('flip');

    previousMins = currentMins;
  }

  if (currentSecs !== previousSecs) {
    previousSecs = currentSecs === '00' ? '59' : currentSecs - 1;
    previousSecs = (previousSecs < 10 ? '0' : '') + previousSecs; // zerofill

    counter.getElementsByClassName('seconds')[0].innerHTML = currentSecs;
    counter.getElementsByClassName('seconds')[1].setAttribute('data-value', currentSecs);
    counter.getElementsByClassName('seconds')[2].setAttribute('data-value', previousSecs);
    counter.getElementsByClassName('seconds')[3].setAttribute('data-value', previousSecs);
    
    document.getElementById('seconds').classList.remove('flip');
    void document.getElementById('seconds').offsetWidth;
    document.getElementById('seconds').classList.add('flip');

    previousSecs = currentSecs;
  }

  clearTimeout(countUpFromTime.interval);
  countUpFromTime.interval = setTimeout(() => countUpFromTime(countFrom, id), 1000);
}
