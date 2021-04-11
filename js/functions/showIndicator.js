import INDICATORS_MESSAGES from "../objects/messageList.js";
import calculation from "./calculation.js";
import addClassAndMessage from "./addClassAndMessage.js";

const showIndicator = function (indicator) {
  let indicatorCalculation = calculation(indicator);
  let indicatorNode = document.querySelector(
    `#${INDICATORS_MESSAGES[indicator].id} .indicator`
  );
  if (indicatorCalculation === "N/A") {
    indicatorNode.innerHTML = `${indicatorCalculation}`;
  } else if (INDICATORS_MESSAGES[indicator].percentage === true) {
    indicatorNode.innerHTML = `${indicatorCalculation}%`;
  } else {
    indicatorNode.innerHTML = `${indicatorCalculation}`;
  }

  addClassAndMessage(indicator, indicatorCalculation);
};

export default showIndicator;
