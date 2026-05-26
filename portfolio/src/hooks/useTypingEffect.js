import { useEffect, useState } from 'react';

export function useTypingEffect(text, delayMs = 42, startDelayMs = 400) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let index = 0;
    let timeoutId;

    const startId = setTimeout(() => {
      const type = () => {
        if (index < text.length) {
          setDisplayed(text.slice(0, index + 1));
          index += 1;
          timeoutId = setTimeout(type, delayMs);
        }
      };
      type();
    }, startDelayMs);

    return () => {
      clearTimeout(startId);
      clearTimeout(timeoutId);
    };
  }, [text, delayMs, startDelayMs]);

  return displayed;
}
