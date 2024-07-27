const GetImageRelativePath = () => {
  if (window.location.host.includes('localhost'))
    return '/img/';
  
  return '/./site-fotografia/public/img/';
}

const GetWhatsAppUrl = () => {
  const tel = '5554991242249';
  const msg = 'Oi, tudo bem? Gostaria de solicitar um orçamento para um ensaio fotográfico. Podemos falar mais? :)';

  return `https://wa.me/${tel}?text=${msg}`;
}

export { 
  GetImageRelativePath, 
  GetWhatsAppUrl 
};