(() => {

  const $document = $(document);
  const $sideMenuWrap = $('.sideMenuWrap');
  const sideMenuWrapHeightPosition = $('.textWrap').offset().top; // サイドのボタンの位置(height)
  const slideMenuWrapWidth = $('.sideMenuContent').width(); // サイドのボタンの幅

  // sideMenuWrapの位置を固定
  $sideMenuWrap.css({
    top:  sideMenuWrapHeightPosition + 'px',
    left: '-' + slideMenuWrapWidth + 'px'
  });
  // スクロールイベント
  $document.scroll(() => {
    if (sideMenuWrapHeightPosition === null) return;
    let scrollTop = $document.scrollTop();

    if (scrollTop > sideMenuWrapHeightPosition) {
      $sideMenuWrap.css({
        position: 'fixed',
        top: '0'
      });
    } else {
      $sideMenuWrap.css({
        position: 'absolute',
        top: sideMenuWrapHeightPosition + 'px'
      });
    }
  });

  $('.sideMenuBtn:not(:animated)').on('click', () => {
    if ($sideMenuWrap.hasClass('is-open')) {
      $sideMenuWrap.removeClass('is-open');
      $sideMenuWrap.animate({
        left: '-' + slideMenuWrapWidth
      }, 1000);
    } else {
      $sideMenuWrap.addClass('is-open');
      $sideMenuWrap.animate({
        left: '0'
      }, 1000);
    }
  });
})();
