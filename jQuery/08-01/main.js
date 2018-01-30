(() => {
  // 変数宣言
  // ------------------------------------------------------------
  const $dropArea = $('.dropArea');
  const $distArea = $('.distArea');

  $distArea.on('drop', (el) => {
    const $target = el.originalEvent;
    $target.stopPropagation();
    $target.preventDefault();

    console.log($target);
  });
})();
