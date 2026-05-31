(function startGuessGame() {
  const secret = Math.floor(Math.random() * 100) + 1;
  const maxAttempts = 7;
  let attempts = 0;
  const guessed = [];

  alert('Game doan so tu 1 den 100. Ban co toi da 7 luot!');

  while (attempts < maxAttempts) {
    const input = prompt(`Luot ${attempts + 1}/${maxAttempts} - Nhap so tu 1 den 100:`);

    if (input === null) {
      alert('Ban da thoat game.');
      return;
    }

    const number = Number(input);

    if (!Number.isInteger(number) || number < 1 || number > 100) {
      alert('Chi chap nhan so nguyen tu 1 den 100!');
      continue;
    }

    if (guessed.includes(number)) {
      alert('Ban da doan so nay roi!');
      continue;
    }

    guessed.push(number);
    attempts += 1;

    if (number === secret) {
      alert(`Dung roi! Ban doan dung sau ${attempts} lan!`);
      return;
    }

    if (number < secret) {
      alert('Cao hon!');
    } else {
      alert('Thap hon!');
    }
  }

  alert(`Het luot! Dap an dung la: ${secret}`);
})();
