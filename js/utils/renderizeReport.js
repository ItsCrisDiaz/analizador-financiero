import INDICATORS_MESSAGES from "./messageList.js";
import calculation from "./calculationSwitchCase.js";
import { SUBMIT_FORM_BUTTON } from "./sectionNavigationButtons.js";
import caseIndicator from "../utils/caseIndicatorSwitchCase.js";

//############################################
//FUNCTIONS
//############################################

// **
// * addClassAndMessage
// * Renderizes the report adding classes to nodes and adding the indicator, state and description.
// * @param {key} indicator   name of the key in object INDICATORS_MESSAGES
// * @param {number} result   indicator calculated in function calculation
// */

const addClassAndMessage = (indicator, result) => {
  // Selects the nodes where it's nedded to add classes and content.
  let indicatorContainer = document.querySelector(
    `#${INDICATORS_MESSAGES[indicator].id} .indicator-container`
  );

  let indicatorImage = document.querySelector(
    `#${INDICATORS_MESSAGES[indicator].id} img`
  );

  let indicatorNode = document.querySelector(
    `#${INDICATORS_MESSAGES[indicator].id} .indicator`
  );
  let indicatorStateNode = document.querySelector(
    `#${INDICATORS_MESSAGES[indicator].id} .indicator-state`
  );
  let indicatorStateExplanation = document.querySelector(
    `#${INDICATORS_MESSAGES[indicator].id} .indicator-explanation`
  );

  //Calculates the indicator and the case result of that indicator
  let indicatorCalculation = calculation(indicator);
  let caseIndicatorResult = caseIndicator(indicator, result);

  // caseIndicator = "N/A"
  if (indicatorCalculation === "N/A") {
    // Adds the respective class to indicator-container
    indicatorContainer.classList.add("warning");
    indicatorContainer.classList.remove("correct", "wrong");
    // Add the respective source and alt description to the img
    indicatorImage.src =
      "/analizador-financiero/img/icons/calculation-error.svg";
    indicatorImage.alt = "Indicador no aplicable a los estados financieros";
    // Add the respective class and removes the other two options in indicatorNode.
    indicatorNode.classList.add("warning");
    indicatorNode.classList.remove("correct", "wrong");
    //Changes the message of indicatorStateNode in indicatorNode.
    indicatorStateNode.innerHTML = "No aplicable a tus estados";
    // Add the respective class and removes the other two options in indicatorStateNode.
    indicatorStateNode.classList.add("warning");
    indicatorStateNode.classList.remove("correct", "wrong");
    //Changes the message of indicatorStateNode in indicatorStateNode.
    indicatorStateExplanation.innerHTML =
      "No es posible calcular este indicador financiero con base en la información brindada.";

    // Positive caseIndicator
  } else if (caseIndicatorResult === "positive") {
    indicatorContainer.classList.add("correct");
    indicatorContainer.classList.remove("warning", "wrong");
    indicatorImage.src = "/analizador-financiero/img/icons/correct.svg";
    indicatorImage.alt = "Este indicador es positivo";
    indicatorNode.classList.add("correct");
    indicatorNode.classList.remove("wrong", "warning");
    indicatorStateNode.innerHTML = `${INDICATORS_MESSAGES[indicator].positiveText}`;
    indicatorStateNode.classList.add("correct");
    indicatorStateNode.classList.remove("wrong", "warning");
    indicatorStateExplanation.innerHTML = `${INDICATORS_MESSAGES[indicator].positiveMessage}`;

    // Negative caseIndicator
  } else if (caseIndicatorResult === "negative") {
    indicatorContainer.classList.add("wrong");
    indicatorContainer.classList.remove("correct", "warning");
    indicatorImage.src = "/analizador-financiero/img/icons/error.svg";
    indicatorImage.alt = "Este indicador es negativo";
    indicatorNode.classList.add("wrong");
    indicatorNode.classList.remove("correct", "warning");
    indicatorStateNode.innerHTML = `${INDICATORS_MESSAGES[indicator].negativeText}`;
    indicatorStateNode.classList.add("wrong");
    indicatorStateNode.classList.remove("correct", "warning");
    indicatorStateExplanation.innerHTML = `${INDICATORS_MESSAGES[indicator].negativeMessage}`;

    // Warning caseIndicator
  } else {
    indicatorContainer.classList.add("warning");
    indicatorContainer.classList.remove("correct", "wrong");
    indicatorImage.src = "/analizador-financiero/img/icons/warning.svg";
    indicatorImage.alt = "Este indicador requiere observación";
    indicatorNode.classList.add("warning");
    indicatorNode.classList.remove("correct", "wrong");
    indicatorStateNode.innerHTML = `${INDICATORS_MESSAGES[indicator].warningText}`;
    indicatorStateNode.classList.add("warning");
    indicatorStateNode.classList.remove("correct", "wrong");
    indicatorStateExplanation.innerHTML = `${INDICATORS_MESSAGES[indicator].warningMessage}`;
  }
};

// **
// * showIndicator
// * Renderizes the report adding classes to nodes and adding the indicator, state and description.
// * @param {key} indicator   name of the key in object INDICATORS_MESSAGES
// */

const showIndicator = function (indicator) {
  // Calculates the indicator and selects the node where this result should be renderized.
  let indicatorCalculation = calculation(indicator);
  let indicatorNode = document.querySelector(
    `#${INDICATORS_MESSAGES[indicator].id} .indicator`
  );

  if (indicatorCalculation === "N/A") {
    // If there is not way to calculate indicatorCalculation then it shows "N/A"
    indicatorNode.innerHTML = `${indicatorCalculation}`;
  } else if (INDICATORS_MESSAGES[indicator].percentage === true) {
    // If the result is a percentage, adds % at the end.
    indicatorNode.innerHTML = `${indicatorCalculation}%`;
  } else {
    // If not, renderizes the indicator without any modification.
    indicatorNode.innerHTML = `${indicatorCalculation}`;
  }

  addClassAndMessage(indicator, indicatorCalculation);
};

//############################################
//EVENT LISTENER
//############################################

const reportEventListener = function () {
  document.addEventListener("click", function (e) {
    if (e.target === SUBMIT_FORM_BUTTON) {
      Object.keys(INDICATORS_MESSAGES).forEach((indicator) =>
        showIndicator(indicator)
      );
    }
  });
};

export default reportEventListener;
