(() => {

  $('button').on('click', () => {
    const zipcode = $('.zipcode').val();
    const mailaddress = $('.mailaddress').val();
    const $errMsgForZipcode = $('.errMsgForZipcode');
    const $errMsgForMailaddress = $('.errMsgForMailaddress');

    if (!zipcode.match(/^\d{7}$/)) $errMsgForZipcode.addClass('is-visible');
    else $errMsgForZipcode.removeClass('is-visible');

    if (!mailaddress.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) $errMsgForMailaddress.addClass('is-visible');
    else $errMsgForMailaddress.removeClass('is-visible');
  });

})();
