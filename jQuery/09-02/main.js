(() => {

  const $btn1 = $('.btn1');
  const $btn2 = $('.btn2');
  const $resetBtn = $('.resetBtn');
  const $originalInput = $('.originalInput');
  const $resultInput1 = $('.resultInput1');
  const $resultInput2 = $('.resultInput2');

  $btn1.on('click', () => {
    const inputText = $originalInput.val();
    const newText = inputText.replace('J-PHONE', 'Vodafone');
    $resultInput1.val(newText);
  });

  $btn2.on('click', () => {
    const inputText = $resultInput1.val();
    const newText = inputText.replace('Vodafone', 'SoftBank');
    $resultInput2.val(newText);
  });

  $resetBtn.on('click', () => {
    $originalInput.val('');
    $resultInput1.val('');
    $resultInput2.val('');
  });
})();
