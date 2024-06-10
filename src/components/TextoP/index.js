 import styled from "styled-components";
 import { TituloH2 } from '../Subtitulo';
 import ImgCaras from "../ImgRostos";

 const ContainerApresentação = styled.div`
 
 `

 const Frase = styled.p`
 Color: #FFF;
 font-size: 25px;
 margin-top: 0px;
`

 function ContainerP (){
    return(
        <ContainerApresentação>
            <TituloH2>PERSONAGENS</TituloH2>
            <Frase>Seguem-se alguns dos rostos memóraveis do Reino Cogumelo!</Frase>
            <ImgCaras></ImgCaras>
        </ContainerApresentação>
     
    );
 };

 export default ContainerP;