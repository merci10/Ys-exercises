(() => {
  $('.submitBtn').on('click', () => {

    const zipCode = $('.numInput').val();
    if (zipCode.match(/^\d{7}$/)) {
      $.ajax({
        type: 'get',
        data: {
          postal: zipCode
        },
        dataType: 'jsonp',
        crossDomain: true,
        url: 'http://geoapi.heartrails.com/api/json?method=searchByPostal',
        success: (data) => {
          const json = JSON.stringify(data, null, 4);
          $('.distArea').val(json);
        }
      });
    } else {
      alert('7桁の数字を半角で入力してください');
      return false;
    }
  });

})();
