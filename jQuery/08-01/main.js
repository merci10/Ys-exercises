(() => {
  // 変数宣言
  // ------------------------------------------------------------
  const $dropArea = $('.dropArea');
  const $distArea = $('.distArea');


  // drag&dropの処理
  $dropArea.on('dragover', function(e){
    e.preventDefault();
    $(this).addClass('is_active');
    return false;
  }).on('dragleave', function(e){
    e.preventDefault();
    $(this).removeClass('is_active');
    return false;
  }).on('drop', function(e){
    e.preventDefault();
    // dropしたファイル名を取得
    const fileName = e.originalEvent.dataTransfer.files[0].name;
    $distArea.text(fileName);
    $(this).removeClass('is_active');
    return false;
  });
})();
