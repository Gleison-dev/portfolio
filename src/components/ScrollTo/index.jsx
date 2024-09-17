import { Link, animateScroll as scroll } from 'react-scroll';

const ScrollTo = ({ to, children }) => {
  const handleClick = () => {
    scroll.to(to, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <Link onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollTo;