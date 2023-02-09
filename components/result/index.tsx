const ResultBox = () => {
  return (
    <div className="flex-1">
      <textarea
        id="result"
        className="p-3 w-full h-80 bg-transparent text-green-500 text-xl border border-gray-300 rounded-lg outline-none resize-none"
        placeholder="Type something to get a result..."
        disabled={true}
      />

      <div className="text-center mt-5">
        <button
          type="button"
          className="bg-green-600 w-1/4 font-bold upp px-6 py-2 rounded-full hover:bg-green-700 hover:scale-105 transition duration-300"
        >
          Copy!
        </button>
      </div>
    </div>
  );
};

export default ResultBox;
