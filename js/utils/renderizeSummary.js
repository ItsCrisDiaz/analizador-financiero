import {
  ASSETS_SECTION,
  LIABILITIES_AND_EQUITY_SECTION,
  PROFIT_AND_LOSS_SECTION,
} from "../utils/sectionNavigationButtons.js";

//############################################
//NODES
//############################################

const DATABASE_INPUTS = document.querySelectorAll("[data-value='result']");

//############################################
//GLOBAL SCOPE VARIABLES
//############################################

let formInformation;

//############################################
//FUNCTIONS
//############################################

// **
// * getValue
// * Creates an array with the id and values of all inputs in the page.
// * @param {}
// * @return {Array} Array with ids as key and inputs as values.
// */
const getValue = function () {
  formInformation = Array.from(DATABASE_INPUTS).reduce(
    (acc, input) => ({ ...acc, [input.id]: parseInt(input.value) }),
    {}
  );
};

// **
// * createSummary
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

//############################################
//EVENT LISTENERS
//############################################

const assetsSummaryEventListener = ASSETS_SECTION.addEventListener(
  "change",
  function (e) {
    //Determine if the inputs are in the current assets section
    if (e.target && e.target.matches(".current-assets-value:not([disabled])")) {
      getValue();
      createSummary();
    }
    // Determine if the inputs are in the non current assets section
    else if (
      e.target &&
      e.target.matches(".non-current-assets-value:not([disabled])")
    ) {
      getValue();
      createSummary();
    }
  }
);

const liabilitiesAndEquitySummaryEventListener = LIABILITIES_AND_EQUITY_SECTION.addEventListener(
  "change",
  function (e) {
    //Determine if the inputs are in the current assets section
    if (
      e.target &&
      e.target.matches(".current-liabilities-value:not([disabled])")
    ) {
      getValue();
      createSummary();
    }
    // Determine if the inputs are in the non current assets section
    else if (
      e.target &&
      e.target.matches(".non-current-liabilities-value:not([disabled])")
    ) {
      getValue();
      createSummary();
    }
  }
);

const profitAndLossSummaryEventListener = PROFIT_AND_LOSS_SECTION.addEventListener(
  "change",
  function (e) {
    if (e.target && e.target.matches(".profit-and-loss:not([disabled])")) {
      getValue();
      createSummary();
    }
  }
);

export {
  formInformation,
  assetsSummaryEventListener,
  liabilitiesAndEquitySummaryEventListener,
  profitAndLossSummaryEventListener,
};
