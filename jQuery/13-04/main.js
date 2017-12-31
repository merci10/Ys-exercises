(() => {

  // deleteした時に配列の要素を削除するとIDと配列のIndexに差異ができてtableをうまく作成すること難しいのでボツ
  // const japaneseConstellations = [
  //   '牡羊座',
  //   '牡牛座',
  //   '双子座',
  //   '蟹座',
  //   '獅子座',
  //   '乙女座',
  //   '天秤座',
  //   '蠍座',
  //   '射手座',
  //   '山羊座',
  //   '水瓶座',
  //   '魚座'
  // ];
  // const latinConstellations = [
  //   'Aries',
  //   'Taurus',
  //   'Gemini',
  //   'Cancer',
  //   'Leo',
  //   'Virgo',
  //   'Libra',
  //   'Scorpio',
  //   'Sagittarius',
  //   'Capricorn',
  //   'Aquarius',
  //   'Pisces'
  // ];

  const $searchInput = $('.searchInput');
  const $searchBtn = $('.searchBtn');

  const $thead = $('.thead');
  const $constellationsTable = $('.constellationsTable');
  const $deleteBtns = $('.deleteBtn');

  const createResultTable = () => {
    const searchInputVal = $searchInput.val();
    const reg = RegExp(searchInputVal);

    $('.constellationTr').each((i, e) => {
      $(e).addClass('hidden');
    })

    $('.japaneseConstellation').each((i, e) => {
      const $el = $(e);
      const jpName = $el.text();
      const $parentTr = $el.parent();
      if (jpName.match(reg)) {
        $parentTr.removeClass('hidden');
      }
    });
  }

  // テーブルの要素を削除する
  const deleteTr = (e) => {
    const $target = $(e.target);
    const deleteTarget = $target.parents('.constellationTr');
    deleteTarget.remove();
  }

  $deleteBtns.each((i,e) => {
    $(e).on('click', deleteTr);
  });

  $searchBtn.on('click', createResultTable);

  // // 検索後のテーブルを作成する
  // const createResultTable = () => {
  //   // thead以外のテーブル要素を消す
  //   $constellationsTable.empty().append($thead);
  //
  //   const searchInputVal = $searchInput.val();
  //   const reg = RegExp(searchInputVal);
  //
  //   japaneseConstellations.forEach((jpName, i) => {
  //     if (jpName.match(reg)) {
  //       const deleteBtn = $('<td>').append(`<button type='text' class='deleteBtn'>削除</button>`).on('click', deleteTr);
  //       const id = $('<td>').addClass('id').text(`${i + 1}`);
  //       const japanese = $('<td>').text(japaneseConstellations[i]);
  //       const latin = $('<td>').text(latinConstellations[i]);
  //       const tr = $('<tr>').addClass('constellationTr')
  //                  .append(deleteBtn).append(id).append(japanese).append(latin);
  //       $constellationsTable.append(tr);
  //     }
  //   });
  // }
  //
  // // テーブルの要素を削除する
  // const deleteTr = (e) => {
  //   const $target = $(e.target);
  //   const deleteTarget = $target.parents('.constellationTr');
  //   deleteTarget.remove();
  //   // 配列からも削除する
  //   const deleteIndex = $target.siblings('.id') - 1;
  //   japaneseConstellations.splice(deleteIndex, 1);
  //   console.log(japaneseConstellations);
  //   latinConstellations.splice(deleteIndex, 1);
  //   console.log(latinConstellations);
  // }
  //
  // // 画面ロード時にテーブルを作成する
  // const initTable = () => {
  //   for (let i = 0; i < japaneseConstellations.length; i++) {
  //     const deleteBtn = $('<td>').append(`<button type='text' class='deleteBtn'>削除</button>`).on('click', deleteTr);
  //     const id = $('<td>').addClass('id').text(`${i + 1}`);
  //     const japanese = $('<td>').text(japaneseConstellations[i]);
  //     const latin = $('<td>').text(latinConstellations[i]);
  //     const tr = $('<tr>').addClass('constellationTr')
  //                .append(deleteBtn).append(id).append(japanese).append(latin);
  //     $constellationsTable.append(tr);
  //   }
  // }
  //
  // initTable();
  // $searchBtn.on('click', createResultTable);

})();
