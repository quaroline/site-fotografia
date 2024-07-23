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

  const collapsibles = document.getElementsByClassName('collapsible');

  const changeAnswerDisplay = (event: Event) => {
    if (!event?.target) return;

    const question = event.target as HTMLElement;

    question.classList.toggle('active');
    question.classList.toggle('mb-1');
    question.classList.toggle('mb-0');

    const answer = question.nextElementSibling as HTMLElement;

    if (answer.classList.contains('show')) {
      answer.classList.remove('show');
      answer.style.maxHeight = '0';
    } else {
      answer.classList.add('show');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }

    closeRemainingCollapsibles(question);
  }

  const closeRemainingCollapsibles = (activeQuestion: HTMLElement) => {
    for (let i = 0; i < collapsibles.length; i++) {
      const question = collapsibles[i] as HTMLElement;

      if (question && question.classList.contains('active') && question !== activeQuestion) {
        question.classList.remove('active');
        question.classList.toggle('mb-1');
        question.classList.toggle('mb-0');

        const answer = question.nextElementSibling as HTMLElement;

        answer.classList.remove('show');
        answer.style.maxHeight = '0';
      }
    }
  }

  useEffect(() => {
    for (let i = 0; i < collapsibles.length; i++) {
      collapsibles[i].addEventListener('click', changeAnswerDisplay);
    }

    const contents = document.getElementsByClassName('content');

    for (let i = 0; i < contents.length; i++) {
      const content = contents[i] as HTMLElement;

      if (content.classList.contains('show')) 
        content.style.maxHeight = content.scrollHeight + 'px';
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
                <div className='collapsible mb-1'>
                  {q.question}
                </div>
                <div className={'answer content ' + (isMobile ? 'justify' : 'right')}>
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