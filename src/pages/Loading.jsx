import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { IconMoonFilled } from '@tabler/icons-react';

export default function Loading() {
  const [periods, setPeriods] = useState('');
  const moonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(moonRef.current, { y: 40, duration: 1, ease: 'bounce' });

    const intervalId = setInterval(() => {
      setPeriods((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 1000);

    return () => {
      clearInterval(intervalId);
      tl.kill();
    };
  }, []);

  return (
    <div className="text-3xl font-semibold" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
      <div ref={moonRef}>
        <IconMoonFilled size={100} />
      </div>
      <div className='mt-10'>
        Loading{periods}
      </div>
    </div>
  );
}
