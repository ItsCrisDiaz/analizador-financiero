import { DATABASE_INPUTS } from "./sectionNodes.js";

//formInformation, added in global scope to be used in multiple functions.
let formInformation;

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

export { formInformation, getValue };
