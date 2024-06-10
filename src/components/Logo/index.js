import styled from 'styled-components';
import logo from '../../img/png-transparent-super-mario-bros-logo-video-game-new-super-mario-bros-super-mario-logo-removebg-preview.png'

const LogoImage = styled.img`
    width: 350px
    
`

function Logo() {
    return (
        <LogoImage
        src={logo}
        alt = 'Mario Bros logo'    >

        </LogoImage>
    )
}

export default Logo;