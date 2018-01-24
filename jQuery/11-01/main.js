(() => {

  const $document = $(document);
  const $numNav = $('.numNav');
  const $floatingMenu = $('.floating_menu');
  const floatingMenuOffsetTop = $floatingMenu.offset().top;

  for (let i = 1; i < 301; i++) {
    const $li = $('<li>').addClass('numNav_item');
    $numNav.append($li.text(i));
  }

  $(window).scroll(() => {
    if (floatingMenuOffsetTop === null) return;
    let scrollTop = $document.scrollTop();

    if (scrollTop < floatingMenuOffsetTop) {
      $floatingMenu.css({
        top: '',
        bottom: `${scrollTop}px`
      });
    } else {
      $floatingMenu.css({
        top: '0',
        bottom: ''
      });
    }
  });

})();
