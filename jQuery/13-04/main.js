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
  //searchWrapのエレメント
  const $searchInput = $('.searchInput');
  const $searchBtn = $('.searchBtn');

  const $tbody = $('.tbody');

  // tableを作成する関数
  // ---------------------------------------------------------------------------
  // 配列のデータを使い完璧なテーブルを作成する
  const createPerfectTable = () => {
    // 最初にテーブルをからにする
    $tbody.empty();
    for (let i = 0; i < constellations.length; i++) {
      const $deleteBtn  = $(`<td><button type="button" class="deleteBtn">削除</button></td>`);
      const $idTd       = $('<td>').text(constellations[i].id).addClass('idTd');
      const $japaneseTd = $('<td>').text(constellations[i].jpName).addClass('japaneseTd');
      const $latinTd    = $('<td>').text(constellations[i].latinName);
      const $tr         = $('<tr>').addClass('constellationTr')
                                   .append($deleteBtn)
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
        const $deleteBtn  = $(`<td><button type="button" class="deleteBtn">削除</button></td>`);
        const $idTd       = $('<td>').text(constellations[i].id).addClass('idTd');
        const $japaneseTd = $('<td>').text(jpName).addClass('japaneseTd');
        const $latinTd    = $('<td>').text(constellations[i].latinName);
        const $tr         = $('<tr>').addClass('constellationTr')
                                     .append($deleteBtn)
                                     .append($idTd)
                                     .append($japaneseTd)
                                     .append($latinTd);
        $tbody.append($tr);
      }
      continue;
    }
  }


  // deleteBtn関連
  // --------------------------------------------------------------------------
  // DOMから取得したidと配列の要素のidが同じものを削除する
  const deleteData = (targetId) => {
    constellations.forEach((constellation, index) => {
      if (constellation.id === targetId) {
        constellations.splice(index, 1);
      }
    })
  }

  // deleteBtnをクリックした時のアクション
  // 新しく作成したテーブルでもdeleteBtnが発火するようにon clickを使っている
  $tbody.on('click', '.deleteBtn', (el) => {
    console.log(el);
    const $targetTr = $(el.target).parents('.constellationTr');
    // 削除するテーブルのidを取得(integer)
    const targetId_str = $targetTr.find('.idTd').text();
    const targetId_int = parseInt(targetId_str);

    deleteData(targetId_int);
    createPerfectTable();
  })


  // searchBtnのclickアクション
  // ---------------------------------------------------------------------------
  $searchBtn.on('click', () => {
    const searchVal = $searchInput.val();
    const reg = RegExp(searchVal);

    createResultTable(reg);
  });


  // 初期設定(画面ロード時)
  // ---------------------------------------------------------------------------
  createPerfectTable();

})();
