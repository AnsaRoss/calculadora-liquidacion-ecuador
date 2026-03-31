import ContentPage from '../components/ContentPage';

const paragraphs = [
  'Calcular la liquidacion laboral en Ecuador es importante para cualquier trabajador que termina una relacion de trabajo por renuncia, despido o finalizacion de contrato. Tener una referencia clara ayuda a entender si el valor propuesto por el empleador parece razonable y tambien permite hacer preguntas con mas seguridad al momento de revisar un finiquito.',
  'El calculo base suele comenzar con tres datos: sueldo mensual, fecha de ingreso y fecha de salida. Con estos elementos se obtiene el tiempo trabajado, que en esta herramienta se estima tomando la diferencia en dias y dividiendola para treinta. Esa aproximacion es util para generar una respuesta simple, rapida y facil de comprender por cualquier usuario.',
  'Luego se calcula el decimo tercero proporcional. En una version simplificada, se divide el sueldo para doce y se multiplica por los meses trabajados. Este rubro es uno de los mas consultados porque representa un valor acumulado que el trabajador espera recibir cuando termina la relacion laboral y aun no ha sido pagado completamente.',
  'Despues se estima el valor de vacaciones no gozadas. Para una referencia practica, la formula utilizada es sueldo dividido para veinticuatro y multiplicado por los meses trabajados. No reemplaza un estudio legal detallado, pero si ofrece un punto de partida bastante util para revisar si el total recibido esta dentro de un rango esperable.',
  'La suma de esos rubros da un total estimado de liquidacion. Dependiendo del caso, pueden existir otros componentes como horas extra, bonificaciones, fondos pendientes o indemnizaciones, pero esta calculadora se enfoca en dos beneficios comunes y faciles de entender. Eso mejora la experiencia del usuario porque evita complejidad innecesaria y entrega un resultado inmediato.',
  'Desde el punto de vista SEO, una guia como esta responde una duda frecuente que muchos usuarios escriben en Google. Si la informacion es clara, bien estructurada y se conecta con una herramienta util, es mucho mas probable que la pagina gane visitas organicas y que los usuarios terminen usando la calculadora principal del sitio.',
];

function ComoCalcular() {
  return (
    <ContentPage
      eyebrow="Guia laboral"
      title="Como calcular la liquidacion laboral en Ecuador paso a paso"
      description="Aprende como calcular la liquidacion laboral en Ecuador con una guia clara sobre meses trabajados, decimo tercero y vacaciones."
      path="/como-calcular-liquidacion-ecuador"
      paragraphs={paragraphs}
    />
  );
}

export default ComoCalcular;
