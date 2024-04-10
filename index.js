document
  .querySelector(".calculator-form")
  .addEventListener("submit", handleSubmit);
document.querySelector(".increase-rate").addEventListener("click", () => {
  adjustRate(1);
});
document.querySelector(".decrease-rate").addEventListener("click", () => {
  adjustRate(-1);
});
document.querySelector(".reset-button").addEventListener("click", reset);

function handleSubmit(e) {
  e.preventDefault();
  let principal = parseFloat(
    document.querySelector(".initial-investment").value
  );
  let monthlyContribution = parseFloat(
    document.querySelector(".monthly-contribution").value
  );
  let years = parseFloat(document.querySelector(".years").value);
  let rate = parseFloat(document.querySelector(".interest-rate").textContent);

  let annualRate = rate / 100;
  let futureValue = calculateFutureValue(
    principal,
    monthlyContribution,
    years,
    annualRate
  );

  let result = `Future Investment Value: $${formatCurrency(futureValue)}`;

  document.querySelector(".result").innerText = result;
  futureValue = console.log(formatCurrency(futureValue));
}

function calculateFutureValue(principal, monthlyContribution, years, rate) {
  let futureValue = principal;
  for (let i = 0; i < years; i++) {
    futureValue = futureValue * (1 + rate) + monthlyContribution * 12;
  }

  return futureValue;
}

function adjustRate(amount) {
  let rateElement = document.querySelector(".interest-rate");
  let rate = parseInt(rateElement.textContent);
  rate += amount;

  if (rate < 1) {
    rate = 1;
  }

  rateElement.textContent = rate.toString();
}

function formatCurrency(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

function reset() {
  document.querySelector(".initial-investment").value = "";
  document.querySelector(".monthly-contribution").value = "";
  document.querySelector(".years").value = "";
  document.querySelector(".interest-rate").textContent = "1";
}
