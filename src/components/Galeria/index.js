import styled from 'styled-components';
import img1 from '../../img/level-1-medium-up.jpg';
import img2 from '../../img/level-2-medium-up.jpg';
import img3 from '../../img/level-3-medium-up.jpg';
import img4 from '../../img/level-4-medium-up.jpg';

const GaleriaImg = styled.section`
    display:flex;
    justify-content: center;
    box-shadow: 0px 19px 15px -3px rgba(0,0,0,0.1);
`
const Imagens = styled.img`
    margin: 1rem;
    width:400px;
    box-shadow: 0px 0px 16px 6px rgba(0,0,0,0.1);
    border-radius: 5px;
    border: 2mm ridge;
    animation: 0.5s;
    cursor:pointer;

    &:hover{
        transform: translateY(-15px);
        
    }
`


function AnimacaoGaleria() {
    return (
        <GaleriaImg>
            <Imagens src= {img1} />
            <Imagens src= {img2} />
            <Imagens src= {img3} />
            <Imagens src= {img4} />
        </GaleriaImg>
    );
};

export default AnimacaoGaleria;