import { useEffect, useState } from 'react';

type Props = {
  text: string;
};

const useTypingEffect = ({ text }: Props) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!text.length) return;

    const randomTime = Math.floor(Math.random() * 30) + 5;

    const intervalId = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(intervalId);
        setShowCursor(false);
        return;
      }

      const nextIndex = text.indexOf(' ', currentIndex + 1);

      if (nextIndex === -1) {
        setDisplayText(text);
        setCurrentIndex(text.length);
        return;
      }

      setDisplayText(text.slice(0, nextIndex));
      setCurrentIndex(currentIndex + 1);
    }, randomTime);

    return () => clearInterval(intervalId);
  }, [text, currentIndex]);

  return { displayText, showCursor };
};

export default useTypingEffect;
