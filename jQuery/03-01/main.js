(() => {

  const init = () => {
    // pagingの丸を表示
    $('.slideItem').each((index, element)=> {
      const $target = $(element);
      const pagingIcon = $('<li></li>').addClass('pagingIcon')
                                       .attr('data-img', $('img', $target).attr('src'));
      $('.paging').append(pagingIcon);
    });
    $('.pagingIcon:first-child').addClass('is_active');
  }

  const slider = () => {
    const slideHeight = $('.slideItem:first-child').height();
    $('.slideNav:not(:animated)').animate({
      'margin-top' : `-${slideHeight}`
    }, 1000, () => {
      relocateImg();
      switchPaging();
    });
  }

  // 先頭のIMGを末尾に移動させる
  const relocateImg = () => {
    $('.slideNav').css('margin-top', '0')
                  .append($('.slideItem:first-child'));
  }

  // pagingの場所を移動させる
  const switchPaging = () => {
    const activeImgURL = $('.slideItem:first-child img').attr('src');
    $('.pagingIcon.is_active').removeClass('is_active');
    $(`.pagingIcon[data-img='${activeImgURL}']`).addClass('is_active');
  }

  init();
  setInterval(() => {
    slider();
  }, 5000);

})();
