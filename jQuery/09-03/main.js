(() => {

  const $kanjiInput = $('.kanjiInput');
  const $slashInput = $('.slashInput');

  const $replaceBtn = $('.replaceBtn');

  const newDate = new Date();
  const fullYear = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  // 月と日を二桁に修正
  const mmonth = `0${month}`.slice(-2);
  const ddate = `0${date}`.slice(-2);

  $kanjiInput.val(`${fullYear}年${mmonth}月${ddate}日`)

  $replaceBtn.on('click', () => {
    const beforeText = $kanjiInput.val();
    const afterText = beforeText.replace(/^(\d*).(\d*).(\d*).$/, '$1/$2/$3');
    $slashInput.val(afterText);
  });
})();
