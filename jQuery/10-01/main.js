(() => {

  const $yearSelect = $('.yearSelect');
  const $monthSelect = $('.monthSelect');
  const $daySelect = $('.daySelect');
  const $result = $('.result');

  const $submitBtn = $('.submitBtn');

  let constellation_num;
  const constellation_arr = ["水瓶座(Aquarius)","魚座(Pisces)","牡羊座(Aries)","牡牛座(Taurus)","双子座(Gemini)",
  "蟹座(Cancer)","獅子座(Leo)","乙女座(Virgo)","天秤座(Libra)","蠍座(Scorpio)","射手座(Sagittarius)","山羊座(Capricorn)"];

  $submitBtn.on('click', () => {
    // 生年月日の空欄がないかチェック
    let emptyCount = 0;
    $('select').each((index, element) => {
      if ($(element).val() === '') emptyCount += 1;
    });
    if (emptyCount > 0) {
      alert('生年月日が正しく入力されていません。');
      return;
    }

    const year  = parseInt($yearSelect.val());
    const month = parseInt($monthSelect.val());
    const day   = parseInt($daySelect.val());

    switch (month) {
      case 1:  constellation_num = day >= 20 ? 0  : 11; break;
      case 2:  constellation_num = day >= 19 ? 1  : 0;  break;
      case 3:  constellation_num = day >= 21 ? 2  : 1;  break;
      case 4:  constellation_num = day >= 20 ? 3  : 2;  break;
      case 5:  constellation_num = day >= 21 ? 4  : 3;  break;
      case 6:  constellation_num = day >= 22 ? 5  : 4;  break;
      case 7:  constellation_num = day >= 23 ? 6  : 5;  break;
      case 8:  constellation_num = day >= 23 ? 7  : 6;  break;
      case 9:  constellation_num = day >= 23 ? 8  : 7;  break;
      case 10: constellation_num = day >= 24 ? 9  : 8;  break;
      case 11: constellation_num = day >= 23 ? 10 : 9;  break;
      case 12: constellation_num = day >= 22 ? 11 : 10; break;
    }

    $result.text(constellation_arr[constellation_num]);
  });
})();
