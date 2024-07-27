import { isMobile } from 'react-device-detect';
import './AboutMe.css';
import { GetImageRelativePath } from '../utils/string';

const AboutMe = () => {
  const alt = "Autorretrato de Carolynne Padilha tomando chimarrão em um acampamento em Nova Petrópolis/RS.";

  return (
    <div className='about-me'>
      <div className="container" id='aboutMe'>
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-5'>
            <div className={(isMobile ? 'center' : 'right')}>
              <h4>
                Sobre mim
              </h4>
            </div>
            <div className={(isMobile ? 'justify' : 'right')}>
              <p>
                Fotógrafa desde 2015, moradora da serra gaúcha (Nova Petrópolis/RS), mãe do Benjamin e do Abel, parceira do 
                Felipe, tutora de alguns vários cães e dois gatos. Adepta a uma vida tranquila, com flores e muitas abelhas 
                em volta. Dos <i>hobbies</i> calmos, como costura. Pertenço a mim, mas minhas ações pertencem ao próximo.
              </p>
              <p>
                Para mim, a fotografia é como se fosse uma arte mágica, aonde podemos salvar o <i>agora</i> e, por meio deste, 
                desencadear a nostalgia de dias mais simples e felizes. Quando olho para a fotografia de minha infância, sou 
                capaz de sentir o cheiro que o ente querido tinha, lembro da voz dos envolvidos tentando reunir todos os primos  
                da família ao mesmo tempo. 
              </p>
              <p>
                <i>Sou confiada</i> a guardar e permitir reviver momentos como o sorriso no rosto da criança ao tirar foto com 
                os avôs, a leveza de uma mãe ao fazer carinho na barriga de grávida, o deslumbre no olhar de um cão para com seus 
                donos.
              </p>
              <p>
                <a href="https://wa.me/5554991242249?text=Oi%2C%20tudo%20bem%3F%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20ensaio%20fotogr%C3%A1fico.%20Podemos%20falar%20mais%3F%20%3A%29">
                  Quer um orçamento? Clica aqui e vamos nos conhecer! 💛
                </a>
              </p>
            </div>
          </div>
          <div className='col-5 left'>
            <img src={`${GetImageRelativePath()}carolynne.jpg`} alt={alt} title={alt}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;