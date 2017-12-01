(() => {

  // クラスの付け替えで実装
  $('.jsWrap').hover(function() {
    $(this).addClass('is_bigger');
  },function() {
    $(this).removeClass('is_bigger');
  })


  // CSSを直接変更して実装
  // $('.jsWrap').hover(function() {
  //   $(this).css({
  //     width: '300px',
  //     height: '300px'
  //   });
  // }, function() {
  //   $(this).css({
  //     width: '200px',
  //     height: '200px'
  //   });
  // });
})();
