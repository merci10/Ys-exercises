(() => {

  // 変数宣言
  // --------------------------------------------------------------------------
  let progCount = 10;
  const $progressCount = $('.progressCount');
  const $progressColorBox = $('.progressColorBox');

  let isBtnPushed = false;
  const $minusBtn = $('.minusBtn');
  const $plusBtn = $('.plusBtn');


  // 関数
  // ==========================================================================
  // progressWrapを更新する
  const setProgressInfo = () => {
    // 進捗率(text)を変える
    if (progCount < 0) progCount = 0;
    else if (progCount > 100) progCount = 100;
    $progressCount.text(progCount);
    // 色の範囲を変える
    $progressColorBox.css({
      width: `${progCount}%`
    });
    // 色の種類を変える
    if (progCount < 20) {
      $progressColorBox.css('background-color', '#f44336'); // 赤色
    } else if (progCount < 50) {
      $progressColorBox.css('background-color', '#FDD835'); // 黄色
    } else if (progCount < 100){
      $progressColorBox.css('background-color', '#4caf50'); // 緑色
    } else {
      $progressColorBox.css('background-color', '#1565C0'); // 青色
    }
  }


    // カウントダウン関連
    // ------------------------------------------------------------------------
  const countDown = () => {
    progCount--;
    setProgressInfo();
    if (isBtnPushed === true && progCount > 0) {
      setTimeout(countDown, 100)
    }
  }
  // カウントダウンのクリックアクション
  $minusBtn.mousedown(() => {
    // 0の場合はボタンが機能しないようにする
    if (progCount === 0) return;
    isBtnPushed = true
    setTimeout(countDown);
  }).mouseup(() => {
    isBtnPushed = false;
    clearTimeout(countDown);
  }).mouseleave(() => {
    isBtnPushed = false;
    clearTimeout(countDown);
  })


  // カウントアップ関連
  // --------------------------------------------------------------------------
  const countUp = () => {
    progCount++;
    setProgressInfo();
    if (isBtnPushed === true && progCount < 100) {
      setTimeout(countUp, 100);
    }
  }
  // カウントアップのクリックアクション
  $plusBtn.mousedown(() => {
    // 100の場合はボタンが機能しないようにする
    if (progCount === 100) return;
    isBtnPushed = true;
    setTimeout(countUp);
  }).mouseup(() => {
    isBtnPushed = false;
    clearTimeout(countUp);
  }).mouseleave(() => {
    isBtnPushed = false;
    clearTimeout(countUp);
  })


  // 初期設定
  // --------------------------------------------------------------------------
  setProgressInfo();

})();
