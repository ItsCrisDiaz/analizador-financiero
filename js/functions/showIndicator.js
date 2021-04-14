import INDICATORS_MESSAGES from "../objects/messageList.js";
import calculation from "../utils/calculationSwitchCase.js";
import addClassAndMessage from "./addClassAndMessage.js";
import { SUBMIT_FORM_BUTTON } from "../utils/sectionNavigationButtons.js";

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

const reportEventListener = document
  .querySelector("#generateContent")
  .addEventListener("click", function (e) {
    Object.keys(INDICATORS_MESSAGES).forEach((indicator) =>
      showIndicator(indicator)
    );
  });

export default reportEventListener;
