import ContentPage from '../components/ContentPage';

const paragraphs = [
  'Estos terminos y condiciones regulan el uso general del sitio Calculadora de Liquidacion Ecuador. Al acceder y navegar por esta web, el usuario acepta utilizar el contenido y la herramienta de manera responsable y con fines informativos.',
  'La calculadora publicada en este sitio ofrece resultados estimados basados en formulas simplificadas. No constituye asesoria legal, contable ni laboral profesional. Los resultados no reemplazan una revision formal por parte de un abogado, contador, empleador o autoridad competente. Cada caso puede tener condiciones particulares que afecten el valor final.',
  'El propietario del sitio puede actualizar, modificar o retirar contenido en cualquier momento con el fin de mejorar la experiencia, corregir errores o ampliar las funcionalidades del proyecto. No se garantiza disponibilidad permanente ni ausencia absoluta de fallos tecnicos, aunque se procura mantener el servicio operativo y util para los usuarios.',
  'El usuario se compromete a no utilizar el sitio con fines ilicitos, fraudulentos o que perjudiquen el funcionamiento de la plataforma. Tampoco debe interpretar el contenido como una promesa de resultado legal o economico en un caso concreto. Toda decision relevante debe contrastarse con documentacion oficial y, si es necesario, con asesoria especializada.',
  'El sitio puede mostrar publicidad de terceros, incluyendo anuncios servidos por Google AdSense. La presencia de publicidad no implica recomendacion directa sobre los productos o servicios anunciados. Cada usuario es responsable de evaluar cualquier interaccion con terceros anunciantes.',
  'Si no estas de acuerdo con estos terminos, debes abstenerte de utilizar el sitio. Para preguntas generales sobre el funcionamiento del proyecto, puedes revisar la pagina de contacto. Publicar estos terminos ayuda a mejorar la transparencia del sitio y a construir una base mas solida para su crecimiento y monetizacion.',
];

function TerminosCondiciones() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Terminos y condiciones"
      description="Condiciones generales de uso de la Calculadora de Liquidacion Ecuador y alcance informativo de la herramienta."
      path="/terminos-y-condiciones"
      paragraphs={paragraphs}
      structuredDataType="WebPage"
      pageType="website"
    />
  );
}

export default TerminosCondiciones;
