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
      "Tu prueba defensiva está bien, pero un indicador tan alto puede ser sinónimo de que tu empresa no está invirtiendo lo suficiente para hacer rentable tu empresa en el largo plazo.",
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
    warningText: "alto",
    positiveText: "normal",
    negativeText: "muy alto",
    warningMessage:
      "Tu nivel de apalancamiento es algo alto, lo que indica que tal ves estás empezando a acumular más deuda de la necesaria para funcionar. Esto también genera un riesgo en caso de que busques inversionistas porque entre mayor este indicador, mayor el riesgo que estos pueden tener al momento de invertir.",
    positiveMessage:
      "Tu nivel de apalancamiento está en niveles normales, lo que indica que la empresa tiene un nivel de deuda aceptable y no compromete la capacidad de la empresa para realizar sus operaciones.",
    negativeMessage:
      "Tu nivel de apalancamiento es muy alto, lo que indica que la empresa posee demasiada deuda en relación con el patrimonio de la empresa. Esto también indica que un inversionista tendría un riesgo muy alto de invertir en tu negocio. Se recomienda tomar acciones para poder reducir la deuda a un nivel razonable.",
  },
  margenBrutoDeUtilidad: {
    id: "grossMargin",
    percentage: true,
    warningText: "",
    positiveText: "positivo",
    negativeText: "negativo",
    warningMessage: "",
    positiveMessage:
      "El margen de utilidad de tu empresa es positivo, lo que quiere decir que a nivel de producción o prestación de servicio, la actividad de la empresa es rentable. Dependiendo del sector de la economía en el que la empresa se encuentre, este margen bruto de utilidad puede estar dentro de los límites normales o tanto por encima o por debajo del promedio. <br><br>Es importante recordar que aunque este analizador financiero puede dar una idea general de la salud financiera de tu empresa; este tipo de detalles no son evaluados por este analizador por lo que <strong>este indicador en particular debería ser analizado por un profesional de las finanzas.</strong>",
    negativeMessage:
      "El margen bruto de utilidad de tu empresa es negativo, lo que quiere decir que a nivel de producción o prestación de servicio, la actividad de la empresa <strong>no está siendo rentable</strong> y debe examinarse a profundidad el resultado del periodo para entender el por qué de este resultado.",
  },
  margenNetoDeUtilidad: {
    id: "netMargin",
    percentage: true,
    warningText: "",
    positiveText: "positivo",
    negativeText: "negativo",
    warningMessage: "",
    positiveMessage:
      "El margen neto de utilidad de tu empresa es positivo, lo que indica que, teniendo en cuenta toda las operaciones que realiza la empresa, la actividad de esta es rentable. Dependiendo del sector de la economía en el que la empresa se encuentre, este margen bruto de utilidad puede estar dentro de los límites normales o tanto por encima o por debajo del promedio. <br><br>Es importante recordar que aunque este analizador financiero puede dar una idea general de la salud financiera de tu empresa; este tipo de detalles no son evaluados por este analizador por lo que <strong>este indicador en particular debería ser analizado por un profesional de las finanzas.</strong>",
    negativeMessage:
      "El margen neto de utilidad de tu empresa es negativo, lo que indica que la empresa no tuvo la capacidad de cubrir gastos administrativos y de venta. Esto puede deberse a una reducción de los ingresos del periodo o a un aumento de gastos por alguna eventualidad. Es importante analizar el por qué ocurrió dicha pérdida y tomar acciones para remediarla en el próximo periodo contable.",
  },
  rentabilidadSobreActivos: {
    id: "returnOnAssets",
    percentage: true,
    warningText: "",
    positiveText: "positivo",
    negativeText: "negativo",
    warningMessage: "",
    positiveMessage:
      "La rentabilidad sobre activos de tu empresa es positiva, lo que quiere decir que los activos están contribuyendo de forma positiva a la generación de utilidad. <br><br>Este indicador en particular es muy dependiente del sector de la economía en el que el indicador se ubique. Este tipo de detalles no son evaluados por este analizador por lo que <strong>este indicador en particular debería ser analizado por un profesional de las finanzas.</strong>",
    negativeMessage:
      "Debido a que el resultado de tu estado de resultados fue pérdida, este indicador es negativo. Es prudente revisar tu estado de resultados y revisar las razones por las que se llegaron a esta pérdida para tomar acciones pertinentes para este periodo contable.",
  },
};

export default INDICATORS_MESSAGES;
