var showResultEx3 = function () {
  var n = +document.getElementById('inputN-ex3').value;
  var result = document.getElementById('result-ex-3');

  var factorial = 1;
  console.log(factorial);

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  result.innerHTML = `Giai thừa của ${n} là: ${factorial}`;
};
