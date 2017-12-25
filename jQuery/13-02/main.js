(() => {

  const $searchInput = $('.searchInput');
  const $searchBtn = $('.searchBtn');
  const $constellationsTable = $('.constellationsTable');
  const $constellationTrs = $('.constellationTr'); // 星座を表示するtableのtr要素
  const $thead = $('.thead');

  // 絞り込んだ結果のtr要素を$constellationsTableに追加する(引数は絞り込む文字列)
  const appendTr = (searchInputVal) => {
    const reg = RegExp(searchInputVal);
    $constellationTrs.each((index, tr) => {
      const $tr = $(tr);
      const constellationName = $tr.find('.japaneseConstellation').text();

      if(constellationName.match(reg)) {
        $constellationsTable.append($tr);
      }
    })
  }

  const generateResultTable = () => {
    // 最初にtableの要素をからにしてthead部分を入れる
    $constellationsTable.empty()
                        .append($thead);
    const searchInputVal = $searchInput.val();


    appendTr(searchInputVal);

    // inputがからの場合全てのtrを表示する
    if (searchInputVal === '') {
      $constellationTrs.each((index, tr) => {
        $constellationsTable.append($(tr));
      })
    }
  }

  $searchBtn.on('click', () => {
    generateResultTable();
  })
})();
