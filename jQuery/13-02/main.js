(() => {

  // newCreateFieldのエレメント
  const $newJapaneseInput =  $('.newJapaneseInput');
  const $newLatinInput = $('.newLatinInput');
  const $createBtn = $('.createBtn');
  let   constellationId = 12

  // searchWrapのエレメント
  const $searchInput = $('.searchInput');
  const $searchBtn = $('.searchBtn');

  const $constellationsTable = $('.constellationsTable');
  const $constellationTrs = $('.constellationTr');
  const $thead = $('.thead');

  const addElement = (japanese, latin) => {
    constellationId  = constellationId + 1;
    const idTd       = $('<td>').text(constellationId);
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
  });

  // 絞り込んだ結果のtr要素を$constellationsTableに追加する(引数は絞り込む文字列)
  const appendMatchTr = (searchInputVal) => {
    const reg = RegExp(searchInputVal);
    $('.constellationTr').each((index, tr) => {
      const $tr = $(tr);
      const constellationName = $tr.find('.japaneseConstellation').text();

      if(constellationName.match(reg)) $constellationsTable.append($tr);
    });
    // inputがからの場合全てのtrを表示する
    if (searchInputVal === '') {
      $constellationTrs.each((index, tr) => {
        $constellationsTable.append($(tr));
      });
    }
  }

  const generateResultTable = () => {
    // 最初にtableの要素をからにしてthead部分を入れる
    $constellationsTable.empty()
                        .append($thead);
    const searchInputVal = $searchInput.val();
    appendMatchTr(searchInputVal);
  }

  $searchBtn.on('click', () => {
    generateResultTable();
  });
})();
