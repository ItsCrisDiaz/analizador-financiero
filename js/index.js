//########################################
//EVENT LISTENERS
//########################################

import modalEventListener from "./utils/createModalContent.js";

import { buttonEventListeners } from "./utils/sectionNavigationButtons.js";

import reportEventListener from "./utils/renderizeReport.js";

import {
  assetsSummaryEventListener,
  liabilitiesAndEquitySummaryEventListener,
  profitAndLossSummaryEventListener,
} from "./utils/renderizeSummary.js";

//########################################
//EVENT LISTENERS
//########################################

modalEventListener();
buttonEventListeners();
reportEventListener();
assetsSummaryEventListener();
liabilitiesAndEquitySummaryEventListener();
profitAndLossSummaryEventListener();
