document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let kgs = e.target.value;
  document.getElementById("gramsOutput").innerHTML = kgs / 0.001;

  document.getElementById("kgOutput").innerHTML = kgs;
});
// setting the values for conversion 
var crrncy = {'EUR': {'INR': 78.85, 'USD': 1.1}, 'USD': {'INR': 71.30, 'EUR': 0.9}}
var btn = document.querySelector('.calculate-btn');
var baseCurrencyInput = document.getElementById('currency-1');
var secondCurrencyInput = document.getElementById('currency-2');
var amountInput = document.getElementById('amount');
var toShowAmount = document.querySelector('.given-amount');
var toShowBase = document.querySelector('.base-currency');
var toShowSecond = document.querySelector('.second-currency');
var toShowResult = document.querySelector('.final-result');

function convertCurrency(event) {
  event.preventDefault();
  var amount = amountInput.value;
  var from = baseCurrencyInput.value;
  var to = secondCurrencyInput.value;
  var result = 0;
  
  try{
    if (from == to){
      result = amount;
    } else {
     result = amount * crrncy[from][to];
  }
  }
  catch(err) {
    result = amount * (1 / crrncy[to][from]);
  }
  
  toShowAmount.innerHTML = amount;
  toShowBase.textContent = from + ' = ';
  toShowSecond.textContent = to;
  toShowResult.textContent = result; 
}

btn.addEventListener('click', convertCurrency);