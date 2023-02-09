import { FormEvent, MutableRefObject } from 'react';

type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  inputRef: MutableRefObject<HTMLTextAreaElement | null>;
  isLoading: boolean;
};

const Form = ({ handleSubmit, inputRef, isLoading }: Props) => {
  return (
    <form className="flex-1" onSubmit={handleSubmit}>
      <textarea
        id="message"
        className="p-3 w-full h-80 bg-transparent text-xl border border-gray-300 rounded-lg outline-none focus:border-blue-600 transition-colors duration-200 resize-none"
        placeholder="Type your text here..."
        ref={inputRef}
        disabled={isLoading}
      />

      <div className="md:mb-0 my-5 text-center">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 w-1/2 lg:w-1/4 font-bold upp px-6 py-2 rounded-full hover:bg-blue-700 hover:scale-105 transition duration-300"
        >
          Fix it!
        </button>
      </div>
    </form>
  );
};

export default Form;
