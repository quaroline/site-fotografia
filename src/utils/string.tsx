const GetImageRelativePath = () => {
  if (window.location.host.includes('localhost'))
    return '/img/';
  
  return '/./img/';
}

const GetWhatsAppUrl = () => {
  const tel = '5554991242249';
  const msg = 'Oi, tudo bem? Gostaria de solicitar um orçamento para um ensaio fotográfico. Podemos falar mais? :)';

  return `https://wa.me/${tel}?text=${msg}`;
}

const CarouselPhotos = [
  { filename: 1, caption: 'Mão de criança segurando uma flor amarela' },
  { filename: 2, caption: 'Criança em campo de flores amarelas' },
  { filename: 3, caption: 'Criança com braços abertos' },
  { filename: 4, caption: 'Pai e filho na beira do mar' },
  { filename: 5, caption: 'Criança no parque de diversões' },
  { filename: 6, caption: 'Pés de criança' },
  { filename: 7, caption: 'Criança olhando séria para a câmera com bico e pulseira rastafari', isPortrait: true },
  { filename: 8, caption: 'Criança olhando para o lado e rindo com as mãos no rosto', isPortrait: true },
  { filename: 9, caption: 'Pai segurando recém-nascido perto de uma janela', isPortrait: true },
  { filename: 10, caption: 'Bebê pequeno deitado em uma cama com a bola do estúdio Pixar', isPortrait: true },
  { filename: 11, caption: 'Mãe alternativa segurando recém-nascido enquanto seca o cabelo', isPortrait: true },
  { filename: 12, caption: 'Mulher em parque de diversões', isPortrait: true },
  { filename: 13, caption: 'Cachorro marrom mesclado olhando diretamente para a câmera', isPortrait: true },
  { filename: 14, caption: 'Criança sentada em cadeira de balanço', isPortrait: true },
  { filename: 15, caption: 'Retrato de mulher em um dia claro', isPortrait: true },
  { filename: 16, caption: 'Criança sentada em cadeira de balanço olhando para trás', isPortrait: true },
  { filename: 17, caption: 'Cachorro de olhos brancos em um parque', isPortrait: true },
  { filename: 18, caption: 'Mulher em um fundo de flores rosas e ruína abandonada', isPortrait: true },
  { filename: 19, caption: 'Mulher se curvando para conversar no mesmo nível que criança', isPortrait: true },
  { filename: 20, caption: 'Mulher em um estacionamento', isPortrait: true },
  { filename: 21, caption: 'Mulher sentada em uma antiga carteira escolar', isPortrait: true },
  { filename: 22, caption: 'Idosa sentada junto à mesa de café', isPortrait: true }
].sort(() => Math.random() - 0.5);

export { 
  GetImageRelativePath, 
  GetWhatsAppUrl,
  CarouselPhotos
};