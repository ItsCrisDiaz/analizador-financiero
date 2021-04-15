//########################################
//EVENT LISTENERS
//########################################

// import { getArrayEventListener } from "./utils/getValue.js";

import modalEventListener from "./utils/createModalContent.js";

import { buttonEventListeners } from "./utils/sectionNavigationButtons.js";

import reportEventListener from "./utils/renderizeReport.js";

import {
  assetsEventCalcListener,
  liabilitiesAndEquityCalcEventListener,
  profitAndLossCalcEventListener,
} from "./utils/groupCalculation.js";

import {
  assetsEventListener,
  liabilitiesAndEquityEventListener,
  profitAndLossEventListener,
} from "./eventListeners/sectionsChange.js";
