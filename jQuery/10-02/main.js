(() => {

  const $yearSelect = $('.yearSelect');
  const $monthSelect = $('.monthSelect');
  const $daySelect = $('.daySelect');
  const $result = $('.result');

  const $submitBtn = $('.submitBtn');

  const zodiac_arr = ["子(Rat)","丑(Ox)","寅(Tiger)","卯(Rabbit)","辰(Dragon)","巳(Snake)","午(Horse)","未(Sheep)","申(Monkey)","酉(Rooster)","戌(Dog)","亥(Boar)"];

  $submitBtn.on('click', () => {

    let emptyCount = 0;
    $('select').each((index, element) => {
      if ($(element).val() === '') emptyCount += 1;
    });
    if (emptyCount > 0) {
      alert('せいねんがっぴがただしくにゅうりょくされていません。');
      return;
    }

    const year = parseInt($yearSelect.val());
    const yearForZodiacArr = year - 4;
    const index = yearForZodiacArr % 12;

    $result.text(zodiac_arr[index]);
  });
})();
