var showResultEx1 = function () {
  var result = document.getElementById('result-ex-1');
  var sum = 0;
  var n = 0;

  while (sum < 10000) {
    n++;
    sum = sum + n;
  }

  result.innerHTML = `Số nguyên dương nhỏ nhất để tổng S > 10000 là: <span style="color:tomato"> ${n} </span>`;
};
