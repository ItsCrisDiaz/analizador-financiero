import showIndicator from "../functions/showIndicator.js";
import {
  INSTRUCTIONS_SECTION,
  ASSETS_SECTION,
  LIABILITIES_AND_EQUITY_SECTION,
  PROFIT_AND_LOSS_SECTION,
  SUMMARY_SECTION,
  REPORT_SECTION,
} from "../nodes/sectionNodes.js";
import INDICATORS_MESSAGES from "../objects/messageList.js";

//############################################
//NODES
//############################################

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
const SUBMIT_FORM_BUTTON = document.querySelector("#generateContent");

//############################################
//FUNCTIONS
//############################################

// **
// * changeSectionButton
// * Generates the content of the modal section using the information in three different data attributes.
// * @param {node} hiddenSectionTrue   node with the section that needs to be hidden
// * @param {node} hiddenSectionFalse  Node with the section that needs to be showed
// */

const changeSectionButton = function (hiddenSectionTrue, hiddenSectionFalse) {
  hiddenSectionTrue.hidden = true;
  hiddenSectionFalse.hidden = false;

  window.location = `#${hiddenSectionFalse.id}`;
  let pageUrl = `${hiddenSectionFalse.id}.html`;

  //Changes the site's URL and title
  history.pushState({ page_id: 1 }, "", pageUrl);
  document.title = `${hiddenSectionFalse.querySelector("h2").innerHTML}`;
};

const buttonEventListeners = document.addEventListener("click", function (e) {
  if (e.target === INSTRUCTION_BUTTON) {
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
  } else if (e.target === SUBMIT_FORM_BUTTON) {
    Object.keys(INDICATORS_MESSAGES).forEach((indicator) =>
      showIndicator(indicator)
    );
    changeSectionButton(SUMMARY_SECTION, REPORT_SECTION);
  }
});

export default buttonEventListeners;
