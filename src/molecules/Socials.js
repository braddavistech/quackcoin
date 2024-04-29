import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Telegram from '../images/Telegram.png'
import DexTools from '../images/Dextools.png'
import Uniswap from '../images/Uniswap.png'

const Div = styled.div`
  position: relative;
  width: ${({ width }) => width <= 760 ? '80vw' : '40vw'};
  top: ${({ width }) => width <= 500 ? '60px' : '50px'};
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: space-around;
`

const IconWrapper = styled.div`
  background-color: var(--background_2);
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`

const FAIcon = styled(FontAwesomeIcon)`
  color: white;
  height: 30px;
  width: 30px;
`

const Icon = styled.img`
  max-height: 40px;
  width: 40px;
`

const Socials = ({ width }) => {
  return (
    <Div width={width}>
      <IconWrapper>
        <Icon src={Telegram} alt='Telegram Link' />
      </IconWrapper>
      <IconWrapper>
        <FAIcon icon={faLinkedinIn} />
      </IconWrapper>
      <IconWrapper>
        <Icon src={DexTools} alt='DexTools Link' />
      </IconWrapper>
      <IconWrapper>
        <Icon src={Uniswap} alt='Uniswap Link' />
      </IconWrapper>
      <IconWrapper>
        <FAIcon icon={faXTwitter} />
      </IconWrapper>
    </Div>
  );
}

export default Socials;
