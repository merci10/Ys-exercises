(() => {

  $('button').on('click', () => {
    const zipcode = $('.zipcode').val();
    const mailaddress = $('.mailaddress').val();
    const $errMsgForZipcode = $('.errMsgForZipcode');
    const $errMsgForMailaddress = $('.errMsgForMailaddress');

    if (zipcode.match(/^\d{7}$/)) $errMsgForZipcode.removeClass('is-visible');
    else $errMsgForZipcode.addClass('is-visible');

    if (mailaddress.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) $errMsgForMailaddress.removeClass('is-visible');
    else $errMsgForMailaddress.addClass('is-visible');
  });

})();
