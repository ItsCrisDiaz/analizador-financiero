//MODAL NODES
const MODAL_SECTION = document.querySelector(".modal");
const MODAL_TITLE = document.querySelector(".modal-header h3");
const MODAL_CONTENT_DESCRIPTION = document.querySelector(
  ".modal-content p:nth-child(1)"
);
const MODAL_CONTENT_EXAMPLES = document.querySelector(
  ".modal-content p:nth-child(2)"
);
const MODAL_CLOSE = document.querySelector(".close");

//MODAL FUNCTIONS

// **
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

export {
  MODAL_SECTION,
  MODAL_TITLE,
  MODAL_CONTENT_DESCRIPTION,
  MODAL_CONTENT_EXAMPLES,
  MODAL_CLOSE,
  createModalContent,
};
