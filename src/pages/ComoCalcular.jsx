import { Link } from 'react-router-dom';

function ComoCalcular() {
  return (
    <main className="app-shell">
      <article className="seo-page">
        <p className="eyebrow">Guia laboral</p>
        <h1>Como calcular la liquidacion laboral en Ecuador paso a paso</h1>

        <div className="seo-content">
          <p>
            Calcular la liquidacion laboral en Ecuador es una tarea importante para
            cualquier trabajador que termina una relacion de trabajo, ya sea por
            renuncia, despido o finalizacion de contrato. Este calculo permite
            conocer un valor aproximado de lo que el empleador debe pagar por
            beneficios acumulados durante el tiempo trabajado. Aunque existen
            muchos casos particulares en la normativa ecuatoriana, una forma
            practica de empezar es estimar los rubros proporcionales mas comunes:
            el decimo tercero y las vacaciones no gozadas.
          </p>

          <p>
            El primer paso consiste en identificar tres datos basicos: sueldo
            mensual, fecha de ingreso y fecha de salida. Con esa informacion se
            puede determinar el tiempo efectivo trabajado. En esta calculadora se
            usa una aproximacion simple en la que los meses trabajados se obtienen
            a partir de la diferencia en dias dividida para treinta. Este metodo
            es util para obtener una referencia rapida y entender como crece la
            liquidacion a medida que pasa el tiempo.
          </p>

          <p>
            Una vez calculados los meses trabajados, se estima el decimo tercero.
            En Ecuador este beneficio corresponde a la doceava parte de las
            remuneraciones percibidas en el periodo de calculo. Para una version
            proporcional simplificada, se toma el sueldo mensual, se divide para
            doce y luego se multiplica por el numero de meses trabajados. El
            resultado entrega un valor aproximado del beneficio acumulado hasta la
            fecha de salida.
          </p>

          <p>
            El siguiente rubro son las vacaciones. Para obtener una referencia
            proporcional, se utiliza una formula sencilla: sueldo dividido para
            veinticuatro y multiplicado por los meses trabajados. Esta aproximacion
            permite estimar el valor de vacaciones no gozadas de forma rapida, sin
            necesidad de hacer una liquidacion legal completa. Es especialmente
            util cuando una persona quiere revisar si el monto ofrecido por su
            empleador parece razonable.
          </p>

          <p>
            Finalmente, el total estimado de liquidacion se obtiene sumando el
            valor del decimo tercero y el valor de vacaciones. Esta suma no siempre
            representa todos los conceptos que pueden existir en una terminacion de
            relacion laboral, pero si funciona como una base clara y facil de
            entender. Si existen horas extra, fondos pendientes, bonificaciones o
            indemnizaciones, esos valores deben revisarse por separado.
          </p>

          <p>
            Tener una pagina explicativa sobre como calcular la liquidacion en
            Ecuador ayuda tanto al usuario como al posicionamiento SEO del sitio,
            porque responde preguntas frecuentes con contenido util y relevante.
            Ademas, dirigir al lector hacia una calculadora practica mejora la
            experiencia, ya que combina informacion con una herramienta real. Si
            deseas obtener una estimacion inmediata, puedes volver a la pagina
            principal y usar la calculadora con tus fechas y sueldo mensual.
          </p>
        </div>

        <Link className="primary-button seo-link" to="/">
          Usar calculadora
        </Link>
      </article>
    </main>
  );
}

export default ComoCalcular;
