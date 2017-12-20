(() => {

  $('button').on('click', () => {
    const zipcode = $('.zipcode').val();
    const mailaddress = $('.mailaddress').val();

    if (!zipcode.match(/^\d{7}$/)) $('.errMsgForZipcode').addClass('is-visible');
    else $('.errMsgForZipcode').removeClass('is-visible');
  });

})();
