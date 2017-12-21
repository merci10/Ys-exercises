(() => {

  const $yearSelect = $('.yearSelect');
  const $monthSelect = $('.monthSelect');
  const $daySelect = $('.daySelect');
  const $result = $('.result');

  const $submitBtn = $('.submitBtn');

  let constellation = '';

  $submitBtn.on('click', () => {
    // 瀬年月日の空欄がないかチェック
    let emptyCount = 0;
    $('select').each((index, element) => {
      if ($(element).val() === '') emptyCount += 1;
    });
    if (emptyCount > 0) {
      alert('生年月日が正しく選択されていません。');
      return;
    }

    const year  = parseInt($yearSelect.val());
    const month = parseInt($monthSelect.val());
    const day   = parseInt($daySelect.val());

    switch (month) {
      case 3: constellation = (day >= 21 ? "牡羊座(Aries)" : "魚座(Pisces)"); break;
      case 4: constellation = day >= 20  ? "牡牛座(Taurus)"    : "牡羊座(Aries)"; break;
      case 5: constellation = day >= 21  ? "双子座(Gemini)"    : "牡牛座(Taurus)"; break;
      case 6: constellation = day >= 22  ? "蟹座(Cancer)"      : "双子座(Gemini)"; break;
      case 7: constellation = day >= 23  ? "獅子座(Leo)"       : "蟹座(Cancer)"; break;
      case 8: constellation = day >= 23  ? "乙女座(Virgo)"     : "獅子座(Leo)"; break;
      case 9: constellation = day >= 23  ? "天秤座(Libra)"     : "乙女座(Virgo)"; break;
      case 10: constellation = day >= 24 ? "蠍座(Scorpio)"     : "天秤座(Libra)"; break;
      case 11: constellation = day >= 23 ? "射手座(Sagittarius)" : "蠍座(Scorpio)"; break;
      case 12: constellation = day >= 22 ? "山羊座(Capricorn)" : "射手座(Sagittarius)"; break;
      case 1: constellation = day >= 20  ? "水瓶座(Aquarius)"  : "山羊座(Capricorn)"; break;
      case 2: constellation = day >= 19  ? "魚座(Pisces)"      : "水瓶座(Aquarius)"; break;
    }

    $result.text(constellation);
  });
})();
