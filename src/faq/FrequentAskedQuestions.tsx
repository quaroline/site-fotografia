import { useEffect } from 'react';
import './FrequentAskedQuestions.css';
import { isMobile } from 'react-device-detect';

const FrequentAskedQuestions = () => {
  const questions = [
    {
      question: 'Quais tipos de ensaio tu fazes?',
      answer: 'Ensaio de família, casal, feminino, gestante, documental e profissional. Em qualquer caso, só faço fotografias pela manhã ou à tarde.'
    },
    { 
      question: 'Tu fotografas em estúdio?', 
      answer: 'Não possuo estúdio próprio, mas se for do almejo, podemos agendar em algum estúdio terceiro.' 
    },
    { 
      question: 'Há roupas para emprestar para o ensaio?', 
      answer: 'Não. Se a cliente utilizar o mesmo manequim que eu, podemos, claro, conversar. De toda forma, enquanto conversarmos sobre o ensaio, fornecerei uma paleta de cores e estilo de roupa de acordo com cada pessoa e que combine com o local escolhido para o ensaio.' 
    },
    {
      question: 'As fotos vêm reveladas?',
      answer: 'Se o pacote escolhido tiver fotografias reveladas e/ou álbum, sim. Caso contrário, são entregues em uma galeria digital com credenciais únicas de cada cliente.'
    },
    {
      question: 'Quais cidades tu fotografas?',
      answer: 'Serra gaúcha e região metropolitana de Porto Alegre.'
    },
    {
      question: 'E se eu precisar remarcar o ensaio?',
      answer: 'Dentro das possibilidades da minha agenda, podemos, sim, remarcar ou realocar para um local fechado.'
    }
  ];

  useEffect(() => {
    const collapsibles = document.getElementsByClassName('collapsible');

    const changeAnswerDisplay = (event: Event) => {
      if (!event?.target) return;

      const element = event.target as HTMLElement;

      element.classList.toggle('active');

      const content = element.nextElementSibling as HTMLElement;

      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }

    for (let i = 0; i < collapsibles.length; i++) {
      collapsibles[i].addEventListener('click', changeAnswerDisplay);
    }

    return () => {
      for (let i = 0; i < collapsibles.length; i++)
        collapsibles[i].removeEventListener('click', changeAnswerDisplay);
    }
  }, []);

  const caption = 'Casal de noivos dando as mãos';

  return (
    <div className='container' id='faq'>
      <div className="row">
        <div className="col-7 right">
          <img 
            src='/img/home.jpg'
            alt={caption} 
            title={caption} 
          />
        </div>
        <div className="col-5 right">
          <div className="questions">
          {
            questions.map((q, index) => 
              <div key={`div-faq-${index + 1}`} id={`div-faq-${index + 1}`}>
                <div className='collapsible'>
                  {q.question}
                </div>
                <div className={'content ' + (isMobile ? 'justify' : 'right')}>
                  <span>
                    {q.answer}
                  </span>
                </div>
              </div>
            )
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrequentAskedQuestions;