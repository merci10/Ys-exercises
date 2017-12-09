(() => {
  $('.submitBtn').on('click', () => {

    const zipcode_str = $('.numInput').val();
    if (zipcode_str.match(/^\d{7}$/)) {
      $.ajax({
        type: 'get',
        dataType: 'xml',
        // data: {
        //   postal: zipcode_str
        // },
        crossDomain: true,
        url: `http://153.126.194.210/ajax.php?url=http%3A%2F%2Fgeoapi.heartrails.com%2Fapi%2Fxml%3Fmethod%3DsearchByPostal%26postal%3D${zipcode_str}`,
        success: (xml) => {
          // console.log(xml.responseXML)
          $(xml).find('response').each((i, element) => {
            const el = $(element).text();
            console.log(el);
            $('.distArea').append(el);
          });
          // $(data).children().each((index, element) => {
          //   $('.distArea').append($(element));
          // });
        }
      });
    } else {
      alert('7桁の数字を半角で入力してください');
      return;
    }
  });
})();
