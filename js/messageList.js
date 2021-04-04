const INDICATORS_MESSAGES = {
  razonCorriente: {
    id: "currentRatio",
    percentage: false,
    warningText: "bueno, pero requiere observación.",
    positiveText: "bueno",
    negativeText: "malo",
    warningMessage:
      "A pesar de que la razón corriente de tu empresa está bastante bien, un indicador tan alto puede significar que tu empresa tenga demasiada liquidez. Esto puede ser indicador de que la empresa no está invirtiendo lo suficiente para hacer crecer la empresa. Esto puede generar problemas de estancamiento y falta de rentabilidad en el largo plazo.",
    positiveMessage:
      "Tus estados financieros reflejan que tu empresa es capaz de pagar sus obligaciones a corto plazo de forma efectiva, lo cual significa que la empresa tiene la capacidad suficiente de generar efectivo para poder funcionar a corto plazo.",
    negativeMessage:
      "Tus estados financieros reflejan que tu empresa no puede pagar sus obligaciones a corto plazo de forma efectiva, lo cual significa que la empresa no está generando el dinero suficiente para poder funcionar ni siquiera en un corto plazo.",
  },
  pruebaAcida: {
    id: "quickRatio",
    percentage: false,
    warningText: "bueno, pero requiere observación",
    positiveText: "bueno",
    negativeText: "malo",
    warningMessage:
      "A pesar de que el indicador de prueba ácida de tu empresa está bastante bien, un indicador tan alto puede significar que tu empresa tenga demasiados activos corrientes estáticos, lo que puede generar problemas de crecimiento y rentabilidad en el largo plazo.",
    positiveMessage:
      "Tus estados financieros reflejan que tu empresa es capaz de pagar sus obligaciones a corto plazo de forma efectiva incluso sin contar con los inventarios de tu empresa, lo cual significa que la empresa tiene la capacidad suficiente de generar efectivo para poder funcionar a corto plazo.",
    negativeMessage:
      "Tus estados financieros reflejan que tu empresa no puede pagar sus obligaciones a corto plazo de forma efectiva al menos que pueda vender sus inventarios, lo cual puede significar que en caso de una eventualidad, la empresa podría pasar por problemas de flujo de efectivo si por alguna razón se retrasa la venta de mercancía.",
  },
  pruebaDefensiva: {
    id: "cashRatio",
    percentage: false,
    warningText: "",
    positiveText: "",
    negativeText: "",
    warningMessage: "",
    positiveMessage: "",
    negativeMessage: "",
  },
  endeudamientoTotal: {
    id: "debtRatio",
    percentage: true,
    warningText: "",
    positiveText: "",
    negativeText: "",
    warningMessage: "",
    positiveMessage: "",
    negativeMessage: "",
  },
  apalancamientoTotal: {
    id: "debtToEquityRatio",
    percentage: false,
    warningText: "",
    positiveText: "",
    negativeText: "",
    warningMessage: "",
    positiveMessage: "",
    negativeMessage: "",
  },
  margenBrutoDeUtilidad: {
    id: "grossMargin",
    percentage: true,
    warningText: "",
    positiveText: "",
    negativeText: "",
    warningMessage: "",
    positiveMessage: "",
    negativeMessage: "",
  },
  margenNetoDeUtilidad: {
    id: "netMargin",
    percentage: true,
    warningText: "",
    positiveText: "",
    negativeText: "",
    warningMessage: "",
    positiveMessage: "",
    negativeMessage: "",
  },
  rentabilidadSobreActivos: {
    id: "returnOnAssets",
    percentage: true,
    warningText: "",
    positiveText: "",
    negativeText: "",
    warningMessage: "",
    positiveMessage: "",
    negativeMessage: "",
  },
};

export default INDICATORS_MESSAGES;
