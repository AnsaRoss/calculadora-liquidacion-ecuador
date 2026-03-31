import ContentPage from '../components/ContentPage';

const paragraphs = [
  'Esta politica de privacidad describe de forma general como puede tratarse la informacion cuando una persona visita la Calculadora de Liquidacion Ecuador. El objetivo principal del sitio es ofrecer contenido informativo y una herramienta gratuita para estimar valores relacionados con liquidacion laboral en Ecuador.',
  'El sitio no solicita crear cuentas ni entregar datos personales sensibles para usar la calculadora. Los valores introducidos por el usuario, como sueldo y fechas, se procesan localmente en el navegador con el fin de mostrar un resultado estimado. El sitio puede utilizar servicios de terceros, como Google AdSense y Google Analytics si se activan en el futuro, para mostrar anuncios o medir el uso general del proyecto.',
  'Los servicios de terceros pueden usar cookies u otras tecnologias similares para personalizar contenido, medir rendimiento o mostrar publicidad relevante. Cada proveedor aplica sus propias politicas y condiciones. Por esa razon, el usuario debe entender que al navegar por el sitio puede interactuar indirectamente con herramientas externas operadas por terceros.',
  'El proyecto busca mantener una experiencia segura y clara, pero ninguna transmision en internet puede considerarse totalmente libre de riesgo. Si en el futuro se agregan formularios de contacto, integraciones externas o nuevas funciones, esta politica podria actualizarse para reflejar esos cambios de manera mas precisa.',
  'Al continuar navegando por el sitio, el usuario acepta el uso razonable de estas herramientas tecnicas dentro del contexto de un proyecto informativo y publicitario. Si deseas dejar de interactuar con ciertas tecnologias, puedes revisar la configuracion de tu navegador o las politicas especificas de proveedores como Google.',
  'Para consultas sobre esta politica o sobre el funcionamiento general del sitio, puedes utilizar la pagina de contacto disponible dentro del proyecto. Esta pagina se publica para mejorar la transparencia, fortalecer la confianza del usuario y cumplir mejores practicas de monetizacion y presencia web.',
];

function PoliticaPrivacidad() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Politica de privacidad"
      description="Conoce de forma general como funciona la privacidad y el uso de herramientas de terceros en este sitio web."
      path="/politica-de-privacidad"
      paragraphs={paragraphs}
      structuredDataType="WebPage"
      pageType="website"
    />
  );
}

export default PoliticaPrivacidad;
