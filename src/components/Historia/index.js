import styled from 'styled-components';
import ContainerP from '../ContainerP';
import imagem from '../../img/5139120-super-mario-bros-nes-front-cover.jpg';
import imagem2 from '../../img/nes-super-mario-bros-1-alternatives-cover-c.jpg'


const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    box-shadow: 0px 19px 15px -3px rgba(0,0,0,0.1);
    border-radius: 5px;
`

const MainImagem = styled.img`
    height: 550px;
    margin-left: 10px;
    border-radius: 5px;
    margin-top: 2rem;
  
`


function Main() {
    return(
        <MainContainer>
            <ContainerP/>
            <MainImagem
                src= {imagem}
                alt = 'imagem do primeiro jogo'
            />
            <MainImagem 
                src= {imagem2} 
            />
        </MainContainer>
    );
}

export default Main;