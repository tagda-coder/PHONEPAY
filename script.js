const amount = document.getElementById("enterAmount");
const proceed = document.getElementById("proceedToPay");

//This will change color after the Amount input.
amount.oninput = changeColorAfterInput;
function changeColorAfterInput() {
  // proceed.style.backgroundColor = "#a975e3"  //Original color
  proceed.style.backgroundColor = "green"; //My choice Color
}

//This is reset again the default color of Proceed Pay Button.
amount.onbeforeinput = setProceedColorByDefault;
function setProceedColorByDefault() {
  proceed.style.backgroundColor = "#a975e3";
}

proceed.addEventListener("click", function () {
  const amountValue = document.getElementById("enterAmount").value;
});
