import {
  SUMMARY_ASSETS_BUTTON,
  SUMMARY_LIABILITIES_AND_EQUITY_BUTTON,
  SUMMARY_PROFIT_AND_LOSS_BUTTON,
} from "./sectionNavigationButtons.js";

//############################################
//NODES
//############################################

const MODAL_SECTION = document.querySelector("#helpModal");
const SECTION_MODAL_WINDOW = document.querySelector("#sectionList");
const SECTION_MODAL_BUTTON = document.querySelector("#reportChangeOptions");
const MODAL_TITLE = document.querySelector(".modal-header h3");
const MODAL_CONTENT_DESCRIPTION = document.querySelector(
  ".modal-content p:nth-child(1)"
);
const MODAL_CONTENT_EXAMPLES = document.querySelector(
  ".modal-content p:nth-child(2)"
);
const HELP_MODAL_CLOSE = document.querySelector("#helpModal .close");
const SECTION_MODAL_CLOSE = document.querySelector("#sectionList .close");

//############################################
//FUNCTIONS
//############################################

// **
// * createModalContent
// * Generates the content of the modal section using the information in three different data attributes.
// * @param {}
// */

const createModalContent = function (e) {
  // Selects the data attributes corresponding to name, description and examples
  let supName = e.target.getAttribute("data-name");
  let supDescription = e.target.getAttribute("data-description");
  let supExamples = e.target.getAttribute("data-examples");

  // Adds the content of name, description and example to the respective nodes
  MODAL_TITLE.innerHTML = supName;
  MODAL_CONTENT_DESCRIPTION.innerHTML = supDescription;
  MODAL_CONTENT_EXAMPLES.innerHTML = supExamples;

  // Checks if data-examples has any content

  if (supExamples === "") {
    // If it doesn't, hides the node
    MODAL_CONTENT_EXAMPLES.hidden = true;
  } else {
    // If it does, shows the node and adds the content of the example to the respective node.
    MODAL_CONTENT_EXAMPLES.hidden = false;
  }

  // Changes the overflow of the website to hidden to avoid users can scroll in the site while the modal is open

  document.getElementsByTagName("html")[0].style.overflow = "hidden";

  // Shows the previously created modal
  MODAL_SECTION.hidden = false;
};

// **
// * openModal
// * Open the modal window
// * @param {}
// */

const openModal = function (node) {
  // Restores the document's overflow state to normal
  document.getElementsByTagName("html")[0].style.overflow = "hidden";

  // Hides the modal window
  node.hidden = false;
};

// **
// * closeModal
// * Close the modal window
// * @param {}
// */

const closeModal = function (node) {
  // Restores the document's overflow state to normal
  document.getElementsByTagName("html")[0].style.overflow = "visible";

  // Hides the modal window
  node.hidden = true;
};

//############################################
//EVENT LISTENERS
//############################################

const modalEventListener = function () {
  document.addEventListener("click", function (e) {
    //Event listener for help button elements
    if (e.target && e.target.matches('.button[data-size="small"]')) {
      createModalContent(e);
      return createModalContent;
    } //Event listener for MODAL_CLOSE element
    else if (e.target === HELP_MODAL_CLOSE) {
      closeModal(MODAL_SECTION);
    } else if (e.target === SECTION_MODAL_BUTTON) {
      openModal(SECTION_MODAL_WINDOW);
    } else if (
      e.target === SECTION_MODAL_CLOSE ||
      e.target === SUMMARY_ASSETS_BUTTON ||
      e.target === SUMMARY_LIABILITIES_AND_EQUITY_BUTTON ||
      e.target === SUMMARY_PROFIT_AND_LOSS_BUTTON
    ) {
      closeModal(SECTION_MODAL_WINDOW);
    }
  });
};

// if (e.target.nodeName === "SUP")

export default modalEventListener;
