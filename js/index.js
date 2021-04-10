//########################################
//VARIABLES
//########################################

import INDICATORS_MESSAGES from "./messageList.js";
import { MODAL_SECTION, MODAL_CLOSE, createModalContent } from "./modal.js";

//formInformation, added in global scope to be used in multiple functions.
let formInformation;

//QUERY SELECTORS

//Buttons nodes
const INSTRUCTION_BUTTON = document.querySelector("#instructions button");
const ASSETS_NEXT_BUTTON = document.querySelector("#assets .next");
const ASSETS_BACK_BUTTON = document.querySelector("#assets .back");
const LIABILITIES_AND_EQUITY_NEXT_BUTTON = document.querySelector(
  "#liabilitiesAndEquity .next"
);
const LIABILITIES_AND_EQUITY_BACK_BUTTON = document.querySelector(
  "#liabilitiesAndEquity .back"
);
const PROFIT_AND_LOSS_NEXT_BUTTON = document.querySelector(
  "#profitAndLoss .next"
);
const PROFIT_AND_LOSS_BACK_BUTTON = document.querySelector(
  "#profitAndLoss .back"
);
const SUMMARY_ASSETS_BUTTON = document.querySelector(
  "#summary .back-buttons button:nth-child(1)"
);
const SUMMARY_LIABILITIES_AND_EQUITY_BUTTON = document.querySelector(
  "#summary .back-buttons button:nth-child(2)"
);
const SUMMARY_PROFIT_AND_LOSS_BUTTON = document.querySelector(
  "#summary .back-buttons button:nth-child(3)"
);

//Sections nodes
const INSTRUCTIONS_SECTION = document.querySelector("#instructions");
const ASSETS_SECTION = document.querySelector("#assets");
const LIABILITIES_AND_EQUITY_SECTION = document.querySelector(
  "#liabilitiesAndEquity"
);
const PROFIT_AND_LOSS_SECTION = document.querySelector("#profitAndLoss");
const SUMMARY_SECTION = document.querySelector("#summary");
const REPORT_SECTION = document.querySelector("#report");
const SUBMIT_FORM = document.querySelector("#generateContent");

//Profit and loss nodes
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
const DATABASE_INPUTS = document.querySelectorAll("[data-value='result']");

//Class nodes

//########################################
//FUNCTIONS
//########################################

// **
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
    groupSum += parseFloat(input.value);
  });

  //Selects a node of idSelector that has the attribut [disabled] and its class corresponde with classSelector
  let groupTotal = idSelector.querySelector(`.${classSelector}[disabled]`);

  //Changing the value of the node in variable groupTotal with the variable groupSum
  groupTotal.value = groupSum;

  //Calling the function equitySum to update the total of equity
  equitySum();
};

// **
// * Creates an array with the id and values of all inputs in the page.
// * @param {}
// * @return {Array} Array with ids as key and inputs as values.
// */

const getValue = function () {
  // Getting the information from all inputs with the data-value[result] attribute
  let selectFormValue = DATABASE_INPUTS;

  // Using selectFormValue information to create an array and store it in formInformation

  formInformation = Array.from(selectFormValue).reduce(
    (acc, input) => ({ ...acc, [input.id]: parseInt(input.value) }),
    {}
  );
};

// **
// * Brings all values of getValue() and puts them in the summary section
// * @param {}
// */
const createSummary = function () {
  // Creates an array with all the keys of formInformation

  let inputKeys = Object.keys(formInformation);

  // Looks for each value in the created array
  inputKeys.forEach(function (item) {
    // Brings the name of the ID of the element in summary section
    let summaryKeyName = `#${item}Summary`;

    // looks for the node with this ID
    let summaryNode = document.querySelector(summaryKeyName);

    // Extract the value of the required key in formInformation
    let inputNode = document.querySelector(`#${item}`).value;

    inputNode = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(inputNode);

    // Changes the content of the node with the extracted value
    summaryNode.innerHTML = inputNode;
  });
};

const changeSectionButton = function (hiddenSectionTrue, hiddenSectionFalse) {
  //Hides the node in the parameter hiddenSectionTrue
  hiddenSectionTrue.hidden = true;

  //Shows the node in the parameter hiddenSectionFalse
  hiddenSectionFalse.hidden = false;

  window.location = `#${hiddenSectionFalse.id}`;
};

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
    changeSectionButton(SUMMARY_SECTION, SUMMARY_LIABILITIES_AND_EQUITY_BUTTON);
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
