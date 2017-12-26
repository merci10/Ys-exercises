(() => {

  const japaneseConstellations = [
    '牡羊座',
    '牡牛座',
    '双子座',
    '蟹座',
    '獅子座',
    '乙女座',
    '天秤座',
    '蠍座',
    '射手座',
    '山羊座',
    '水瓶座',
    '魚座'
  ];

  const latinConstellations = [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
    'Aquarius',
    'Pisces'
  ];

  // newCreateFieldのエレメント
  const $newJapaneseInput =  $('.newJapaneseInput');
  const $newLatinInput = $('.newLatinInput');
  const $createBtn = $('.createBtn');

  // searchWrapのエレメント
  const $searchInput = $('.searchInput');
  const $searchBtn = $('.searchBtn');

  const $constellationsTable = $('.constellationsTable');
  const $thead = $('.thead');

  // 画面が表示された時にテーブルを作成する
  const createPerfectTable = () => {
    const length = japaneseConstellations.length;
    for (let i = 0; i < length; i++) {
      const idTd       = $('<td>').text(i + 1);
      const japaneseTd = $('<td>').text(japaneseConstellations[i]).addClass('japaneseConstellation');
      const latinTd    = $('<td>').text(latinConstellations[i]);
      const tr         = $('<tr>').addClass('constellationTr')
                          .append(idTd).append(japaneseTd).append(latinTd);
      $constellationsTable.append(tr);
    }
  }

  const addElement = (japanese, latin) => {
    japaneseConstellations.push(japanese);
    latinConstellations.push(latin);
    const i = japaneseConstellations.length;
    const idTd       = $('<td>').text(i);
    const japaneseTd = $('<td>').text(japanese).addClass('japaneseConstellation');
    const latinTd    = $('<td>').text(latin);
    const tr         = $('<tr>').addClass('constellationTr')
                        .append(idTd).append(japaneseTd).append(latinTd);
    $constellationsTable.append(tr);
  }

  $createBtn.on('click', () => {
    // createFieldのvalidate
    const japanese = $newJapaneseInput.val();
    const latin = $newLatinInput.val();
    if (japanese === '' || latin === '') {
      alert('値が正確に入力されていません');
      return;
    }
    addElement(japanese, latin);
    // クリックしたらインップトの値を消す
    $newJapaneseInput.val('');
    $newLatinInput.val('');
  });

  const createMatchTable = () => {
    // 最初にtableの要素をからにしてthead部分を入れる
    $constellationsTable.empty()
                        .append($thead);
    const searchInputVal = $searchInput.val();
    const reg = RegExp(searchInputVal);
    japaneseConstellations.forEach((jpName, i) => {
      if (jpName.match(reg)) {
        const idTd       = $('<td>').text(i + 1);
        const japaneseTd = $('<td>').text(japaneseConstellations[i]).addClass('japaneseConstellation');
        const latinTd    = $('<td>').text(latinConstellations[i]);
        const tr         = $('<tr>').addClass('constellationTr')
                            .append(idTd).append(japaneseTd).append(latinTd);
        $constellationsTable.append(tr);
      }
    });
    // $('.constellationTr').each((index, tr) => {
    //   const $tr = $(tr);
    //   const constellationName = $tr.find('.japaneseConstellation').text();
    //
    //   if(constellationName.match(reg)) $constellationsTable.append($tr);
    // });
    // inputがからの場合全てのtrを表示する
    if (searchInputVal === '') {
      $('.constellationTr').each((index, tr) => {
        $constellationsTable.append($(tr));
      });
    }
  }

  $searchBtn.on('click', createMatchTable);

  createPerfectTable();

})();
