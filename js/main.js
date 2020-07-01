let beginCalc = document.querySelector("#start");
console.log(beginCalc);
let resultTable = document.querySelectorAll(".result-table div");

//1
const newArr = [...resultTable].filter((node) => {
  if (node instanceof HTMLElement) {
    return (
      node.className.split("-").findIndex((part) => part === "value") !== -1
    );
  }
});

console.log(newArr);

//2
// let arr = [];
// for (let node of resultTable) {
//   const splittedClassName = node.className.split("-");
//   const valueIndex = splittedClassName.findIndex((part) => part === "value");
//   valueIndex !== -1 && arr.push(node);
// }
// console.log(arr);

let inputExp = document.querySelectorAll(".expenses-item");
let arr2 = [];

for (let item of inputExp) {
  console.log(item);
}

let allBtn = document.getElementsByTagName("button");
let expensesBtn;
let optExpensesBtn;
let countBtn;

for (let btn of allBtn) {
  switch (btn.className) {
    case "expenses-item-btn":
      expensesBtn = btn;
      break;
    case "optionalexpenses-btn":
      optExpensesBtn = btn;
      break;
    case "count-budget-btn":
      countBtn = btn;
      break;
    default:
      break;
  }
}

console.log(expensesBtn);
console.log(optExpensesBtn);
console.log(countBtn);

// let count = document.getElementsByTagName("button");

// console.log(count);

// const arr3 = [...count].filter((elem) => {
//   return elem.className.split("-").findIndex((part) => part === "count") !== -1;
// });

// console.log(arr3);

let optionalExpenses = document.querySelectorAll(".optionalexpenses-item");
console.log(optionalExpenses);

let chooseIncome = document.querySelector(".choose-income");
console.log(chooseIncome);

let savings = document.querySelector("#savings");
console.log(savings);

let chooseSum = document.querySelector("#sum");
console.log(chooseSum);

let choosePercent = document.querySelector("#percent");
console.log(choosePercent);

let yearValue = document.querySelector(".year-value");
console.log(yearValue);

let monthValue = document.querySelector(".month-value");
console.log(monthValue);

let dayValue = document.querySelector(".day-value");
console.log(dayValue);
