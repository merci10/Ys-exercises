(() => {

  const $input = $('.input');
  const $searchBtn = $('.searchBtn');
  const $constellationsTable = $('.constellationsTable');
  const $japaneseConstellationsTd = $('.japaneseTd');
  const $thead = $('.thead');

  const appendTr = (reg) => {
    $japaneseConstellationsTd.each((index, td) => {
      const $td = $(td);
      const constellationName = $td.text();
      const parentTr = $td.parent();

      if(constellationName.match(reg)) {
        $constellationsTable.append(parentTr);
      }
    })
  }

  const generateResultTable = () => {
    $constellationsTable.empty()
                        .append($thead);
    const inputVal = $input.val();
    const reg = RegExp(inputVal);

    appendTr(reg);

    if (inputVal === '') {
      $japaneseConstellationsTd.each((index, td) => {
        $constellationsTable.append($(td).parent());
      })
    }
  }

  $searchBtn.on('click', () => {
    generateResultTable();
  })
})();
