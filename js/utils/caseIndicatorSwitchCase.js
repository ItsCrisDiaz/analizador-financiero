//############################################
//FUNCTIONS
//############################################

// **
// * caseIndicator
// * Selects a case depending of the result in calculation function
// * @param {key} indicator   name of the key in object INDICATORS_MESSAGES
// * @param {number} result   indicator calculated in function calculation
// */

const caseIndicator = (indicator, result) => {
  switch (indicator) {
    case "razonCorriente":
      if (result >= 1 && result < 2) {
        return "positive";
      } else if (result >= 2) {
        return "warning";
      } else {
        return "negative";
      }
    case "pruebaAcida":
      if (result >= 1 && result < 2) {
        return "positive";
      } else if (result >= 2) {
        return "warning";
      } else {
        return "negative";
      }
    case "pruebaDefensiva":
      if (result >= 0.5 && result < 1.5) {
        return "positive";
      } else if (result >= 1.5) {
        return "warning";
      } else {
        return "negative";
      }
    case "endeudamientoTotal":
      if (result <= 80) {
        return "positive";
      } else if (result >= 80 && result < 100) {
        return "warning";
      } else {
        return "negative";
      }
    case "apalancamientoTotal":
      if (result < 1.5) {
        return "positive";
      } else if (result >= 1.5 && result < 2) {
        return "warning";
      } else {
        return "negative";
      }
    case "margenBrutoDeUtilidad":
      if (result > 0) {
        return "positive";
      } else {
        return "negative";
      }
    case "margenNetoDeUtilidad":
      if (result > 0) {
        return "positive";
      } else {
        return "negative";
      }
    case "rentabilidadSobreActivos":
      if (result > 0) {
        return "positive";
      } else {
        return "negative";
      }
    default:
      return "positive";
  }
};

export default caseIndicator;
