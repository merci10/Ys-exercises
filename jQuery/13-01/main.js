(() => {

  const $input = $('.input');
  const $btn = $('.searchBtn');
  const $trs = $('.tr');

  $btn.on('click', () => {
    // テーブルを再表示
    $trs.removeClass('is_hidden');
    const val = $input.val();
    if (val === '') {
      return;
    }

    // inputされた文字のRegularExpressionを作成
    const reg = RegExp(val);
    $trs.each((index, tr) => {
      const $tr = $(tr)
      // 星座の日本語名取得
      const jpName = $tr.find('.japaneseTd').text();
      // matchしなかったtrを隠す
      if (!jpName.match(reg)) {
        $tr.addClass('is_hidden');
      }
    });
  });
})();
