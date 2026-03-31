import ContentPage from '../components/ContentPage';

const paragraphs = [
  'El despido intempestivo en Ecuador genera una de las consultas laborales mas delicadas y buscadas. Cuando una persona es separada de su trabajo sin previo acuerdo, necesita saber rapidamente si le corresponde indemnizacion y como revisar los valores que la empresa pone en el finiquito. Esa necesidad hace que esta pagina tenga mucho potencial de trafico util.',
  'A diferencia de la renuncia voluntaria, el despido intempestivo puede incluir indemnizaciones adicionales segun el caso. Ademas de esos valores, tambien suelen existir rubros proporcionales como decimo tercero y vacaciones no gozadas. Por eso es importante distinguir entre beneficios acumulados e indemnizaciones por la forma en que termino la relacion laboral.',
  'Una calculadora simple como la de este sitio no reemplaza el calculo legal completo del despido intempestivo, pero si ayuda a estimar una parte de los montos que suelen estar presentes en la liquidacion. Eso le da al usuario una base concreta para empezar a revisar lo que la empresa le ofrece antes de firmar documentos.',
  'Cuando el usuario entiende que hay distintos componentes dentro del pago final, mejora mucho su capacidad de hacer preguntas correctas. Puede separar lo que corresponde a vacaciones o decimo tercero de lo que podria ser una indemnizacion por despido. Esa claridad es muy valiosa en un momento de incertidumbre.',
  'Desde el punto de vista SEO, el despido intempestivo combina informacion legal, necesidad inmediata y alta intencion de consulta. Eso significa que una buena pagina informativa puede atraer visitas desde Google y conducirlas hacia otras herramientas del sitio, aumentando el tiempo de permanencia y la probabilidad de monetizacion.',
  'Si el proyecto sigue creciendo, esta ruta incluso puede convertirse en la base para una calculadora mas avanzada orientada a indemnizaciones. Por ahora, tener una pagina clara y bien enlazada ya es una excelente forma de ampliar el alcance del sitio y atraer usuarios muy interesados en temas laborales de Ecuador.',
];

function DespidoIntempestivo() {
  return (
    <ContentPage
      eyebrow="Despido e indemnizacion"
      title="Despido intempestivo en Ecuador: como entender tu liquidacion"
      description="Guia basica para entender el despido intempestivo en Ecuador y revisar los rubros mas comunes dentro de la liquidacion."
      path="/despido-intempestivo-ecuador"
      paragraphs={paragraphs}
    />
  );
}

export default DespidoIntempestivo;
