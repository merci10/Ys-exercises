(() => {

  // pagingのドットを表示
  let slideNum = $('.slideItem').length;
  for (let i = 0; i < slideNum; i++) {
    $('.paging').append(`<li class="pagingIcon"></li>`);
  }

  let slideMove = () => {
    $('.slideNav').animate({
      'margin-top' : '-150px'
    }, 1000, () => {
      $('.slideNav').css('margin-top', '0px')
                    .append($('.slideItem:first'));
    });
  }

  setTimeout(() => {
    slideMove();
  }, 2000);

  slideMove();
})();
