import { formInformation } from "./getValue.js";

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

export default createSummary;
