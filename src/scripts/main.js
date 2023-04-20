document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function () {
    let maxNumber = document.getElementById("max-number").value;
    maxNumber = parseInt(maxNumber);

    let randomNumber = Math.random() * maxNumber;
    randomNumber = Math.floor(randomNumber + 1);

    document.getElementById("result-value").innertext = randomNumber;

    document.querySelector(".resultado").style.display = "block";
  });
});
