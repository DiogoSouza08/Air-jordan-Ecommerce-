import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (animatedRef.current) {
      observer.observe(animatedRef.current);
    }

    return () => {
      if (animatedRef.current) {
        observer.unobserve(animatedRef.current);
      }
    };
  }, []);

  const fade = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={fade} ref={animatedRef}>
      {children}
    </animated.div>
  );
};

export default FadeInSection;
