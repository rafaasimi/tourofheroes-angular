export default function getCurrentDateAndTime() {
  
  let formatedDate = new Date().toLocaleDateString('pt-BR')
  let formatedTime = new Date().toLocaleTimeString('pt-BR')

  return `${formatedDate} ${formatedTime}`;
}
