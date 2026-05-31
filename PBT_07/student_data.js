const students = [
  { name: 'An', math: 8, physics: 7, cs: 9, gender: 'M' },
  { name: 'Binh', math: 6, physics: 9, cs: 7, gender: 'F' },
  { name: 'Chi', math: 9, physics: 6, cs: 8, gender: 'F' },
  { name: 'Dung', math: 5, physics: 5, cs: 6, gender: 'M' },
  { name: 'Em', math: 10, physics: 8, cs: 9, gender: 'F' },
  { name: 'Phong', math: 3, physics: 4, cs: 5, gender: 'M' },
  { name: 'Giang', math: 7, physics: 7, cs: 7, gender: 'F' },
  { name: 'Huy', math: 4, physics: 6, cs: 3, gender: 'M' },
];

function averageScore(student) {
  return student.math * 0.4 + student.physics * 0.3 + student.cs * 0.3;
}

function classify(avg) {
  if (avg >= 8.0) return 'Gioi';
  if (avg >= 6.5) return 'Kha';
  if (avg >= 5.0) return 'Trung binh';
  return 'Yeu';
}

const results = students.map((student) => ({
  ...student,
  avg: averageScore(student),
  rank: classify(averageScore(student)),
}));

console.log('| STT | Ten    | TB   | Xep loai    |');
console.log('|-----|--------|------|-------------|');

results.forEach((item, index) => {
  const avgText = item.avg.toFixed(1).padEnd(4);
  console.log(`| ${String(index + 1).padEnd(3)} | ${item.name.padEnd(6)} | ${avgText} | ${item.rank.padEnd(11)} |`);
});

const rankCount = { Gioi: 0, Kha: 0, 'Trung binh': 0, Yeu: 0 };
results.forEach((item) => {
  rankCount[item.rank] += 1;
});

console.log('\nSo SV moi xep loai:', rankCount);

let highest = results[0];
let lowest = results[0];
results.forEach((item) => {
  if (item.avg > highest.avg) highest = item;
  if (item.avg < lowest.avg) lowest = item;
});

console.log('Cao nhat:', highest.name, highest.avg.toFixed(1));
console.log('Thap nhat:', lowest.name, lowest.avg.toFixed(1));

const subjectAvg = {
  math: 0,
  physics: 0,
  cs: 0,
};

students.forEach((item) => {
  subjectAvg.math += item.math;
  subjectAvg.physics += item.physics;
  subjectAvg.cs += item.cs;
});

const total = students.length;
console.log('\nDiem TB mon (ca lop):');
console.log('Math:', (subjectAvg.math / total).toFixed(2));
console.log('Physics:', (subjectAvg.physics / total).toFixed(2));
console.log('CS:', (subjectAvg.cs / total).toFixed(2));

const genderGroups = { M: [], F: [] };
results.forEach((item) => {
  genderGroups[item.gender].push(item.avg);
});

console.log('\nDiem TB theo gioi tinh (Bonus):');
Object.keys(genderGroups).forEach((gender) => {
  const list = genderGroups[gender];
  const sum = list.reduce((acc, value) => acc + value, 0);
  const avg = sum / list.length;
  console.log(`${gender}: ${avg.toFixed(2)}`);
});
