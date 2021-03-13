module.exports = function reverse (n) {
  if (n < 0) {
    n = n + (-n)*2;
  }
  console.log(n);
  let stringNew = String(n);
  let arrayNew = stringNew.split('');
  arrayNew.reverse();
  stringNew = arrayNew.join('');
  let numberNew = Number(stringNew);
  return numberNew;
}
