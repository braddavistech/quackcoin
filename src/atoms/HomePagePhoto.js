import { styled } from 'styled-components';

const Image = styled.img`
  position: relative;
  ${({ width }) => width && `
    width: ${width};
  `}
  ${({ tilt }) => tilt && `
    transform: rotate(${tilt});
  `}
  ${({ top }) => top && `
    top: ${top};
  `}
    ${({ left }) => left && `
    left: ${left};
  `}
`

const HomePagePhoto = ( props ) => {
  return (
      <Image src={props.src} alt={props.alt} width={props.width} tilt={props.tilt} top={props.top} left={props.left} />
  );
}

export default HomePagePhoto;
