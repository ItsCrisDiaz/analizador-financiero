import equitySum from "./equitySum.js";

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

export default groupSum;
