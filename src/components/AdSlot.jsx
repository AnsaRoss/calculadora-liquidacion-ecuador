import { useEffect, useRef } from 'react';

function AdSlot({
  className = 'adsbygoogle',
  slot,
  format = 'auto',
  responsive = 'true',
  style,
}) {
  const pushedRef = useRef(false);

  useEffect(() => {
    if (pushedRef.current) {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      pushedRef.current = true;
    } catch (error) {
      console.error('AdSense error', error);
    }
  }, []);

  return (
    <ins
      className={className}
      style={{ display: 'block', ...style }}
      data-ad-client="ca-pub-6376754412949061"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    />
  );
}

export default AdSlot;
