(() => {

  let progCount = 0;
  const $progressCount = $('.progressCount');
  const $progressColorBox = $('.progressColorBox');

  let isBtnPushed = false;
  const $minusBtn = $('.minusBtn');
  const $plusBtn = $('.plusBtn');

  let tid;
  let passingTime;

  const renewalProgressBox = () => {
    // 進捗率を変える
    $progressCount.text(progCount);
    // 色の範囲を変える
    $progressColorBox.css({
      width: `${progCount}%`
    });
    // 色の種類を変える
    if (progCount < 20) {
      $progressColorBox.css('background-color', '#f44336'); // 赤色
    } else if (progCount < 50) {
      $progressColorBox.css('background-color', '#ffeb3b'); // 黄色
    } else if (progCount < 100){
      $progressColorBox.css('background-color', '#4caf50'); // 緑色
    } else {
      $progressColorBox.css('background-color', '#1565C0'); // 青色
    }
  }

  const continueMinusCount = () => {
    progCount--;
    renewalProgressBox();

    if (isBtnPushed === true && progCount > 0) {
      setTimeout(continueMinusCount, 100)
    }
  }

  const continuePlusCount = () => {
    progCount++;
    renewalProgressBox();

    if (isBtnPushed === true && progCount < 100) {
      setTimeout(continuePlusCount, 100);
    } else {
      return;
    }
  }

  // クリックアクション
  $minusBtn.mousedown(() => {
    // 0の場合はボタンが機能しないようにする
    if (progCount === 0) return;
    // 数字のカウントを一つ下げてテキストに反映させる
    progCount--;
    renewalProgressBox();

    isBtnPushed = true;
    // passingTime = 0;
    // tid = setInterval(() => {
    //   passingTime += 100;
    //   if (passingTime === 1000) {
    //     continueMinusCount();
    //     clearInterval(tid);
    //   }
    // }, 100);
  }).mouseup(() => {
    isBtnPushed = false;
    clearTimeout(continueMinusCount);
  }).mouseleave(() => {
    isBtnPushed = false;
    clearTimeout(continueMinusCount);
  })

  // クリックアクション
  $plusBtn.mousedown(() => {
    // 100の場合はボタンが機能しないようにする
    if (progCount === 100) return;
    // 単クリックでのカウント１アップ
    progCount++;
    renewalProgressBox();

    isBtnPushed = true;
    // passingTime = 0;
    // tid = setInterval(() => {
    //   passingTime += 100;
    //   if (passingTime === 1000) {
    //     clearInterval(tid);
    //     continuePlusCount();
    //   }
    // }, 100)
  }).mouseup(() => {
    isBtnPushed = false;
    clearTimeout(continuePlusCount);
  }).mouseleave(() => {
    isBtnPushed = false;
    clearTimeout(continuePlusCount);
  })

})();
