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
  // Getting the information from all inputs with the data-value[result] attribute
  let selectFormValue = DATABASE_INPUTS;

  // Using selectFormValue information to create an array and store it in formInformation

  formInformation = Array.from(selectFormValue).reduce(
    (acc, input) => ({ ...acc, [input.id]: parseInt(input.value) }),
    {}
  );
  console.table(formInformation);
};

//############################################
//EVENT LISTENERS
//############################################

const getArrayEventListener = document.addEventListener("change", function (e) {
  if (e.target === DATABASE_INPUTS) {
    getValue();
    console.log(DATABASE_INPUTS);
    console.log("Hola");
  }
});

export { formInformation, getValue, getArrayEventListener };
