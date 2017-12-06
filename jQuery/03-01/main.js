(() => {

  // pagingのドットを表示
  $('.slideItem').each((index, element)=> {
    const $target = $(element);
    $('.paging').append($('<li></li>').addClass('pagingIcon')
                .attr('data-img', $('img',$target).attr('src')));
  });
  $('.pagingIcon:first-child').addClass('is_active');

  let slideMove = () => {
    $('.slideNav:not(:animated)').animate({
      'margin-top' : '-150px'
    }, 1000, () => {
      $('.slideNav').css('margin-top', '0')
                    .append($('.slideItem:first-child'));
      $('.pagingIcon.is_active').removeClass('is_active');
      const activeImgURL = $('.slideItem:first-child img').attr('src');
      $(`.pagingIcon[data-img='${activeImgURL}']`).addClass('is_active');
    });
  }

  setInterval(() => {
    slideMove();
  }, 5000);

})();
