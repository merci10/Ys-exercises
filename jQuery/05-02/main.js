(() => {
  $('.submitBtn').on('click', () => {

    const zipcode_str = $('.numInput').val();
    if (zipcode_str.match(/^\d{7}$/)) {
      $.ajax({
        type: 'get',
        dataType: 'json',
        // data: {
        //   postal: zipcode_str
        // },
        crossDomain: true,
        url: `http://153.126.194.210/ajax.php?url=http%3A%2F%2Fgeoapi.heartrails.com%2Fapi%2Fjson%3Fmethod%3DsearchByPostal%26postal%3D${zipcode_str}`,
        success: (data) => {
          console.log(data);
          const addressJson = JSON.stringify(data, null, 4);
          $('.distArea').val(addressJson);
        }
      });
    } else {
      alert('7桁の数字を半角で入力してください');
      return;
    }
  });
})();
