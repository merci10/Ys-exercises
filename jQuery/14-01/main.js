(() => {
  // モーダルの開閉
  // -------------------------------------------------------------
  const openModal = () => {
    $('.gray_bg').addClass('is_visible');
    $('.modal_window').addClass('is_visible');
  }

  const closeModal = () => {
    $('.gray_bg').removeClass('is_visible');
    $('.modal_window').removeClass('is_visible');
  }

  $('.openBtn').on('click', () => {
    openModal();
  });

  $('.gray_bg').on('click', () => {
    closeModal();
  });


  // 変数宣言
  // ------------------------------------------------------------
  // 曜日の配列
  const days = ["日","月","火","水","木","金","土"];
  // 選択された日付を表示するinput
  const $dateInput = $('.dateInput');
  // 月替えボタン
  const $prevBtn = $('.prevBtn');
  const $nextBtn = $('.nextBtn');
  // calendar_title関連
  const $year = $('.calendar_year');
  const $month = $('.calenadar_month');
  // table関連
  const $thead = $('.calendar_thead');
  const $tbody = $('.calendar_tbody');
  const now = new Date();
  // 表示されているカレンダーの情報(この数値を変えていく)
  let currentYear = now.getFullYear();
  let currentMonth = now.getMonth();
  let currentDate = now.getDate();


  // カレンダーを作るための関数
  // =================================================================
  const insertCalendarTitle = (year, month) => {
    $year.text(year);
    $month.text(month + 1);
  }

  // 曜日の部分を作成する
  const createCalendarThead = () => {
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
  const createCalendarTbody = (year, month, today) => {
    const isNowYM = now.getFullYear() === year && now.getMonth() === month ? true : false;
    const startDate = new Date(year, month, 1); // 今の月の最初の日
    const endDate = new Date(year, month + 1, 0); // 今の月の最後の日
    // [注意]startは曜日を取得しているが、endは日にち
    const startDay = startDate.getDay(); // 今の月の最初の日の曜日
    const endDay = endDate.getDate(); // 今の月の最後の日にち
    let isTextSkip = true; // 日にちを埋めるようのフラグ
    let numDate = 1; // 日付(カウントアップしていく)

    let tableBody = ''; // tbodyの中身になるもの
    for (let row = 0; row < 6; row++) {
      let tr = '<tr>';

      for (let col = 0; col < 7; col++) {
        if (row === 0 && startDay === col) {
          isTextSkip = false;
        }
        if (numDate > endDay) {
          isTextSkip = true;
        }

        let isToday = (numDate === today);
        let className = isNowYM && isToday ? 'is_today' : '';
        let td;
        if (isTextSkip === false) {
          td = `<td class="calendar_elem calendar_day ${className}">${numDate}</td>`
          numDate++
        } else if (isTextSkip === true) {
          td = `<td class="calendar_elem"></td>`;
        }
        tr += td;
      }
      tr += '</tr>';
      tableBody += tr;
    }
    $tbody.html(tableBody);
  }

  // カレンダーの初期設定
  const setUp = () => {
    insertCalendarTitle(currentYear, currentMonth);
    createCalendarThead();
    createCalendarTbody(currentYear, currentMonth, currentDate);
  }


  // prevBtnを押した時のアクション
  // ---------------------------------------------------------------
  $prevBtn.on('click', () => {
    const prev = new Date(currentYear, currentMonth - 1);
    currentYear = prev.getFullYear();
    currentMonth = prev.getMonth();
    insertCalendarTitle(currentYear, currentMonth);
    createCalendarTbody(currentYear, currentMonth, currentDate);
  });


  // nextBtnを押した時のアクション
  // ---------------------------------------------------------------
  $nextBtn.on('click', () => {
    const next = new Date(currentYear, currentMonth + 1);
    currentYear = next.getFullYear();
    currentMonth = next.getMonth();
    insertCalendarTitle(currentYear, currentMonth);
    createCalendarTbody(currentYear, currentMonth, currentDate);
  });


  // カレンダーの日にちをクリックした時のアクション
  // --------------------------------------------------------------
  $tbody.on('click', '.calendar_day', (el) => {
    const $target = $(el.target);
    const year = currentYear;
    const month = currentMonth;
    const day = $target.text();
    $dateInput.val(`${year}/${month + 1}/${day}`)
    closeModal();
  });


  // 画面ロード時の処理
  setUp();
})();
