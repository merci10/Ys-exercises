(() => {

  let renewClock = () => {
    let newDate      = new Date();
    let hours        = newDate.getHours();
    let minutes      = newDate.getMinutes();
    let seconds      = newDate.getSeconds();

    hours   = hours   < 10 ? `0${hours}`   : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    $('.hoursWrap').text(`${hours}`);
    $('.minutesWrap').text(`${minutes}`);
    $('.secondsWrap').text(`${seconds}`);

    setTimeout(() => {
      renewClock();
    }, 100);
  }

  renewClock();

})();
