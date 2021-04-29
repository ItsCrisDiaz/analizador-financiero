//############################################
//NODES
//############################################

//Section nodes

const INSTRUCTIONS_SECTION = document.querySelector("#instructions");
const ASSETS_SECTION = document.querySelector("#assets");
const LIABILITIES_AND_EQUITY_SECTION = document.querySelector(
  "#liabilitiesAndEquity"
);
const PROFIT_AND_LOSS_SECTION = document.querySelector("#profitAndLoss");
const SUMMARY_SECTION = document.querySelector("#summary");
const REPORT_SECTION = document.querySelector("#report");

//Button nodes

const INSTRUCTION_BUTTON = document.querySelector("#instructionsButton button");
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
  let buttonContainerSectionTrue = document.querySelector(
    `#${hiddenSectionTrue.id}Button`
  );
  let buttonContainerSectionFalse = document.querySelector(
    `#${hiddenSectionFalse.id}Button`
  );

  hiddenSectionTrue.hidden = true;
  hiddenSectionFalse.hidden = false;

  hiddenSectionTrue.classList.remove("section-on-screen");
  hiddenSectionFalse.classList.add("section-on-screen");

  buttonContainerSectionTrue.classList.remove("buttons-on-screen");
  buttonContainerSectionTrue.hidden = true;
  buttonContainerSectionFalse.classList.add("buttons-on-screen");
  buttonContainerSectionFalse.hidden = false;

  window.location = `#${hiddenSectionFalse.id}`;
  let pageUrl = `${hiddenSectionFalse.id}`;

  //Changes the site's URL and title
  history.pushState({ page_id: 1 }, "", pageUrl);
  document.title = `${hiddenSectionFalse.querySelector("h2").innerHTML}`;
};

//############################################
//EVENT LISTENERS
//############################################

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
    changeSectionButton(SUMMARY_SECTION, REPORT_SECTION);
  }
});

export {
  ASSETS_SECTION,
  LIABILITIES_AND_EQUITY_SECTION,
  PROFIT_AND_LOSS_SECTION,
  SUBMIT_FORM_BUTTON,
  buttonEventListeners,
};
