//########################################
//VARIABLES
//########################################

import INDICATORS_MESSAGES from "./messageList.js";

import { MODAL_SECTION, MODAL_CLOSE } from "./modal.js";

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
} from "./buttonNodes.js";

import {
  INSTRUCTIONS_SECTION,
  ASSETS_SECTION,
  LIABILITIES_AND_EQUITY_SECTION,
  PROFIT_AND_LOSS_SECTION,
  SUMMARY_SECTION,
  REPORT_SECTION,
  SUBMIT_FORM,
  DATABASE_INPUTS,
} from "./sectionNodes.js";

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
} from "./profitAndLossNodes.js";

import { formInformation } from "./getValue.js";

//########################################
//FUNCTIONS
//########################################

import equitySum from "./equitySum.js";

import groupSum from "./groupSum.js";

import { getValue } from "./getValue.js";

import { createModalContent } from "./modal.js";

import createSummary from "./createSummary.js";

import changeSectionButton from "./changeSectionButton.js";

const calculation = function (indicator) {
  switch (indicator) {
    case "razonCorriente":
      if (formInformation.totalCurrentLiabilities === 0) {
        return "N/A";
      } else {
        return (
          formInformation.currentAssetsTotal /
          formInformation.totalCurrentLiabilities
        ).toFixed(2);
      }
    case "pruebaAcida":
      if (formInformation.totalCurrentLiabilities === 0) {
        return "N/A";
      } else {
        return (
          (formInformation.currentAssetsTotal - formInformation.inventory) /
          formInformation.totalCurrentLiabilities
        ).toFixed(2);
      }
    case "pruebaDefensiva":
      if (formInformation.totalCurrentLiabilities == 0) {
        return "N/A";
      } else {
        return (
          formInformation.cash / formInformation.totalCurrentLiabilities
        ).toFixed(2);
      }
    case "endeudamientoTotal":
      if (
        formInformation.currentAssetsTotal +
          formInformation.nonCurrentAssetsTotal ===
        0
      ) {
        return "N/A";
      } else {
        return (
          ((formInformation.totalCurrentLiabilities +
            formInformation.totalNonCurrentLiabilities) /
            (formInformation.currentAssetsTotal +
              formInformation.nonCurrentAssetsTotal)) *
          100
        ).toFixed(2);
      }
    case "apalancamientoTotal":
      if (formInformation.equity === 0) {
        return "N/A";
      } else {
        return (
          (formInformation.totalCurrentLiabilities +
            formInformation.totalNonCurrentLiabilities) /
          formInformation.equity
        ).toFixed(2);
      }
    case "margenBrutoDeUtilidad":
      if (formInformation.operatingRevenue === 0) {
        return "N/A";
      } else {
        return (
          (formInformation.grossProfit / formInformation.operatingRevenue) *
          100
        ).toFixed(2);
      }
    case "margenNetoDeUtilidad":
      if (formInformation.operatingRevenue === 0) {
        return "N/A";
      } else {
        return (
          (formInformation.netIncome / formInformation.operatingRevenue) *
          100
        ).toFixed(2);
      }
    case "rentabilidadSobreActivos":
      if (
        formInformation.currentAssetsTotal +
          formInformation.nonCurrentAssetsTotal ===
        0
      ) {
        return "N/A";
      } else {
        return (
          (formInformation.netIncome /
            (formInformation.currentAssetsTotal +
              formInformation.nonCurrentAssetsTotal)) *
          100
        ).toFixed(2);
      }
    default:
      return 0;
  }
};

