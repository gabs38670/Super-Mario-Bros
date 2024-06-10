import styled from 'styled-components';
import imagem from '../../img/MarioHub_Characters_Intro_bg.png';
import ImgColegas from '../../img/super-mario-chars.png';
import ContainerP from '../TextoP';



const SecaoPersonagens = styled.section `
    height: 500px;
    display:flex;
`

const ImgPersonagens = styled.img`
  margin-top: 8rem;

`


function ContainerPersonagens () {
    return(
        <SecaoPersonagens style={{backgroundImage:`url(${imagem})`}}>
            <ImgPersonagens  src = {ImgColegas} />
            <ContainerP></ContainerP>
        </SecaoPersonagens>
    );
};

export default ContainerPersonagens;