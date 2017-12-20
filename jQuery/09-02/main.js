(() => {

  const $btn1 = $('.btn1');
  const $btn2 = $('.btn2');
  const $resetBtn = $('.resetBtn');
  const $originalInput = $('.originalInput');
  const $firstInput = $('.firstInput');
  const $secondInput = $('.secondInput');

  $btn1.on('click', () => {
    const inputText = $originalInput.val();
    const newText = inputText.replace('J-PHONE', 'Vodafone');
    $firstInput.val(newText);
  });

  $btn2.on('click', () => {
    const inputText = $firstInput.val();
    const newText = inputText.replace('Vodafone', 'SoftBank');
    $secondInput.val(newText);
  });

  $resetBtn.on('click', () => {
    $originalInput.val('');
    $firstInput.val('');
    $secondInput.val('');
  });
})();
