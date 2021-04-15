//########################################
//EVENT LISTENERS
//########################################

import modalEventListener from "./utils/createModalContent.js";

import { buttonEventListeners } from "./utils/sectionNavigationButtons.js";

import reportEventListener from "./utils/renderizeReport.js";

import {
  assetsEventCalcListener,
  liabilitiesAndEquityCalcEventListener,
  profitAndLossCalcEventListener,
} from "./utils/groupCalculation.js";

import {
  assetsSummaryEventListener,
  liabilitiesAndEquitySummaryEventListener,
  profitAndLossSummaryEventListener,
} from "./utils/renderizeSummary.js";
