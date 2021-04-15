import {
  ASSETS_SECTION,
  LIABILITIES_AND_EQUITY_SECTION,
  PROFIT_AND_LOSS_SECTION,
} from "../utils/sectionNavigationButtons.js";

import createSummary from "../functions/createSummary.js";

import { formInformation } from "../utils/getValue.js";

const assetsEventListener = ASSETS_SECTION.addEventListener("change", function (
  e
) {
  //Determine if the inputs are in the current assets section
  if (e.target && e.target.matches(".current-assets-value:not([disabled])")) {
    // getValue();
    createSummary();
  }
  // Determine if the inputs are in the non current assets section
  else if (
    e.target &&
    e.target.matches(".non-current-assets-value:not([disabled])")
  ) {
    // getValue();
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
      // getValue();
      createSummary();
    }
    // Determine if the inputs are in the non current assets section
    else if (
      e.target &&
      e.target.matches(".non-current-liabilities-value:not([disabled])")
    ) {
      // getValue();
      createSummary();
    }
  }
);

const profitAndLossEventListener = PROFIT_AND_LOSS_SECTION.addEventListener(
  "change",
  function (e) {
    if (e.target && e.target.matches(".profit-and-loss:not([disabled])")) {
      // getValue();
      createSummary();
    }
  }
);

export {
  assetsEventListener,
  liabilitiesAndEquityEventListener,
  profitAndLossEventListener,
};
