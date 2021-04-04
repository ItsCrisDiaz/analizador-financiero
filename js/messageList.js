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
    warningText: "bueno, pero requiere observación",
    positiveText: "bueno",
    negativeText: "malo",
    warningMessage:
      "Tu prueba defensiva está bien, pero un indicador puede ser sinónimo de que tu empresa no está invirtiendo lo suficiente para hacer rentable tu empresa en el largo plazo.",
    positiveMessage:
      "Tus estados financieros reflejan que tienes la capacidad para cubrir una buena parte de tus obligaciones a corto plazo sólamente con tu efectivo, lo cual es un buen indicador de que tu empresa tiene la solvencia suficiente para seguir funcionando.",
    negativeMessage:
      "Tus estados financieros reflejan que tu negocio no tiene el efectivo suficiente para cubrir tus obligaciones a corto plazo, lo cual muestra que -al menos contando únicamente con el dinero en efectivo- en este momento tu empresa muestra problemas para cubrir tus obligaciones a corto plazo.",
  },
  endeudamientoTotal: {
    id: "debtRatio",
    percentage: true,
    warningText: "alto",
    positiveText: "normal",
    negativeText: "muy alto",
    warningMessage:
      "Un nivel de endeudamiento como este indica que tienes un nivel de deuda total casi tan alto como tus activos, lo cual puede indicar que tu empresa tiene mucha más deuda de lo necesario.",
    positiveMessage:
      "Tu nivel de endeudamiento indica que la cantidad de obligaciones que la empresa tiene está dentro de los límites normales y no genera mayor nivel de preocupación.",
    negativeMessage:
      "Tu nivel de endeudamiento indica que tienes más deudas que bienes en tu empresa, lo cual es una mala señal. La empresa debería considerar tomar acciones inmediatas para empezar a reducir el nivel de deuda",
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
  rentabilidadSobrePatrimonio: {
    id: "returnOnEquity",
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
