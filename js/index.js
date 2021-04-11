//########################################
//VARIABLES
//########################################

import INDICATORS_MESSAGES from "./objects/messageList.js";

import { MODAL_SECTION, MODAL_CLOSE } from "./nodes/modal.js";

import {
  INSTRUCTION_BUTTON,
  ASSETS_NEXT_BUTTON,
  ASSETS_BACK_BUTTON,
  LIABILITIES_AND_EQUITY_NEXT_BUTTON,
  LIABILITIES_AND_EQUITY_BACK_BUTTON,
  PROFIT_AND_LOSS_NEXT_BUTTON,
  PROFIT_AND_LOSS_BACK_BUTTON,
  SUMMARY_ASSETS_BUTTON,
  SUMMARY_LIABILITIES_AND_EQUITY_BUTTON,
  SUMMARY_PROFIT_AND_LOSS_BUTTON,
} from "./nodes/buttonNodes.js";

import {
  INSTRUCTIONS_SECTION,
  ASSETS_SECTION,
  LIABILITIES_AND_EQUITY_SECTION,
  PROFIT_AND_LOSS_SECTION,
  SUMMARY_SECTION,
  REPORT_SECTION,
  SUBMIT_FORM,
  DATABASE_INPUTS,
} from "./nodes/sectionNodes.js";

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
} from "./nodes/profitAndLossNodes.js";

//########################################
//FUNCTIONS
//########################################

import groupSum from "./functions/groupSum.js";

import { getValue } from "./functions/getValue.js";

import createModalContent from "./functions/createModalContent.js";

import createSummary from "./functions/createSummary.js";

import changeSectionButton from "./functions/changeSectionButton.js";

import showIndicator from "./functions/showIndicator.js";

//########################################
//EVENT LISTENERS
//########################################

// General event delegation

document.addEventListener("click", function (e) {
  //Event listener for sup elements
  if (e.target.nodeName === "SUP") {
    createModalContent(e);
    return createModalContent;
  }

  //Event listener for MODAL_CLOSE element
  else if (e.target === MODAL_CLOSE) {
    // Restores the document's overflow state to normal
    document.getElementsByTagName("html")[0].style.overflow = "visible";

    // Hides the modal window
    MODAL_SECTION.hidden = true;
  }
  // BUTTONS EVENT LISTENERS
  else if (e.target === INSTRUCTION_BUTTON) {
    changeSectionButton(INSTRUCTIONS_SECTION, ASSETS_SECTION);
  } else if (e.target === ASSETS_BACK_BUTTON) {
    changeSectionButton(ASSETS_SECTION, INSTRUCTIONS_SECTION);
  } else if (e.target === ASSETS_NEXT_BUTTON) {
    changeSectionButton(ASSETS_SECTION, LIABILITIES_AND_EQUITY_SECTION);
  } else if (e.target === LIABILITIES_AND_EQUITY_BACK_BUTTON) {
    changeSectionButton(LIABILITIES_AND_EQUITY_SECTION, ASSETS_SECTION);
  } else if (e.target === LIABILITIES_AND_EQUITY_NEXT_BUTTON) {
    changeSectionButton(
      LIABILITIES_AND_EQUITY_SECTION,
      PROFIT_AND_LOSS_SECTION
    );
  } else if (e.target === PROFIT_AND_LOSS_BACK_BUTTON) {
    changeSectionButton(
      PROFIT_AND_LOSS_SECTION,
      LIABILITIES_AND_EQUITY_SECTION
    );
  } else if (e.target === PROFIT_AND_LOSS_NEXT_BUTTON) {
    changeSectionButton(PROFIT_AND_LOSS_SECTION, SUMMARY_SECTION);
  } else if (e.target === SUMMARY_ASSETS_BUTTON) {
    changeSectionButton(SUMMARY_SECTION, ASSETS_SECTION);
  } else if (e.target === SUMMARY_LIABILITIES_AND_EQUITY_BUTTON) {
    changeSectionButton(SUMMARY_SECTION, LIABILITIES_AND_EQUITY_SECTION);
  } else if (e.target === SUMMARY_PROFIT_AND_LOSS_BUTTON) {
    changeSectionButton(SUMMARY_SECTION, PROFIT_AND_LOSS_SECTION);
  }
});

//Generate report event listener

SUBMIT_FORM.addEventListener("click", function () {
  Object.keys(INDICATORS_MESSAGES).forEach((indicator) =>
    showIndicator(indicator)
  );
  changeSectionButton(SUMMARY_SECTION, REPORT_SECTION);
});

//Sections Event Listeners

ASSETS_SECTION.addEventListener("change", function (e) {
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

LIABILITIES_AND_EQUITY_SECTION.addEventListener("change", function (e) {
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
});

PROFIT_AND_LOSS_SECTION.addEventListener("change", function (e) {
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
});
