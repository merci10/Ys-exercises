(() => {

  // picZoneにcategoryNav_itemの最初の画像を入れる
  const $firstItem = $('.categoryNav_item:first');
  const firstImgPath = 'img/' + $firstItem.data('img');
  $('.picZone').attr('src', `${firstImgPath}`);
  // 一つ目のcategoryNav_itemにis_activeクラスを追加する
  $firstItem.addClass('is_active');

  // categoryNav_itemにクリックイベントをつけるx
  $('.categoryNav_item').each((index, element) => {
    const $target = $(element);
    $target.on('click', () => {
      // urlを取得して.picZoneに表示する
      const imgPath = 'img/' + $target.data('img');
      $('.picZone').attr('src', `${imgPath}`);
      // Navの色を切り替える
      $('.categoryNav_item.is_active').removeClass('is_active');
      $target.addClass('is_active');
    });
  });

})();
