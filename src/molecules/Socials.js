import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Telegram from '../media/images/Telegram.png'
import DexTools from '../media/images/Dextools.png'
import Uniswap from '../media/images/Uniswap.png'

const Div = styled.div`
  z-index: 2;
  position: relative;
  width: ${({ width }) => width <= 760 ? '80vw' : '40vw'};
  top: ${({ width }) => width <= 500 ? '115px' : '115px'};
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
  cursor: pointer;
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
      <IconWrapper href='https://t.me/quackpublic' target="_blank">
        <Icon src={Telegram} alt='Telegram Link' />
      </IconWrapper>
      <IconWrapper href='https://www.linkedin.com/in/christian-clayton-398330157/' target="_blank">
        <FAIcon icon={faLinkedinIn} />
      </IconWrapper>
      <IconWrapper href='https://www.dextools.io/app/en/base/pair-explorer/0xdb8e18f3884a52d283500554dde7dd3b5d633d78?t=1714431071346' target="_blank">
        <Icon src={DexTools} alt='DexTools Link' />
      </IconWrapper>
      <IconWrapper href="https://app.uniswap.org/swap?outputCurrency=0x5ace197d87b614942bc1670eb0ddd55ce4432801&chain=base" target="_blank">
        <Icon src={Uniswap} alt='Uniswap Link' />
      </IconWrapper>
      <IconWrapper href="https://twitter.com/quackonchain" target="_blank">
        <FAIcon icon={faXTwitter} />
      </IconWrapper>
    </Div>
  );
}

export default Socials;
