import { useState } from 'react';
import useTypingEffect from '@/hooks/useTypingEffect';

type Props = {
  result: string;
};

const ResultBox = ({ result }: Props) => {
  const { displayText, showCursor } = useTypingEffect({ text: result });
  const [copy, setCopy] = useState('Copy!');

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopy('Copied!');

    setTimeout(() => {
      setCopy('Copy!');
    }, 5000);
  };

  return (
    <div className="flex-1">
      <div className="p-3 w-full h-80 bg-transparent border border-green-600 rounded-lg outline-none">
        <p
          className={`text-green-500 text-xl ${
            showCursor
              ? 'after:content-["|"] after:ml-1 after:font-bold after:text-2xl after:animate-typing'
              : ''
          }`}
        >
          {displayText}
        </p>
      </div>

      {result && (
        <div className="text-center mt-5">
          <button
            type="button"
            className="bg-green-600 w-1/4 font-bold upp px-6 py-2 rounded-full hover:bg-green-700 hover:scale-105 transition duration-300"
            onClick={handleCopy}
          >
            {copy}
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultBox;
