var showResultEx4 = function () {
  var results = document.getElementById('result-ex-4');

  for (var i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      results.innerHTML += `<div class="tomato">Div lẻ số ${i}</div>`;
    } else if (i % 2 === 0) {
      results.innerHTML += `<div class="aqua">Div chẵn số ${i}</div>`;
    }
  }
};
