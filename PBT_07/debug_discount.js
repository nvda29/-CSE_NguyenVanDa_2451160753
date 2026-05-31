function tinhGiaGiamGia(giaBan, phanTramGiam) {
  if (typeof giaBan !== 'number' || Number.isNaN(giaBan) || giaBan < 0) {
    return 'Gia ban khong hop le';
  }

  if (typeof phanTramGiam !== 'number' || phanTramGiam < 0 || phanTramGiam > 100) {
    return 'Phan tram giam khong hop le';
  }

  const giamGia = giaBan * phanTramGiam / 100;
  let giaSauGiam = giaBan - giamGia;

  if (giaSauGiam === 0) {
    console.log('San pham mien phi!');
  }

  return giaSauGiam;
}

const gia = tinhGiaGiamGia(Number('100000'), 20);
console.log('Gia sau giam: ' + gia + 'd');

const gia2 = tinhGiaGiamGia(50000, 110);
console.log('Gia: ' + gia2);

for (let i = 0; i < 5; i += 1) {
  setTimeout(function printItem() {
    console.log('Item ' + i);
  }, 1000);
}
