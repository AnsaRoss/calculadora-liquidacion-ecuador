import ContentPage from '../components/ContentPage';

const paragraphs = [
  'La renuncia voluntaria en Ecuador es una de las causas mas comunes de terminacion de la relacion laboral. Cuando un trabajador decide dejar su empleo por voluntad propia, suele preguntarse que valores le corresponden y cuales no. Esa duda es muy frecuente en buscadores y por eso conviene tener una pagina clara sobre el tema.',
  'En una renuncia voluntaria normalmente no se genera una indemnizacion por despido, pero si pueden existir valores pendientes por pagar. Entre ellos estan el decimo tercero proporcional, las vacaciones no gozadas, sueldos pendientes y otros conceptos que se hayan acumulado hasta la fecha de salida. Saber esto evita falsas expectativas y ayuda a revisar el pago final con mayor tranquilidad.',
  'La mejor forma de empezar a revisar una liquidacion por renuncia es calcular el tiempo trabajado y luego estimar los rubros proporcionales. Una herramienta simple permite hacerlo de inmediato con sueldo, fecha de ingreso y fecha de salida. Esa clase de calculadora es muy util para usuarios que quieren una referencia rapida sin enfrentarse a lenguaje tecnico.',
  'Tambien es importante diferenciar la renuncia voluntaria de otras formas de terminacion laboral. Muchas personas confunden los derechos que existen en caso de despido con los que corresponden al renunciar. Una pagina orientada a explicar esa diferencia mejora mucho la experiencia del usuario y reduce errores al interpretar un finiquito.',
  'A nivel SEO, la renuncia voluntaria es una consulta con intencion alta porque la persona ya vive una situacion concreta. Si encuentra informacion clara, confiable y facil de leer, es probable que tambien explore otras rutas del sitio relacionadas con finiquito, vacaciones o decimo tercero. Eso ayuda a construir autoridad tematica.',
  'Tener contenido practico sobre renuncia voluntaria no solo mejora el posicionamiento del sitio, tambien aumenta la probabilidad de monetizacion porque los usuarios permanecen mas tiempo y visitan varias paginas. Esa profundidad de navegacion es mucho mejor para un proyecto que quiere crecer en ingresos de forma sostenible.',
];

function RenunciaVoluntaria() {
  return (
    <ContentPage
      eyebrow="Terminacion laboral"
      title="Renuncia voluntaria en Ecuador: que te deben pagar"
      description="Conoce que valores pueden corresponderte en Ecuador al presentar una renuncia voluntaria y como estimarlos."
      path="/renuncia-voluntaria-ecuador"
      paragraphs={paragraphs}
    />
  );
}

export default RenunciaVoluntaria;
