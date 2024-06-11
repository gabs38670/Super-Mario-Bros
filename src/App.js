import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Historia';
import ContainerPersonagens from './components/Personagens';
import AnimacaoGaleria from './components/Galeria';
import Franquia from './components/Saga';
import Final from './components/rodape';




const AppContainer = styled.div`

`
function App() {
  return (
    <AppContainer>
        <Header />
        <Main>
        </Main>
        <ContainerPersonagens></ContainerPersonagens>
        <AnimacaoGaleria></AnimacaoGaleria>
        <Franquia></Franquia>
        <Final></Final>
    </AppContainer>
  );
}

export default App;
