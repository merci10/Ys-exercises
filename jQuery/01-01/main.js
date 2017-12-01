(() => {

  // クラスの付け替えで実装
  $('.jsWrap').hover(function() {
    $(this).addClass('is_black');
  },function() {
    $(this).removeClass('is_black');
  });

  // cssを直接変更して実装
  // $('.jsWrap').hover(function() {
  //   $(this).css('background-color', '#000');
  // },function() {
  //   $(this).css('background-color', '#FF7043');
  // })
})();
