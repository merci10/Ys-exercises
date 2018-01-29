(() => {
  // モーダルの開閉
  // -------------------------------------------------------------
  $('.openBtn').on('click', () => {
    $('.gray_bg').addClass('is_visible');
    $('.modal_window').addClass('is_visible');
  });
  $('.gray_bg').on('click', () => {
    $('.gray_bg').removeClass('is_visible');
    $('.modal_window').removeClass('is_visible');
  });


  // 変数宣言
  // ------------------------------------------------------------
  // 曜日の配列
  const days = ["日","月","火","水","木","金","土"];

  // thead関連
  const $year = $('.calendar_year');
  const $month = $('.calenadar_month');
  const $thead = $('.calendar_thead');
  let tableHead = '';

  // tbody関連
  const $tbody = $('.calendar_tbody');
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const startDate = new Date(currentYear, currentMonth, 1); // 今の月の最初の日
  const endDate = new Date(currentYear, currentMonth + 1, 0); // 今の月の最後の日
  // [注意]startは曜日を取得しているが、endは日にち
  const startDay = startDate.getDay(); // 今の月の最初の日の曜日
  const endDay = endDate.getDate(); // 今の月の最後の日にち
  let textSkip = true; // 日にちを埋めるようのフラグ
  let textDate = 1; // 日付(カウントアップしていく)
  let tableBody = '';


  let tr = '<tr>';
  for (let i = 0; i < days.length; i++) {
    let th = `<th class="tableElement">${days[i]}</th>`;
    tr += th;
  }
  tableHead = tr;
  $thead.html(tableHead);

  for (let row = 0; row < 6; row++) {
    let tr = '<tr>';

    for (let col = 0; col < 7; col++) {
      if (row === 0 && startDay === col) {
        textSkip = false;
      }
      if (textDate > endDay) {
        textSkip = true;
      }

      let className = textDate === today.getDate() ? 'is_today' : '';
      let textTd = textSkip ? '' : textDate++;
      let td = `<td class="tableElement ${className}">${textTd}</td>`
      tr += td;
    }
    tr += '</tr>';
    tableBody += tr;
  }
  $tbody.html(tableBody);
})();
