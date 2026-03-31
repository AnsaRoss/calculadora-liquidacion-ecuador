import ContentPage from '../components/ContentPage';

const paragraphs = [
  'La jubilacion patronal en Ecuador es un tema laboral que despierta mucho interes porque involucra reglas y condiciones distintas a las de una liquidacion comun. Aunque no todas las personas aplican a este beneficio, quienes se acercan a ese escenario suelen buscar informacion clara para entender si podria corresponderles algun pago adicional al terminar su relacion laboral.',
  'A diferencia del calculo basico de decimo tercero o vacaciones, la jubilacion patronal requiere analizar factores especificos establecidos por la normativa laboral. Por eso esta calculadora no pretende resolver ese calculo completo. Sin embargo, una pagina explicativa dentro del sitio es muy valiosa porque atrae a usuarios interesados en derechos laborales mas amplios y fortalece la autoridad del proyecto.',
  'Muchas personas llegan a este tipo de busqueda porque quieren saber si el tiempo acumulado en una empresa puede generar un beneficio especial. En ese contexto, comprender la diferencia entre liquidacion proporcional y jubilacion patronal es importante para no mezclar conceptos ni crear expectativas incorrectas.',
  'Desde el punto de vista del usuario, una buena pagina sobre jubilacion patronal cumple dos funciones. Primero, aclara que se trata de un tema mas especializado que debe revisarse con detalle. Segundo, conecta esa explicacion con la calculadora principal para que la persona pueda al menos estimar los rubros basicos que suelen estar presentes en cualquier salida laboral.',
  'A nivel SEO, esta es una ruta atractiva porque pertenece al mismo universo tematico del proyecto y amplía el repertorio de consultas que el sitio puede captar. No todos los visitantes terminaran usando la herramienta principal de inmediato, pero muchos recorreran otras paginas si perciben que el sitio resuelve dudas laborales reales de Ecuador.',
  'Ese crecimiento tematico hace que el proyecto se vea mas serio frente a usuarios, buscadores y plataformas publicitarias. Por eso, aunque la jubilacion patronal sea un tema mas avanzado, incluir una pagina informativa ayuda al objetivo de largo plazo: crear un sitio confiable, util y capaz de generar ingresos con trafico organico de calidad.',
];

function JubilacionPatronal() {
  return (
    <ContentPage
      eyebrow="Beneficios avanzados"
      title="Jubilacion patronal en Ecuador: cuando aplica y por que es diferente"
      description="Guia introductoria sobre jubilacion patronal en Ecuador y su diferencia frente a una liquidacion laboral comun."
      path="/jubilacion-patronal-ecuador"
      paragraphs={paragraphs}
    />
  );
}

export default JubilacionPatronal;
