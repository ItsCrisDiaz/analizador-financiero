import {
  ASSETS_SECTION,
  LIABILITIES_AND_EQUITY_SECTION,
  PROFIT_AND_LOSS_SECTION,
} from "../nodes/sectionNodes.js";

import {
  OPERATING_REVENUE_INPUT,
  COST_OF_GOOD_SOLD_INPUT,
  GROSS_PROFIT_INPUT,
  ADMINISTRATIVE_EXPENSES_INPUT,
  SALES_EXPENSES_INPUT,
  OPERATING_INCOME_INPUT,
  NON_OPERATING_INCOME_INPUT,
  NON_OPERATING_EXPENSES_INPUT,
  NET_INCOME_INPUT,
} from "../nodes/profitAndLossNodes.js";

import groupSum from "../functions/groupSum.js";

import { getValue } from "../functions/getValue.js";

import createSummary from "../functions/createSummary.js";

const assetsEventListener = ASSETS_SECTION.addEventListener("change", function (
  e
) {
  //Determine if the inputs are in the current assets section
  if (e.target && e.target.matches(".current-assets-value:not([disabled])")) {
    groupSum(ASSETS_SECTION, "current-assets-value");
    getValue();
    createSummary();
  }
  // Determine if the inputs are in the non current assets section
  else if (
    e.target &&
    e.target.matches(".non-current-assets-value:not([disabled])")
  ) {
    groupSum(ASSETS_SECTION, "non-current-assets-value");
    getValue();
    createSummary();
  }
});

const liabilitiesAndEquityEventListener = LIABILITIES_AND_EQUITY_SECTION.addEventListener(
  "change",
  function (e) {
    //Determine if the inputs are in the current assets section
    if (
      e.target &&
      e.target.matches(".current-liabilities-value:not([disabled])")
    ) {
      groupSum(LIABILITIES_AND_EQUITY_SECTION, "current-liabilities-value");
      getValue();
      createSummary();
    }
    // Determine if the inputs are in the non current assets section
    else if (
      e.target &&
      e.target.matches(".non-current-liabilities-value:not([disabled])")
    ) {
      groupSum(LIABILITIES_AND_EQUITY_SECTION, "non-current-liabilities-value");
      getValue();
      createSummary();
    }
  }
);

const profitAndLossEventListener = PROFIT_AND_LOSS_SECTION.addEventListener(
  "change",
  function (e) {
    if (e.target && e.target.matches(".profit-and-loss:not([disabled])")) {
      let calculation = parseFloat(OPERATING_REVENUE_INPUT.value);
      calculation -= parseFloat(COST_OF_GOOD_SOLD_INPUT.value);
      GROSS_PROFIT_INPUT.value = calculation;

      calculation -= parseFloat(ADMINISTRATIVE_EXPENSES_INPUT.value);
      calculation -= parseFloat(SALES_EXPENSES_INPUT.value);
      OPERATING_INCOME_INPUT.value = calculation;

      calculation += parseFloat(NON_OPERATING_INCOME_INPUT.value);
      calculation -= parseFloat(NON_OPERATING_EXPENSES_INPUT.value);
      NET_INCOME_INPUT.value = calculation;
      getValue();
      createSummary();
    }
  }
);

export {
  assetsEventListener,
  liabilitiesAndEquityEventListener,
  profitAndLossEventListener,
};
