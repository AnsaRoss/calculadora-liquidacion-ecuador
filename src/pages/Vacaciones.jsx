import { Link } from 'react-router-dom';

function Vacaciones() {
  return (
    <main className="app-shell">
      <article className="seo-page">
        <p className="eyebrow">Derechos del trabajador</p>
        <h1>Vacaciones en Ecuador: calculo proporcional y pago en la liquidacion</h1>

        <div className="seo-content">
          <p>
            Las vacaciones en Ecuador forman parte de los derechos laborales mas
            importantes para los trabajadores. Cuando una relacion laboral termina,
            es comun que surja la duda sobre cuanto debe pagarse por vacaciones no
            gozadas. Por eso una pagina enfocada en este tema resulta clave tanto
            para educar al usuario como para atraer visitas organicas desde
            buscadores que responden preguntas especificas sobre liquidacion y
            beneficios pendientes.
          </p>

          <p>
            Para hacer una estimacion simple de vacaciones dentro de una
            calculadora de liquidacion, se puede utilizar una formula proporcional
            basada en el sueldo mensual y el tiempo trabajado. En este proyecto se
            aplica la operacion sueldo dividido para veinticuatro y multiplicado
            por los meses trabajados. Esa aproximacion no reemplaza un analisis
            legal completo, pero sirve muy bien como referencia inicial para
            usuarios que desean una respuesta clara y rapida.
          </p>

          <p>
            El tiempo trabajado se obtiene calculando la diferencia entre la fecha
            de ingreso y la fecha de salida. Luego, ese numero de dias se divide
            para treinta a fin de convertirlo en meses aproximados. Una vez que ya
            se conoce el valor de meses trabajados, el sistema puede estimar de
            manera directa el proporcional de vacaciones. Este enfoque es facil de
            comprender y hace que la calculadora sea util incluso para personas que
            no tienen conocimientos tecnicos o legales.
          </p>

          <p>
            Conocer el valor de vacaciones pendientes tambien ayuda a revisar si un
            finiquito esta bien planteado. Muchas veces el trabajador recibe una
            cifra total sin detalle suficiente, y una calculadora independiente
            permite contrastar el monto. Aunque el resultado sea estimado, ofrece
            una base concreta para hacer preguntas, pedir explicaciones o buscar
            asesoria si existe alguna diferencia importante.
          </p>

          <p>
            Desde una estrategia de contenido SEO, hablar de vacaciones en Ecuador
            dentro de una ruta propia permite responder una intencion de busqueda
            muy puntual. Algunos usuarios buscan directamente el termino
            vacaciones-ecuador y esperan encontrar definiciones, formulas y una
            forma de calcular el pago. Si despues de leer la explicacion reciben un
            acceso visible a la calculadora, la conversion hacia la herramienta es
            mucho mas natural.
          </p>

          <p>
            Si necesitas una estimacion de vacaciones no gozadas junto con otros
            valores de liquidacion, vuelve a la pagina principal y usa la
            calculadora. Con solo ingresar tus fechas y tu sueldo mensual podras
            ver un resultado rapido que te ayude a entender mejor tu situacion
            laboral en Ecuador.
          </p>
        </div>

        <Link className="primary-button seo-link" to="/">
          Usar calculadora
        </Link>
      </article>
    </main>
  );
}

export default Vacaciones;
