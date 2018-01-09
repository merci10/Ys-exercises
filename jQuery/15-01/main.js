(() => {

  let progCount = 0;
  const $progressText = $('.progressText');
  const $minusBtn = $('.minusBtn');
  const $plusBtn = $('.plusBtn');

  let isContinue = false;
  const $progressColorBox = $('.progressColorBox');

  const plusCount = () => {
    progCount++;
    $progressText.text(progCount);
    $progressColorBox.css({
      width: `${progCount}%`
    });
    if (progCount < 20) {
      $progressColorBox.css('background-color', '#f44336');
    } else if (progCount < 50) {
      $progressColorBox.css('background-color', '#ffeb3b');
    } else {
      $progressColorBox.css('background-color', '#4caf50');
    }
    if (isContinue === true && progCount < 100) {
      setTimeout(plusCount, 100);
    }
  }

  // クリックアクション
  $minusBtn.on('mousedown', () => {
    // 0の場合はボタンが機能しないようにする
    if (progCount === 0) return;
    // 数字のカウントを一つ下げてテキストに反映させる
    progCount--;
    $progressText.text(progCount);
    // 色をつける
  })

  // クリックアクション
  $plusBtn.mousedown(() => {
    // 100の場合はボタンが機能しないようにする
    if (progCount === 100) return;
    // // 数字のカウントを一つ上げてテキストに反映させる
    // progCount++;
    // $progressText.text(progCount);
    // 色をつける
    $progressColorBox.css({
      width: `${progCount}%`
    });
    if (progCount < 20) {
      $progressColorBox.css('background-color', '#f44336');
    } else if (progCount < 50) {
      $progressColorBox.css('background-color', '#ffeb3b');
    } else {
      $progressColorBox.css('background-color', '#4caf50');
    }

    isContinue = true;
    plusCount();
    return false;
  }).mouseup(() => {
    isContinue = false;
    clearTimeout(plusCount);
  }).mouseleave(() => {
    isContinue = false;
    clearTimeout(plusCount);
  })

})();
