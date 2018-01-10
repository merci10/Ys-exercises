(() => {

  const $searchInput = $('.searchInput');
  const $searchBtn = $('.searchBtn');

  const $thead = $('.thead');
  const $tbody = $('.tbody');

  let sortOrder = 1; // 1: 昇順, -1: 降順

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
    })
  }

  $searchBtn.on('click', createResultTable);

  const rebuildTbody = (rows) => {
    const $tbody = $('.tbody');
    $tbody.empty();
    for (let i = 0; i < rows.length; i++) {
      $tbody.append(rows[i]);
    }
  }

  const compare = (a, b, col, type) => {
    let _a = $(a).children().eq(col).text();
    let _b = $(b).children().eq(col).text();
    if (type === 'number') {
      _a = _a * 1;
      _b = _b * 1;
    } else if (type === 'string') {
      _a = _a.toLowerCase();
      _b = _b.toLowerCase();
    }
    if (_a < _b) {
      return -1;
    }
    if (_a > _b) {
      return 1;
    }
    return 0;
  }

  const sortRows = () => {
    const $select = $('.sortType option:selected');
    let $rows = $('.constellationTr');
    let col = $select.val();
    let type = $select.data('type');
    let sortType = $select.data('sort');

    if (sortType === 'asc') sortOrder = 1;
    else sortOrder = -1;

    $rows.sort((a, b) => {
      return compare(a, b, col, type) * sortOrder;
    });
    return $rows
  }

  const sortSetup = () => {
    $('.sortType').on('change', () => {
      let rows;
      rows = sortRows()
      rebuildTbody(rows);
    });
  }

  sortSetup();
})();
