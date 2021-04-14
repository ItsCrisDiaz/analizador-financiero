import INDICATORS_MESSAGES from "../objects/messageList.js";
import calculation from "../utils/calculationSwitchCase.js";
import caseIndicator from "../utils/caseIndicatorSwitchCase.js";

const addClassAndMessage = (indicator, result) => {
  let indicatorNode = document.querySelector(
    `#${INDICATORS_MESSAGES[indicator].id} .indicator`
  );
  let indicatorStateNode = document.querySelector(
    `#${INDICATORS_MESSAGES[indicator].id} .indicator-state`
  );
  let indicatorStateExplanation = document.querySelector(
    `#${INDICATORS_MESSAGES[indicator].id} .indicator-explanation`
  );
  let indicatorCalculation = calculation(indicator);
  let caseIndicatorResult = caseIndicator(indicator, result);

  if (indicatorCalculation === "N/A") {
    indicatorNode.classList.add("warning");
    indicatorNode.classList.remove("correct", "wrong");
    indicatorStateNode.innerHTML = "No aplicable a tus estados";
    indicatorStateNode.classList.add("warning");
    indicatorStateNode.classList.remove("correct", "wrong");
    indicatorStateExplanation.innerHTML =
      "No es posible calcular este indicador financiero con base en la información brindada.";
  } else if (caseIndicatorResult === "positive") {
    indicatorNode.classList.add("correct");
    indicatorNode.classList.remove("wrong", "warning");
    indicatorStateNode.innerHTML = `${INDICATORS_MESSAGES[indicator].positiveText}`;
    indicatorStateNode.classList.add("correct");
    indicatorStateNode.classList.remove("wrong", "warning");
    indicatorStateExplanation.innerHTML = `${INDICATORS_MESSAGES[indicator].positiveMessage}`;
  } else if (caseIndicatorResult === "negative") {
    indicatorNode.classList.add("wrong");
    indicatorNode.classList.remove("correct", "warning");
    indicatorStateNode.innerHTML = `${INDICATORS_MESSAGES[indicator].negativeText}`;
    indicatorStateNode.classList.add("wrong");
    indicatorStateNode.classList.remove("correct", "warning");
    indicatorStateExplanation.innerHTML = `${INDICATORS_MESSAGES[indicator].negativeMessage}`;
  } else {
    indicatorNode.classList.add("warning");
    indicatorNode.classList.remove("correct", "wrong");
    indicatorStateNode.innerHTML = `${INDICATORS_MESSAGES[indicator].warningText}`;
    indicatorStateNode.classList.add("warning");
    indicatorStateNode.classList.remove("correct", "wrong");
    indicatorStateExplanation.innerHTML = `${INDICATORS_MESSAGES[indicator].warningMessage}`;
  }
};

export default addClassAndMessage;
