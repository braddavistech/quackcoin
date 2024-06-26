import { styled } from "styled-components";

const Desktop = styled.div`
  width: 100vw;
  padding-top: 32px;
  min-height: calc(100vh - 32px);
`

const Mobile = styled.div`
  width: 100vw;
  padding-top: 60px;
  min-height: calc(100vh - 60px);
`

const Title = styled.h3`
    text-align: center;
    font-size: 30px;
`


const ViewWrapper = (props) => {
  const { width, children } = props;
  const isMobile = width <= 500;

  return (
    <>
      {isMobile ? <Mobile>
        {children}
      </Mobile > : <Desktop>
        {children}
      </Desktop>
      }
    </>
  );
}

export default ViewWrapper;
