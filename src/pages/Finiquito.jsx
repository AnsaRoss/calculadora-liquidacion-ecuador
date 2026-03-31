import ContentPage from '../components/ContentPage';

const paragraphs = [
  'El finiquito en Ecuador es el documento y el pago final que resume los valores pendientes que una empresa debe entregar al trabajador cuando termina la relacion laboral. Muchas personas buscan entender este concepto porque al recibir el documento no siempre saben si las cifras incluidas son correctas o si falta algun rubro importante.',
  'Dentro de un finiquito suelen aparecer beneficios proporcionales como el decimo tercero y las vacaciones no gozadas. Dependiendo del caso tambien pueden existir otros montos como sueldos pendientes, horas extra, bonificaciones o indemnizaciones. Por eso una calculadora que estime los rubros mas frecuentes sirve como punto de partida para revisar el valor final.',
  'Cuando un trabajador conoce al menos una estimacion basica, tiene mejores herramientas para comparar el monto entregado por la empresa. Eso no sustituye una asesoria legal, pero ayuda mucho a detectar diferencias evidentes y a solicitar una explicacion antes de firmar cualquier acta o documento de cierre.',
  'El tiempo trabajado es una pieza central del calculo. Una forma practica de estimarlo es restar la fecha de ingreso y la fecha de salida y convertir esa diferencia en meses aproximados. A partir de ahi se pueden calcular varios beneficios en forma proporcional y tener una idea bastante clara del cierre economico de la relacion laboral.',
  'Desde el punto de vista de posicionamiento, la palabra finiquito tiene un gran potencial porque conecta con usuarios que ya estan muy cerca de una necesidad real. Son personas que no solo quieren leer, sino tambien verificar cifras concretas. Eso hace que este tipo de pagina pueda traer trafico de valor para tu sitio.',
  'Si una persona llega buscando informacion sobre finiquito y encuentra una explicacion clara junto con una calculadora gratuita, es mucho mas probable que permanezca mas tiempo, recorra otras paginas relacionadas y genere oportunidades de monetizacion con anuncios. Esa es la combinacion que mas conviene fortalecer en este proyecto.',
];

function Finiquito() {
  return (
    <ContentPage
      eyebrow="Documentos laborales"
      title="Finiquito en Ecuador: que incluye y como revisarlo"
      description="Aprende que incluye un finiquito en Ecuador y como revisar si los valores proporcionales de tu liquidacion parecen correctos."
      path="/finiquito-ecuador"
      paragraphs={paragraphs}
    />
  );
}

export default Finiquito;
