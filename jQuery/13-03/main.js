(() => {
  // tableの初期データ
  // ---------------------------------------------------------------------------
  const constellations = [
    {id: 1,  jpName: '牡羊座', latinName: 'Aries'},
    {id: 2,  jpName: '牡牛座', latinName: 'Taurus'},
    {id: 3,  jpName: '双子座', latinName: 'Gemini'},
    {id: 4,  jpName: '蟹座',   latinName: 'Cancer'},
    {id: 5,  jpName: '獅子座', latinName: 'Leo'},
    {id: 6,  jpName: '乙女座', latinName: 'Virgo'},
    {id: 7,  jpName: '天秤座', latinName: 'Libra'},
    {id: 8,  jpName: '蠍座',   latinName: 'Scorpio'},
    {id: 9,  jpName: '射手座', latinName: 'Sagittarius'},
    {id: 10, jpName: '山羊座', latinName: 'Capricorn'},
    {id: 11, jpName: '水瓶座', latinName: 'Aquarius'},
    {id: 12, jpName: '魚座',   latinName: 'Pisces'},
  ];


  // 変数宣言
  // --------------------------------------------------------------------------
  // eidtFieldのエレメント
  const $editId = $('.editId');
  const $japaneseInput =  $('.japaneseInput');
  const $latinInput = $('.latinInput');
  const $editBtn = $('.editBtn');
  // searchWrapのエレメント
  const $searchInput = $('.searchInput');
  const $searchBtn = $('.searchBtn');
  // 編集するテーブル
  const $thead = $('.tbody');


  // tableを作成する関数
  // ---------------------------------------------------------------------------
  // 配列のデータを使い完璧なテーブルを作成する
  const createPerfectTable = () => {
    $tbody.empty();
    for (let i = 0; i < constellations.length; i++) {
      const $idTd       = $('<td>').text(constellations[i].id);
      const $japaneseTd = $('<td>').text(constellations[i].jpName).addClass('japaneseTd');
      const $latinTd    = $('<td>').text(constellations[i].latinName);
      const $tr         = $('<tr>').append($idTd)
                                  .append($japaneseTd)
                                  .append($latinTd);
      $tbody.append($tr);
    }
  }
  // 渡された正規表現に当てはまるテーブルを作成する
  const createResultTable = (reg) => {
    $tbody.empty();
    for (let i = 0; i < constellations.length; i++) {
      const jpName = constellations[i].jpName;
      if (jpName.match(reg)) {
        const $idTd       = $('<td>').text(constellations[i].id);
        const $japaneseTd = $('<td>').text(jpName).addClass('japaneseTd');
        const $latinTd    = $('<td>').text(constellations[i].latinName);
        const $tr         = $('<tr>').append($idTd)
                                     .append($japaneseTd)
                                     .append($latinTd);
        $tbody.append($tr);
      }
      continue;
    }
  }


  // editBtn関連
  // ---------------------------------------------------------------------------
  const editElement = (id, japanese, latin) => {
    const $editTr = $('.constellationTr.bg-orange');
    $('td:eq(0)', $editTr).text(id);
    $('td:eq(1)', $editTr).text(japanese);
    $('td:eq(2)', $editTr).text(latin);
    $editTr.removeClass('bg-orange');
  }

  $editBtn.on('click', () => {
    const id = $editId.text();
    const japanese = $japaneseInput.val();
    const latin = $latinInput.val();
    // editFieldのvalidate
    if (japanese === '' || latin === '') {
      alert('値が正確に入力されていません');
      return;
    }
    editElement(id, japanese, latin);
    // クリックしたらインップトの値を消す
    $editId.text('');
    $japaneseInput.val('');
    $latinInput.val('');
  });


  // searchBtnのclickアクション
  // ---------------------------------------------------------------------------
  // searchInputが空の時に完璧なテーブルを作成しclickアクションを中断する
  const validateSearchInput = (val) => {
    if (val === '') {
      createPerfectTable();
      return;
    }
  }

  $searchBtn.on('click', () => {
    const searchVal = $searchInput.val();
    const reg = RegExp(searchVal);

    validateSearchInput(searchVal);
    createResultTable(reg);
  });


  // 初期設定(画面ロード時)
  // ---------------------------------------------------------------------------
  createPerfectTable();

})();
