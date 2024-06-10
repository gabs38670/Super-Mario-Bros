import styled from 'styled-components';
import mario from '../../img/9e46d2905d70d779a552ff036d5e5b1e.png';
import luigi from '../../img/759712abd30ecec7865705483ddc3b52.png';
import peach from '../../img/4b6b288014f1a9902a15fb695be37b85.png';
import toad from '../../img/cf866629df0b6e9b2215e5856d14e46d.png';
import Bowser from '../../img/fe538a64c10d751ad37c8b0a159ae908.png';
import yoshi from '../../img/3983b355856cc8649c36532c46b95fb7.png';
import daisy from '../../img/71e828a4325f7241045ac24b9f719f3b.png';
import wario from '../../img/b1ff944a4e722c9d2c98648ff3cf1518.png';
import waluigi from '../../img/IconWaluigi-10aabcf5-8f4b-438d-a5a8-8b584f63e439.png';
import rosalina from '../../img/79ab00fe8132c776f63505cdcee528e9.png';
import DonkeyKong from '../../img/1e9e8bd599cd039e9c8cc78ee259a8ed.png';


const Rostos = styled.div`
    box-shadow: 0px 19px 15px -3px rgba(0,0,0,0.1);

`
const Imagens = styled.img`
    width: 130px;
    margin: 0.50rem 2.25rem;
    transition: 0.5s;
    &:hover{
        transform: scale(1.20);
        
    }
   
`

function ImgCaras (){
    return(
        <Rostos>{}
            <Imagens title="Mario" src= {mario}/>
            <Imagens title="Luigi" src= {luigi}/>
            <Imagens title="Peach" src= {peach}/>
            <Imagens title="Toad" src= {toad}/>
            <Imagens title="Bowser" src= {Bowser}/>
            <Imagens title="Yoshi" src= {yoshi}/>
            <Imagens title="Daisy" src= {daisy}/>
            <Imagens title="Wario" src= {wario}/>
            <Imagens title="Waluigi" src= {waluigi}/>
            <Imagens title="Rosalina" src= {rosalina}/>
            <Imagens title="Donkey Kong" src= {DonkeyKong}/> 
        </Rostos>
    );
};

export default ImgCaras;