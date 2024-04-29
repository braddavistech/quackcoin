import { useParallax } from 'react-scroll-parallax';

const ScrollWrapper = ({ speed, children }) => {
  const parallax = useParallax({
    speed: speed,
  });

  return <>
    <div ref={parallax.ref}>
      {children}
    </div>;
  </>
}

export default ScrollWrapper;