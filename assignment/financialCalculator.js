let principal = 40000;
let rate = 3;
let time = 5;
let totalAmount = principal * (1 + rate / 100) ** time;

console.log(
  "principal",
  principal,
  "rate",
  rate,
  "time",
  time,
  "totalAmount",
  totalAmount
);

let investments = [
  [30000, 8, 10],
  [15000, 4, 20],
  [20000, 15, 4],
];

let futureValues = investments.map(
  ([principal, rate, time]) => principal * (1 + rate / 100) ** time
);
console.log("Future Values:", futureValues);

let maxFutureValue = Math.max(...futureValues);
console.log("Maximum Future Value:", maxFutureValue);

let threshold = 20000;

let minFutureValue = Math.min(...futureValues);
console.log("Min Future Value", minFutureValue);

if (minFutureValue > threshold) {
  console.log("Above threshold");
} else {
  console.log("Below threshold");
}
