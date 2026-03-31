import ContentPage from '../components/ContentPage';

const paragraphs = [
  'El acta de finiquito en Ecuador es el documento que registra el cierre de la relacion laboral y el detalle de los valores pagados al trabajador. Muchas personas lo reciben al final del proceso sin entender completamente que estan firmando. Por eso es muy util contar con una pagina que explique para que sirve y que revisar antes de aceptar el documento.',
  'En el acta suelen aparecer conceptos como sueldo pendiente, decimo tercero proporcional, vacaciones no gozadas y otros valores segun el caso. Si la relacion terminó por despido o por mutuo acuerdo, tambien pueden aparecer montos adicionales. La firma del acta tiene relevancia practica, de modo que es importante revisar el contenido con calma antes de confirmar la recepcion.',
  'Una calculadora de liquidacion no sustituye el acta de finiquito, pero ayuda a comparar los rubros mas comunes. Si el usuario ya llega con una estimacion aproximada de sus beneficios, puede detectar mas facilmente si las cifras del documento parecen bajas, incompletas o inconsistentes con el tiempo trabajado.',
  'Tambien conviene revisar fechas, nombres, concepto de terminacion y detalle de valores. En muchos casos el problema no solo es la cifra total, sino la falta de desglose. Cuando el trabajador sabe que conceptos esperar, se encuentra en una posicion mucho mejor para pedir aclaraciones antes de firmar cualquier documento final.',
  'Desde una estrategia de contenido, el termino acta de finiquito tiene una intencion de busqueda muy interesante porque el usuario suele estar en una etapa avanzada del proceso. Eso hace que el trafico sea potencialmente valioso y que una buena pagina pueda servir como puente directo hacia la calculadora principal del sitio.',
  'Crear contenido claro sobre el acta de finiquito tambien ayuda a que AdSense vea un sitio mas completo y util. Cuanto mas resuelvas dudas reales de los usuarios, mas oportunidades tendras de atraer visitas organicas de calidad y convertirlas en sesiones largas que fortalezcan la monetizacion del proyecto.',
];

function ActaFiniquito() {
  return (
    <ContentPage
      eyebrow="Cierre laboral"
      title="Acta de finiquito en Ecuador: que revisar antes de firmar"
      description="Conoce que revisar en un acta de finiquito en Ecuador y como usar una calculadora para comparar valores comunes."
      path="/acta-de-finiquito-ecuador"
      paragraphs={paragraphs}
    />
  );
}

export default ActaFiniquito;
