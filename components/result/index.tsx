import { useState } from 'react';

type Props = {
  result: string;
};

const ResultBox = ({ result }: Props) => {
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
      <textarea
        id="result"
        className="p-3 w-full h-80 bg-transparent text-green-500 text-xl border border-gray-300 rounded-lg outline-none resize-none"
        placeholder="Type something to get a result..."
        value={result}
        disabled={true}
      />

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
