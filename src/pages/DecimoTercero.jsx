import ContentPage from '../components/ContentPage';

const paragraphs = [
  'El decimo tercero en Ecuador es uno de los beneficios laborales mas conocidos. Muchas personas lo buscan cuando revisan su rol de pagos o cuando quieren saber cuanto dinero deberian recibir en una liquidacion. Entender su funcionamiento es clave para comprobar si el valor entregado por el empleador tiene sentido.',
  'De forma practica, el decimo tercero representa una parte proporcional de las remuneraciones recibidas por el trabajador. Cuando se quiere estimar rapidamente con un sueldo mensual fijo, una formula simple consiste en dividir el sueldo para doce y multiplicar ese resultado por los meses trabajados. Eso da un valor de referencia facil de interpretar.',
  'Este beneficio suele aparecer en la liquidacion cuando la persona deja de trabajar antes de haber recibido el pago anual completo. En ese caso, el empleador debe reconocer la parte acumulada hasta la fecha de salida. Por eso muchas consultas en Google giran alrededor de cuanto corresponde por decimo tercero al renunciar o ser despedido.',
  'Es importante recordar que pueden existir variaciones cuando el sueldo no es fijo o cuando hay ingresos adicionales que forman parte de la remuneracion. Sin embargo, para una calculadora simple y orientada al usuario, un modelo proporcional con sueldo mensual fijo resulta suficiente para ofrecer una respuesta util y rapida.',
  'Tambien conviene mirar este rubro junto con vacaciones no gozadas y otros valores pendientes. Analizarlo dentro del contexto de la liquidacion mejora la comprension general y ayuda a que el trabajador tenga una expectativa mas realista antes de conversar con recursos humanos o con un asesor laboral.',
  'Una pagina dedicada al decimo tercero tiene mucho potencial SEO porque responde una intencion de busqueda directa. Si el contenido es claro y luego conduce al usuario hacia una calculadora gratuita, el sitio puede atraer trafico, mejorar el tiempo de permanencia y abrir espacio para monetizacion con anuncios sin sacrificar utilidad.',
];

function DecimoTercero() {
  return (
    <ContentPage
      eyebrow="Beneficios laborales"
      title="Decimo tercero en Ecuador: como se calcula y cuando se paga"
      description="Conoce como calcular el decimo tercero en Ecuador y como estimarlo dentro de una liquidacion laboral proporcional."
      path="/decimo-tercero-ecuador"
      paragraphs={paragraphs}
    />
  );
}

export default DecimoTercero;
