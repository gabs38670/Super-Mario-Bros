import styled from 'styled-components';
import ImgFundo from '../../img/MarioHub_Characters_Intro_bg.png';
import ImgMario from '../../img/mario-bros.gif';

const RodapeMario = styled.footer`
 width: 100vw;
 height:200px;
 display:flex;
 justify-content:center;
 margin-top: 1rem;
 

 `

const Texto = styled.p`
    color: #FFF;
    font-size: 33px;
    font-weight: bold;
    margin-top: 1rem;
    display:flex;
    align-items:center;
`
const Img1 = styled.img`
   
`


function Final() {
    return (
        <RodapeMario style={{ backgroundImage: `url(${ImgFundo})` }}>
            <Texto>Agrandecemos a sua visita a FanPage</Texto>
            <Img1 src = {ImgMario} />
        </RodapeMario>

    );
};

export default Final;