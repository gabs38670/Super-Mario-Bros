import styled from 'styled-components';
import { TituloH2 } from '../Subtitulo';
import capa1 from '../../img/Super_Mario_Bros._box.png';
import capa2 from '../../img/Super_Mario_Bros._3_coverart.png';
import capa3 from '../../img/co65za.jpg';
import capa4 from '../../img/MV5BNjQzZmQzNWMtZTVmOS00NjU4LTlmNjktOTM2MDQwMjgxMmY0XkEyXkFqcGdeQXVyMTA3NjAwMDc4._V1_.jpg';
import capa5 from '../../img/Super_Mario_Galaxy_capa.png';
import capa6 from '../../img/Super_Mario_Odyssey_Capa.png';

const SagaSection = styled.section`
    text-align: center;
    box-shadow: 0px 19px 15px -3px rgba(0,0,0,0.1);

`
const DivImg = styled.div`
    display:flex;
    justify-content: center;
`

const SagaImagens = styled.img`
    width: 250px;
    height: 300px;
    margin:1rem;
    border-radius: 5px;
    box-shadow: 7px 8px 0px 0px rgba(0,0,0,0.5);

`


function Franquia () {
    return(
        <SagaSection>
            <TituloH2>A evolução de Super Mario Bros</TituloH2>
            <DivImg>
                <SagaImagens src= {capa1} />
                <SagaImagens src= {capa2} />
                <SagaImagens src= {capa3} />
                <SagaImagens src= {capa4} />
                <SagaImagens src= {capa5} />
                <SagaImagens src= {capa6} />
            </DivImg>
        </SagaSection>
    );
};

export default Franquia;