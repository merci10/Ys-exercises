(() => {

  const $input = $('.input');
  const $searchBtn = $('.searchBtn');
  const $table = $('.constellationsTable');
  const $thead = $('.thead');
  const $trs = $('.tr');

  const appendTr = (reg) => {
    $japaneseTds.each((index, td) => {
      const $td = $(td);
      const constellationName = $td.text();
      const parentTr = $td.parent();

      if(constellationName.match(reg)) {
        $table.append(parentTr);
      }
    })
  }

  const generateResultTable = () => {
    $table.empty()
                        .append($thead);
    const inputVal = $input.val();
    const reg = RegExp(inputVal);

    appendTr(reg);

    if (inputVal === '') {
      $japaneseTds.each((index, td) => {
        $table.append($(td).parent());
      })
    }
  }

  $searchBtn.on('click', () => {
    generateResultTable();
  })
})();
