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
  // 月替えボタン
  const $prevBtn = $('.prevBtn');
  const $nextBtn = $('.nextBtn');
  // calendar_title関連
  const $year = $('.calendar_year');
  const $month = $('.calenadar_month');
  // table関連
  const $thead = $('.calendar_thead');
  const $tbody = $('.calendar_tbody');
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const insertCalendarTitle = (year, month) => {
    $year.text(year);
    $month.text(month + 1);
  }

  // 曜日の部分を作成する
  const createCalandarThead = () => {
    let tableHead = ''; // theadの中身になるもの
    let tr = '<tr>';
    for (let i = 0; i < days.length; i++) {
      let th = `<th class="calendar_elem">${days[i]}</th>`;
      tr += th;
    }
    tableHead = tr + '</tr>';
    $thead.html(tableHead);
  }

  // 日にちの部分を作成する
  const createCalandarTbody = (year, month, today) => {
    const startDate = new Date(year, month, 1); // 今の月の最初の日
    const endDate = new Date(year, month + 1, 0); // 今の月の最後の日
    // [注意]startは曜日を取得しているが、endは日にち
    const startDay = startDate.getDay(); // 今の月の最初の日の曜日
    const endDay = endDate.getDate(); // 今の月の最後の日にち
    let textSkip = true; // 日にちを埋めるようのフラグ
    let textDate = 1; // 日付(カウントアップしていく)

    let tableBody = ''; // tbodyの中身になるもの
    for (let row = 0; row < 6; row++) {
      let tr = '<tr>';

      for (let col = 0; col < 7; col++) {
        if (row === 0 && startDay === col) {
          textSkip = false;
        }
        if (textDate > endDay) {
          textSkip = true;
        }

        let isToday = textDate === today.getDate();
        let className = isToday ? 'is_today' : '';
        let td;
        if (textSkip === false) {
          td = `<td class="calendar_elem calendar_day ${className}">${textDate}</td>`
          textDate++
        } else if (textSkip === true) {
          td = `<td class="calendar_elem"></td>`;
        }
        tr += td;
      }
      tr += '</tr>';
      tableBody += tr;
    }
    $tbody.html(tableBody);
  }

  const setUp = () => {
    createCalandarThead();
    createCalandarTbody(currentYear, currentMonth, today);
    insertCalendarTitle(currentYear, currentMonth);
  }

  setUp();
})();
