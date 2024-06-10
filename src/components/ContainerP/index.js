import styled from 'styled-components'
import TituloMain from '../Titulo/index';
import { Paragrafo } from '../Paragrafo';

const Container = styled.div`
    width: 770px;
    height:600px;
    margin-top: 1rem;

`

function ContainerP () {
    return(
        <Container>
             <TituloMain></TituloMain>
            <Paragrafo>
                A história do Mario Bros começou em 1981, quando a Nintendo lançou o jogo “Donkey Kong”, que 
                apresentava um personagem chamado Jumpmam, um encanador que tinha que resgatar a namorada,
                Pauline, das garras do gorila Donkey Kong.
                </Paragrafo>
                <Paragrafo>
                O jogo foi um sucesso, e a Nintendo decidiu criar um novo jogo com Jumpman como personagem principal. O designer de jogos Shigeru Miyamoto foi encarregado
                de criar o novo jogo e desenvolveu um jogo de plataforma chamado “Mario Bros”. 
                </Paragrafo>
                <Paragrafo>
                O jogo foi lançado em 1983 e apresentava dois personagens, Mario e seu irmão Luigi. Os dois personagens eram encanadores que tinham que 
                lutar contra criaturas subterrâneas enquanto tentavam resgatar uma princesa chamada Toadstool. 
                </Paragrafo>
                <Paragrafo>
                O jogo era diferente de outros jogos de plataforma da época, porque os jogadores tinham que enfrentar os inimigos virando-os de cabeça para baixo e 
                depois chutando-os para fora da tela. Além disso, os jogadores  podiam ganhar pontos extras coletando moedas e outros itens especiais.
                </Paragrafo>
        </Container>
    );
};

export default ContainerP;



