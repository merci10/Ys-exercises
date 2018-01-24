(() => {

  $('button').on('click', () => {
    const zipcode = $('.zipcode').val();
    const mailaddress = $('.mailaddress').val();
    const $errMsgForZipcode = $('.errMsgForZipcode');
    const $errMsgForMailaddress = $('.errMsgForMailaddress');

    const zipcode_reg = /^\d{7}$/;
    if (zipcode.match(zipcode_reg)) $errMsgForZipcode.removeClass('is-visible');
    else $errMsgForZipcode.addClass('is-visible');

    const mailaddress_reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mailaddress.match(mailaddress_reg)) $errMsgForMailaddress.removeClass('is-visible');
    else $errMsgForMailaddress.addClass('is-visible');
  });

})();
