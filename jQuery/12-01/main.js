(() => {

  const $document = $(document);
  const $sideMenuWrap = $('.sideMenuWrap');
  const sideMenuWrapOffsetTop = $sideMenuWrap.offset().top;

  $('.sideMenuBtn:not(:animated)').on('click', () => {
    if ($sideMenuWrap.hasClass('is-open')) {
      $sideMenuWrap.removeClass('is-open');
      $sideMenuWrap.animate({
        left: '-197px'
      }, 1000);
    } else {
      $sideMenuWrap.addClass('is-open');
      $sideMenuWrap.animate({
        left: '0'
      }, 1000);
    }
  });

  $document.scroll(() => {
    if (sideMenuWrapOffsetTop === null) return;
    let scrollTop = $document.scrollTop();

    if (scrollTop > sideMenuWrapOffsetTop) {
      $sideMenuWrap.css({
        position: 'fixed',
        top: '0'
      });
    } else {
      $sideMenuWrap.css({
        position: 'absolute',
        top: '124px'
      });
    }
  });
})();
