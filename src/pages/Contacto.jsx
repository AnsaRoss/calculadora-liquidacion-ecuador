import ContentPage from '../components/ContentPage';

const paragraphs = [
  'La pagina de contacto existe para facilitar la comunicacion general relacionada con el proyecto Calculadora de Liquidacion Ecuador. Si detectas un error, deseas reportar un problema tecnico o quieres enviar una sugerencia de mejora, este es el espacio indicado para hacerlo.',
  'Por el momento, este sitio funciona como una herramienta informativa gratuita enfocada en temas laborales frecuentes en Ecuador. El proyecto puede seguir creciendo con nuevas guias, calculadoras y mejoras de experiencia para ayudar a mas usuarios a entender conceptos como liquidacion, finiquito, vacaciones y decimo tercero.',
  'Si deseas contactar al responsable del sitio, puedes habilitar posteriormente un correo de soporte o un formulario simple. Mientras tanto, esta pagina sirve como referencia institucional minima para mostrar que el proyecto tiene una via de contacto prevista y una intencion real de servicio al usuario.',
  'Tambien puedes utilizar este espacio como base para futuras colaboraciones, solicitudes de correccion de contenido o propuestas relacionadas con publicidad. A medida que el sitio gane trafico y nuevas rutas SEO, sera recomendable ampliar esta seccion con medios de contacto directos, horarios de respuesta y datos adicionales.',
  'Es importante recordar que el contenido del sitio es informativo y no reemplaza asesoria profesional personalizada. Si tu caso requiere una respuesta legal concreta, lo ideal es acudir a un especialista. Aun asi, el objetivo del proyecto es ofrecer herramientas claras, rapidas y accesibles para orientar al usuario antes de dar el siguiente paso.',
  'Gracias por visitar la Calculadora de Liquidacion Ecuador. Mantener una pagina de contacto visible ayuda a construir confianza, mejorar la imagen del sitio y reforzar buenas practicas que tambien son valiosas para SEO y monetizacion con plataformas publicitarias como Google AdSense.',
];

function Contacto() {
  return (
    <ContentPage
      eyebrow="Contacto"
      title="Contacto"
      description="Pagina de contacto e informacion general del proyecto Calculadora de Liquidacion Ecuador."
      path="/contacto"
      paragraphs={paragraphs}
      structuredDataType="ContactPage"
      pageType="website"
    />
  );
}

export default Contacto;
