import ContentPage from '../components/ContentPage';

const paragraphs = [
  'Las vacaciones en Ecuador forman parte de los derechos laborales mas importantes del trabajador. Cuando una relacion laboral termina, una de las preguntas mas frecuentes es cuanto debe pagarse por vacaciones no gozadas. Esa duda es clave porque muchas veces el valor aparece resumido en el finiquito sin una explicacion sencilla.',
  'Para generar una referencia rapida, esta calculadora utiliza una formula proporcional basada en sueldo mensual y tiempo trabajado. El valor estimado de vacaciones se obtiene dividiendo el sueldo para veinticuatro y multiplicando el resultado por los meses trabajados. Esa aproximacion sirve para orientar al usuario aunque no reemplaza una revision legal completa.',
  'El tiempo trabajado se calcula a partir de la fecha de ingreso y la fecha de salida. Luego, la diferencia en dias se divide para treinta y asi se obtiene un numero aproximado de meses. Este enfoque permite ofrecer una experiencia clara, util y rapida para personas que quieren entender su situacion sin enfrentarse a formulas complejas.',
  'Conocer el valor proporcional de vacaciones ayuda a revisar si un finiquito parece correcto. Si la cifra ofrecida por la empresa se aleja mucho de la estimacion de la calculadora, el trabajador ya tiene una base para solicitar una explicacion mas detallada o buscar apoyo profesional antes de firmar cualquier documento.',
  'Desde la perspectiva de contenido, una pagina enfocada en vacaciones responde una busqueda concreta y de alta intencion. Muchas personas no entran primero buscando una calculadora, sino una explicacion. Si encuentran contenido claro y luego un acceso directo a una herramienta gratuita, es mas probable que se queden navegando y usen el sitio varias veces.',
  'Esa combinacion de contenido practico y calculadora tambien fortalece la monetizacion con anuncios. Google tiende a valorar mejor las paginas utiles para las personas, y los usuarios permanecen mas tiempo cuando encuentran informacion real y facil de aplicar. Por eso mejorar esta ruta puede ayudarte a atraer visitas y generar ingresos de forma mas estable.',
];

function Vacaciones() {
  return (
    <ContentPage
      eyebrow="Derechos del trabajador"
      title="Vacaciones en Ecuador: calculo proporcional y pago en la liquidacion"
      description="Aprende como calcular vacaciones proporcionales en Ecuador y como estimarlas dentro de una liquidacion laboral."
      path="/vacaciones-ecuador"
      paragraphs={paragraphs}
    />
  );
}

export default Vacaciones;
