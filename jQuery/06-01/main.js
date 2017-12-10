(() => {

  // picZoneにcategoryNav_itemの最初の画像を入れる
  const $categoryNav_firstItem = $('.categoryNav_item:first');
  const firstImgPath = 'img/' + $categoryNav_firstItem.data('img');
  $('.picZone').attr('src', `${firstImgPath}`);
  // 一つ目のcategoryNav_itemにis_activeクラスを追加する
  $categoryNav_firstItem.addClass('is_active');

  // categoryNav_itemにクリックイベントをつける
  $('.categoryNav_item').each((index, element) => {
    const $target = $(element);
    $target.on('click', () => {
      const imgPath = 'img/' + $target.data('img');
      $('.picZone').attr('src', `${imgPath}`);
      $('.is_active').removeClass('is_active');
      $target.addClass('is_active');
    });
  });

})();
