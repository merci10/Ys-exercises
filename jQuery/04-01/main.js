(() => {

  // ボタンをクリックした雰囲気を表現
  $('.openBtn').mousedown(function(){
    $(this).addClass('is-active');
  }).mouseup(function(){
    $(this).removeClass('is-active');
  });


  $('.openBtn').on('click', () => {
    $('.gray_bg').addClass('is_visible');
    $('.modal_window').addClass('is_visible');
  });

  $('.closeBtn').on('click', () => {
    $('.gray_bg').removeClass('is_visible');
    $('.modal_window').removeClass('is_visible');
  });

  $('.gray_bg').on('click', () => {
    $('.gray_bg').removeClass('is_visible');
    $('.modal_window').removeClass('is_visible');
  });


  // modal_mainのカラーチェンジ
  $('.colorNav_item').each((index, element) => {
    const $target = $(element);
    const colorCode = $target.data('color');

    $target.css('background-color', `#${colorCode}`);
    $target.on('click', () => {
      $('.colorBox').css('background-color', `#${colorCode}`);
    });
  });

})();
