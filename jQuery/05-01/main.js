(() => {
  $('.submitBtn').on('click', () => {

    const zipcode_str = $('.numInput').val();
    if (zipcode_str.match(/^\d{7}$/)) {
      $.ajax({
        type: 'get',
        dataType: 'xml',
        crossDomain: true,
        url: `http://153.126.194.210/ajax.php?url=http%3A%2F%2Fgeoapi.heartrails.com%2Fapi%2Fxml%3Fmethod%3DsearchByPostal%26postal%3D${zipcode_str}`,
        success: (xml) => {
          $(xml).find('response').each((i, element) => {
            const el = $(element)[0].outerHTML;
            $('.distArea').html(el);
          });
        }
      });
    } else {
      alert('7桁の数字を半角で入力してください');
      return;
    }
  });
})();
