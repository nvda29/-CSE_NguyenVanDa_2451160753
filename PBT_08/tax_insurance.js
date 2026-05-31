const THRESHOLD = 11000000;
const TAX_RATE = 0.1;

function tinhThueBaoHiemDeclaration(luong) {
  const thue = luong > THRESHOLD ? luong * TAX_RATE : 0;
  return {
    thuong: thue,
    thuc_nhan: luong - thue,
  };
}

const tinhThueBaoHiemExpression = function (luong) {
  const thue = luong > THRESHOLD ? luong * TAX_RATE : 0;
  return {
    thuong: thue,
    thuc_nhan: luong - thue,
  };
};

const tinhThueBaoHiemArrow = (luong) => {
  const thue = luong > THRESHOLD ? luong * TAX_RATE : 0;
  return {
    thuong: thue,
    thuc_nhan: luong - thue,
  };
};

console.log('Declaration:', tinhThueBaoHiemDeclaration(15000000));
console.log('Expression:', tinhThueBaoHiemExpression(10000000));
console.log('Arrow:', tinhThueBaoHiemArrow(12000000));

// Hoisting demo:
// console.log(tinhThueBaoHiemDeclaration(15000000)); // OK - declaration hoisted
// console.log(tinhThueBaoHiemExpression(15000000)); // Error - expression chua gan
