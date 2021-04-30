import {
  ASSETS_SECTION,
  LIABILITIES_AND_EQUITY_SECTION,
  PROFIT_AND_LOSS_SECTION,
} from "./sectionNavigationButtons.js";

//############################################
//NODES
//############################################

const OPERATING_REVENUE_INPUT = document.querySelector("#operatingRevenue");
const COST_OF_GOOD_SOLD_INPUT = document.querySelector("#costOfGoodSolds");
const GROSS_PROFIT_INPUT = document.querySelector("#grossProfit");
const ADMINISTRATIVE_EXPENSES_INPUT = document.querySelector(
  "#administrativeExpenses"
);
const SALES_EXPENSES_INPUT = document.querySelector("#salesExpenses");
const OPERATING_INCOME_INPUT = document.querySelector("#operatingIncome");
const NON_OPERATING_INCOME_INPUT = document.querySelector(
  "#nonOperatingIncome"
);
const NON_OPERATING_EXPENSES_INPUT = document.querySelector(
  "#nonOperatingExpense"
);
const NET_INCOME_INPUT = document.querySelector("#netIncome");

//############################################
//FUNCTIONS
//############################################

const groupTotal = function (node) {
  let sectionTotal = 0;
  let currentTotal = [
    ...node.querySelectorAll('input[disabled][data-group-total="true"]'),
  ];
  let sectionTotalNode = node.querySelector(
    'input[disabled][data-section-total="true"'
  );

  currentTotal.forEach((e) => {
    if (e.value === "") {
      sectionTotal += parseInt(e.placeholder);
    } else {
      sectionTotal += parseInt(e.value);
    }
  });

  sectionTotalNode.value = sectionTotal;
};

// **
// * equitySum
// * Calculates the total amount of the equity according to user's inputs
// * @param {}
// * @return {Number} The total of equity and adds it to an specific node
// */
const equitySum = function () {
  //Declares the let equityValue and assigns it with the total amount of current assets.
  let equityValue = parseFloat(
    ASSETS_SECTION.querySelector(".current-assets-value[disabled]").value
  );

  //Adds the total amount of non current assets.
  equityValue += parseFloat(
    ASSETS_SECTION.querySelector(".non-current-assets-value[disabled]").value
  );

  //Substracts the total amount of current liabilities.
  equityValue -= parseFloat(
    LIABILITIES_AND_EQUITY_SECTION.querySelector(
      ".current-liabilities-value[disabled]"
    ).value
  );

  //Substract the total amount of non current liabilities.
  equityValue -= parseFloat(
    LIABILITIES_AND_EQUITY_SECTION.querySelector(
      ".non-current-liabilities-value[disabled]"
    ).value
  );

  //Declares the let equityValueInput and assigns it with the node designated input to show the equity total
  let equityValueInput = LIABILITIES_AND_EQUITY_SECTION.querySelector(
    ".equity-value"
  );

  //Changes the value of the equityValueInput node with the let equityValue.
  equityValueInput.value = equityValue;
};

// **
// * groupSum
// * Calculates the total amount of a group
// * @param {const} idSelector      const with the node of the neccesary section
// * @param {string} classSelector  const with the name of the class selector used to group the inputs (without .)
// * @return {Number} Sum of the requested group
// */

const groupSum = function (idSelector, classSelector) {
  //Creates a node list of idSelector that don't have the attribute [disabled] and its class correspondes with classSelector
  let groupNode = idSelector.querySelectorAll(
    `.${classSelector}:not([disabled])`
  );

  //Creates an array with the groupNode's node list
  let groupValue = Array.from(groupNode);

  //Creating a sum with each input of the array in groupValue
  let groupSum = 0;
  groupValue.forEach((input) => {
    if (input.value === "") {
      groupSum += parseInt(input.placeholder);
    } else {
      groupSum += parseInt(input.value);
    }
  });

  //Selects a node of idSelector that has the attribut [disabled] and its class corresponde with classSelector
  let groupTotal = idSelector.querySelector(`.${classSelector}[disabled]`);

  //Changing the value of the node in variable groupTotal with the variable groupSum
  groupTotal.value = groupSum;
  //Calling the function equitySum to update the total of equity
  equitySum();
};

// **
// * checkErrorCalc
// * Returns either the placeholder or the value of the specified node
// * @param {node} Node   Node that needs to be check the value
// */

const checkErrorCalc = function (node) {
  let value = 0;
  if (node.value === "") {
    value = parseInt(node.placeholder);
  } else {
    value = parseInt(node.value);
  }
  return value;
};

// **
// * profitAndLossCalculation
// * Calculates the total of the profitAndLoss ID section
// * @param {} idSelector   const with the node of the neccesary section
// * @return {Number}       Total of the requested input fields
// */

const profitAndLossCalculation = function () {
  let calculation = checkErrorCalc(OPERATING_REVENUE_INPUT); // parseFloat(OPERATING_REVENUE_INPUT.value);
  calculation -= checkErrorCalc(COST_OF_GOOD_SOLD_INPUT);
  GROSS_PROFIT_INPUT.value = calculation;

  calculation -= checkErrorCalc(ADMINISTRATIVE_EXPENSES_INPUT);
  calculation -= checkErrorCalc(SALES_EXPENSES_INPUT);
  OPERATING_INCOME_INPUT.value = calculation;

  calculation += checkErrorCalc(NON_OPERATING_INCOME_INPUT);
  calculation -= checkErrorCalc(NON_OPERATING_EXPENSES_INPUT);
  NET_INCOME_INPUT.value = calculation;
};

//############################################
//EVENT LISTENERS
//############################################

const assetsEventCalcListener = ASSETS_SECTION.addEventListener(
  "change",
  function (e) {
    //Determine if the inputs are in the current assets section
    if (e.target && e.target.matches(".current-assets-value:not([disabled])")) {
      groupSum(ASSETS_SECTION, "current-assets-value");
    }
    // Determine if the inputs are in the non current assets section
    else if (
      e.target &&
      e.target.matches(".non-current-assets-value:not([disabled])")
    ) {
      groupSum(ASSETS_SECTION, "non-current-assets-value");
    }
  }
);

const liabilitiesAndEquityCalcEventListener = LIABILITIES_AND_EQUITY_SECTION.addEventListener(
  "change",
  function (e) {
    //Determine if the inputs are in the current assets section
    if (
      e.target &&
      e.target.matches(".current-liabilities-value:not([disabled])")
    ) {
      groupSum(LIABILITIES_AND_EQUITY_SECTION, "current-liabilities-value");
    }
    // Determine if the inputs are in the non current assets section
    else if (
      e.target &&
      e.target.matches(".non-current-liabilities-value:not([disabled])")
    ) {
      groupSum(LIABILITIES_AND_EQUITY_SECTION, "non-current-liabilities-value");
    }
  }
);

const profitAndLossCalcEventListener = PROFIT_AND_LOSS_SECTION.addEventListener(
  "change",
  function (e) {
    if (e.target && e.target.matches(".profit-and-loss:not([disabled])")) {
      profitAndLossCalculation();
    }
  }
);

export {
  assetsEventCalcListener,
  liabilitiesAndEquityCalcEventListener,
  profitAndLossCalcEventListener,
  groupSum,
  profitAndLossCalculation,
};
