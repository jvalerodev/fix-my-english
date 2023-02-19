import { FormEvent, useRef, useState } from 'react';
import EnglishService from '@/services/english.service';

const useFixEnglish = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) return;

    const input = inputRef.current.value;

    if (!input) return;

    setIsLoading(true);

    try {
      setResult('');
      setResult(await EnglishService.fixIt(input));
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return { inputRef, result, isLoading, handleSubmit };
};

export default useFixEnglish;
