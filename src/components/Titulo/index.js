import styled from 'styled-components';

 const Titulo = styled.h1`
    color: #FFF;
    font-size: 45px;
` 
const Container = styled.div`
`

function TituloMain () {
    return(
        <Container>
        <Titulo>HISTÓRIA</Titulo>
        </Container>
    )
}

export default TituloMain;