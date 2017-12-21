(() => {

  const $kanjiDateInput = $('.kanjiDateInput');
  const $simpleDateInput = $('.simpleDateInput');

  const $transBtn = $('.transBtn');

  const newDate = new Date(2017, 0, 15);
  const fullYear = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const mmonth = `0${month}`.slice(-2);
  const date = newDate.getDate();
  const ddate = `0${date}`.slice(-2);

  $kanjiDateInput.val(`${fullYear}年${mmonth}月${ddate}日`)

  $transBtn.on('click', () => {
    const beforeText = $kanjiDateInput.val();
    const afterText = beforeText.replace(/^(\d{4}).(\d{2}).(\d{2}).$/, '$1/$2/$3');
    $simpleDateInput.val(afterText);
  });
})();
