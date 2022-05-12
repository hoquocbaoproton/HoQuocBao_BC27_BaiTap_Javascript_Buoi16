var showResultEx2 = function () {
  var inputX = +document.getElementById('inputX-ex2').value;
  var inputN = +document.getElementById('inputN-ex2').value;
  var result = document.getElementById('result-ex-2');

  var sum = calcSum(inputX, inputN);

  result.innerHTML = `Tổng: <span style="color: tomato"> ${sum} </span>`;
};

var calcSum = function (x, n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += x ** i;
  }
  return sum;
};

calcSum(2, 3);
