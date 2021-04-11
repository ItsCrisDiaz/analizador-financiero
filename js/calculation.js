import { formInformation } from "./getValue.js";

const calculation = function (indicator) {
  switch (indicator) {
    case "razonCorriente":
      if (formInformation.totalCurrentLiabilities === 0) {
        return "N/A";
      } else {
        return (
          formInformation.currentAssetsTotal /
          formInformation.totalCurrentLiabilities
        ).toFixed(2);
      }
    case "pruebaAcida":
      if (formInformation.totalCurrentLiabilities === 0) {
        return "N/A";
      } else {
        return (
          (formInformation.currentAssetsTotal - formInformation.inventory) /
          formInformation.totalCurrentLiabilities
        ).toFixed(2);
      }
    case "pruebaDefensiva":
      if (formInformation.totalCurrentLiabilities == 0) {
        return "N/A";
      } else {
        return (
          formInformation.cash / formInformation.totalCurrentLiabilities
        ).toFixed(2);
      }
    case "endeudamientoTotal":
      if (
        formInformation.currentAssetsTotal +
          formInformation.nonCurrentAssetsTotal ===
        0
      ) {
        return "N/A";
      } else {
        return (
          ((formInformation.totalCurrentLiabilities +
            formInformation.totalNonCurrentLiabilities) /
            (formInformation.currentAssetsTotal +
              formInformation.nonCurrentAssetsTotal)) *
          100
        ).toFixed(2);
      }
    case "apalancamientoTotal":
      if (formInformation.equity === 0) {
        return "N/A";
      } else {
        return (
          (formInformation.totalCurrentLiabilities +
            formInformation.totalNonCurrentLiabilities) /
          formInformation.equity
        ).toFixed(2);
      }
    case "margenBrutoDeUtilidad":
      if (formInformation.operatingRevenue === 0) {
        return "N/A";
      } else {
        return (
          (formInformation.grossProfit / formInformation.operatingRevenue) *
          100
        ).toFixed(2);
      }
    case "margenNetoDeUtilidad":
      if (formInformation.operatingRevenue === 0) {
        return "N/A";
      } else {
        return (
          (formInformation.netIncome / formInformation.operatingRevenue) *
          100
        ).toFixed(2);
      }
    case "rentabilidadSobreActivos":
      if (
        formInformation.currentAssetsTotal +
          formInformation.nonCurrentAssetsTotal ===
        0
      ) {
        return "N/A";
      } else {
        return (
          (formInformation.netIncome /
            (formInformation.currentAssetsTotal +
              formInformation.nonCurrentAssetsTotal)) *
          100
        ).toFixed(2);
      }
    default:
      return 0;
  }
};

export default calculation;
