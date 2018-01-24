(() => {

  // ボタンをクリックした雰囲気を表現
  $('.openBtn').mousedown(function(){
    $(this).addClass('is_active');
  }).mouseup(function(){
    $(this).removeClass('is_active');
  });
  // モーダルを開く
  $('.openBtn').on('click', () => {
    $('.gray_bg').addClass('is_visible');
    $('.modal_window').addClass('is_visible');
  });
  // モーダルを閉じる
  $('.closeBtn, .gray_bg').on('click', () => {
    $('.gray_bg').removeClass('is_visible');
    $('.modal_window').removeClass('is_visible');
  });

  $('.colorNav_item').each((index, element) => {
    const $target = $(element);
    const colorCode = $target.data('color');
    // colorNav_itemの初期設定
    $target.css('background-color', `#${colorCode}`);
    // colorNav_itemをクリックした時のイベントを設定
    $target.on('click', () => {
      $('.colorBox').css('background-color', `#${colorCode}`);
    });
  });

})();
