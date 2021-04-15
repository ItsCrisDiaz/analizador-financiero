import INDICATORS_MESSAGES from "../objects/messageList.js";

import {
  INSTRUCTIONS_SECTION,
  ASSETS_SECTION,
  LIABILITIES_AND_EQUITY_SECTION,
  PROFIT_AND_LOSS_SECTION,
  SUMMARY_SECTION,
  REPORT_SECTION,
  SUBMIT_FORM,
} from "../nodes/sectionNodes.js";

import {
  INSTRUCTION_BUTTON,
  ASSETS_NEXT_BUTTON,
  ASSETS_BACK_BUTTON,
  LIABILITIES_AND_EQUITY_NEXT_BUTTON,
  LIABILITIES_AND_EQUITY_BACK_BUTTON,
  PROFIT_AND_LOSS_NEXT_BUTTON,
  PROFIT_AND_LOSS_BACK_BUTTON,
  SUMMARY_ASSETS_BUTTON,
  SUMMARY_LIABILITIES_AND_EQUITY_BUTTON,
  SUMMARY_PROFIT_AND_LOSS_BUTTON,
} from "../nodes/buttonNodes.js";

import changeSectionButton from "../utils/sectionNavigationButtons.js";

import showIndicator from "../functions/showIndicator.js";

// const documentEventListener = document.addEventListener("click", function (e) {
//   if (e.target === INSTRUCTION_BUTTON) {
//     changeSectionButton(INSTRUCTIONS_SECTION, ASSETS_SECTION);
//   } else if (e.target === ASSETS_BACK_BUTTON) {
//     changeSectionButton(ASSETS_SECTION, INSTRUCTIONS_SECTION);
//   } else if (e.target === ASSETS_NEXT_BUTTON) {
//     changeSectionButton(ASSETS_SECTION, LIABILITIES_AND_EQUITY_SECTION);
//   } else if (e.target === LIABILITIES_AND_EQUITY_BACK_BUTTON) {
//     changeSectionButton(LIABILITIES_AND_EQUITY_SECTION, ASSETS_SECTION);
//   } else if (e.target === LIABILITIES_AND_EQUITY_NEXT_BUTTON) {
//     changeSectionButton(
//       LIABILITIES_AND_EQUITY_SECTION,
//       PROFIT_AND_LOSS_SECTION
//     );
//   } else if (e.target === PROFIT_AND_LOSS_BACK_BUTTON) {
//     changeSectionButton(
//       PROFIT_AND_LOSS_SECTION,
//       LIABILITIES_AND_EQUITY_SECTION
//     );
//   } else if (e.target === PROFIT_AND_LOSS_NEXT_BUTTON) {
//     changeSectionButton(PROFIT_AND_LOSS_SECTION, SUMMARY_SECTION);
//   } else if (e.target === SUMMARY_ASSETS_BUTTON) {
//     changeSectionButton(SUMMARY_SECTION, ASSETS_SECTION);
//   } else if (e.target === SUMMARY_LIABILITIES_AND_EQUITY_BUTTON) {
//     changeSectionButton(SUMMARY_SECTION, LIABILITIES_AND_EQUITY_SECTION);
//   } else if (e.target === SUMMARY_PROFIT_AND_LOSS_BUTTON) {
//     changeSectionButton(SUMMARY_SECTION, PROFIT_AND_LOSS_SECTION);
//   } else if (e.target === SUBMIT_FORM) {
//     Object.keys(INDICATORS_MESSAGES).forEach((indicator) =>
//       showIndicator(indicator)
//     );
//     changeSectionButton(SUMMARY_SECTION, REPORT_SECTION);
//   }
// });

// export default documentEventListener;