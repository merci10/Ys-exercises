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
  const $tbody = $('.tbody');


  // tableを作成する関数
  // ---------------------------------------------------------------------------
  // 配列のデータを使い完璧なテーブルを作成する
  const createPerfectTable = () => {
    // 最初にテーブルをからにする
    $tbody.empty();
    for (let i = 0; i < constellations.length; i++) {
      const $idTd       = $('<td>').text(constellations[i].id);
      const $japaneseTd = $('<td>').text(constellations[i].jpName).addClass('japaneseTd');
      const $latinTd    = $('<td>').text(constellations[i].latinName);
      const $tr         = $('<tr>').addClass('constellationTr')
                                   .append($idTd)
                                   .append($japaneseTd)
                                   .append($latinTd);
      $tbody.append($tr);
    }
  }
  // 渡された正規表現に当てはまるテーブルを作成する
  const createResultTable = (reg) => {
    // 最初にテーブルをからにする
    $tbody.empty();
    for (let i = 0; i < constellations.length; i++) {
      const jpName = constellations[i].jpName;
      if (jpName.match(reg)) {
        const $idTd       = $('<td>').text(constellations[i].id);
        const $japaneseTd = $('<td>').text(jpName).addClass('japaneseTd');
        const $latinTd    = $('<td>').text(constellations[i].latinName);
        const $tr         = $('<tr>').addClass('constellationTr')
                                     .append($idTd)
                                     .append($japaneseTd)
                                     .append($latinTd);
        $tbody.append($tr);
      }
      continue;
    }
  }


  // editFieldに値を入れるまでの処理
  // ---------------------------------------------------------------------------
  const setEditField = (tr) => {
    const id       = $('td:nth-child(1)', tr).text();
    const japanese = $('td:nth-child(2)', tr).text();
    const latin    = $('td:nth-child(3)', tr).text();
    $editId.text(id);
    $japaneseInput.val(japanese);
    $latinInput.val(latin);
  }
  // 選択されたtrのbackgroundを変える
  const switchBgTrColor = (tr) => {
    $('.bg_orange').removeClass('bg_orange');
    tr.addClass('bg_orange');
  }
  // tbodyの中のtrをクリックした時の処理
  $tbody.on('click', '.constellationTr', (el) => {
    const $targetTr = $(el.currentTarget);
    setEditField($targetTr);
    switchBgTrColor($targetTr);
  });


  // editBtnのclickアクション
  // ---------------------------------------------------------------------------
  // idから編集するデータを取得して編集する
  const editData = (id, japanese, latin) => {
    // idに1を引いた数がdataのindex番号になる
    const constellation = constellations[id - 1];
    constellation.jpName    = japanese;
    constellation.latinName = latin;
  }
  // editBtnを押した時のvalidation
  const validateEditField = (id, japanese, latin) => {
    if (id === '') {
      alert('テーブルから編集したい要素を選択してください');
      return false;
    } else if (japanese === '' || latin === '') {
      alert('値が正確に入力されていません');
      return false;
    }
    return true;
  }
  // EditFieldの値を空にする
  const initEditInputs = () => {
    $editId.text('');
    $japaneseInput.val('');
    $latinInput.val('');
  }

  $editBtn.on('click', () => {
    const id        = $editId.text();
    const japanese  = $japaneseInput.val();
    const latin     = $latinInput.val();
    const bool = validateEditField(id, japanese, latin);

    if (bool) {
      editData(id, japanese, latin);
      createPerfectTable();
      $('.bg_orange').removeClass('bg_orange');
      initEditInputs();
    }
  });


  // searchBtnのclickアクション
  // ---------------------------------------------------------------------------
  // searchInputが空の時に完璧なテーブルを作成しclickアクションを中断する
  // ※必要ないぽい
  // const validateSearchInput = (val) => {
  //   if (val === '') {
  //     createPerfectTable();
  //     return false;
  //   }
  //   return ture;
  // }
  $searchBtn.on('click', () => {
    const searchVal = $searchInput.val();
    const reg = RegExp(searchVal);

    // const bool = validateSearchInput(searchVal);
    // if (bool) {
    //   createResultTable();
    // }
    createResultTable(reg);
  });


  // 初期設定(画面ロード時)
  // ---------------------------------------------------------------------------
  createPerfectTable();

})();
