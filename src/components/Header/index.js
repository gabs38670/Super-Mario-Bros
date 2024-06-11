import styled from 'styled-components';
import Logo from '../Logo'

const HeaderContainer = styled.header`
 display: flex;
 justify-content: center;
 box-shadow: 0px 19px 15px -3px rgba(0,0,0,0.1);
 background-image: linear-gradient(to bottom, #511f2a, #762134, #9b203b, #c21b3f, #e91341);
 border-radius: 5px;
 background-size: cover;
 position:fixed;
 width: 100vw;
 top:0;

`


function Header() {
    return (
        <HeaderContainer >
            <Logo />
        </HeaderContainer>
    );
};

export default Header;