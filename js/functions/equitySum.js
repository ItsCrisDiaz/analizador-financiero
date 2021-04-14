import {
  ASSETS_SECTION,
  LIABILITIES_AND_EQUITY_SECTION,
} from "../utils/sectionNavigationButtons.js";

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

export default equitySum;