const caseIndicator = (indicator, result) => {
  switch (indicator) {
    case "razonCorriente":
      if (result >= 1 && result < 2) {
        return "positive";
      } else if (result >= 2) {
        return "warning";
      } else {
        return "negative";
      }
    case "pruebaAcida":
      if (result >= 1 && result < 2) {
        return "positive";
      } else if (result >= 2) {
        return "warning";
      } else {
        return "negative";
      }
    case "pruebaDefensiva":
      if (result >= 0.5 && result < 1.5) {
        return "positive";
      } else if (result >= 1.5) {
        return "warning";
      } else {
        return "negative";
      }
    case "endeudamientoTotal":
      if (result <= 80) {
        return "positive";
      } else if (result >= 80 && result < 100) {
        return "warning";
      } else {
        return "negative";
      }
    case "apalancamientoTotal":
      if (result < 1.5) {
        return "positive";
      } else if (result >= 1.5 && result < 2) {
        return "warning";
      } else {
        return "negative";
      }
    case "margenBrutoDeUtilidad":
      if (result > 0) {
        return "positive";
      } else {
        return "negative";
      }
    case "margenNetoDeUtilidad":
      if (result > 0) {
        return "positive";
      } else {
        return "negative";
      }
    case "rentabilidadSobreActivos":
      if (result > 0) {
        return "positive";
      } else {
        return "negative";
      }
    default:
      return "positive";
  }
};

const addClassAndMessage = (indicator, result) => {
  let indicatorNode = document.querySelector(
    `#${INDICATORS_MESSAGES[indicator].id} .indicator`
  );
  let indicatorStateNode = document.querySelector(
    `#${INDICATORS_MESSAGES[indicator].id} .indicator-state`
  );
  let indicatorStateExplanation = document.querySelector(
    `#${INDICATORS_MESSAGES[indicator].id} .indicator-explanation`
  );
  let indicatorCalculation = calculation(indicator);
  let caseIndicatorResult = caseIndicator(indicator, result);

  if (indicatorCalculation === "N/A") {
    indicatorNode.classList.add("warning");
    indicatorNode.classList.remove("correct", "wrong");
    indicatorStateNode.innerHTML = "No aplicable a tus estados";
    indicatorStateNode.classList.add("warning");
    indicatorStateNode.classList.remove("correct", "wrong");
    indicatorStateExplanation.innerHTML =
      "No es posible calcular este indicador financiero con base en la información brindada.";
  } else if (caseIndicatorResult === "positive") {
    indicatorNode.classList.add("correct");
    indicatorNode.classList.remove("wrong", "warning");
    indicatorStateNode.innerHTML = `${INDICATORS_MESSAGES[indicator].positiveText}`;
    indicatorStateNode.classList.add("correct");
    indicatorStateNode.classList.remove("wrong", "warning");
    indicatorStateExplanation.innerHTML = `${INDICATORS_MESSAGES[indicator].positiveMessage}`;
  } else if (caseIndicatorResult === "negative") {
    indicatorNode.classList.add("wrong");
    indicatorNode.classList.remove("correct", "warning");
    indicatorStateNode.innerHTML = `${INDICATORS_MESSAGES[indicator].negativeText}`;
    indicatorStateNode.classList.add("wrong");
    indicatorStateNode.classList.remove("correct", "warning");
    indicatorStateExplanation.innerHTML = `${INDICATORS_MESSAGES[indicator].negativeMessage}`;
  } else {
    indicatorNode.classList.add("warning");
    indicatorNode.classList.remove("correct", "wrong");
    indicatorStateNode.innerHTML = `${INDICATORS_MESSAGES[indicator].warningText}`;
    indicatorStateNode.classList.add("warning");
    indicatorStateNode.classList.remove("correct", "wrong");
    indicatorStateExplanation.innerHTML = `${INDICATORS_MESSAGES[indicator].warningMessage}`;
  }
};

const showIndicator = function (indicator) {
  let indicatorCalculation = calculation(indicator);
  let indicatorNode = document.querySelector(
    `#${INDICATORS_MESSAGES[indicator].id} .indicator`
  );
  if (indicatorCalculation === "N/A") {
    indicatorNode.innerHTML = `${indicatorCalculation}`;
  } else if (INDICATORS_MESSAGES[indicator].percentage === true) {
    indicatorNode.innerHTML = `${indicatorCalculation}%`;
  } else {
    indicatorNode.innerHTML = `${indicatorCalculation}`;
  }

  addClassAndMessage(indicator, indicatorCalculation);
};

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
