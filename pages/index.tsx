import { FormEvent, useRef, useState } from 'react';
import Layout from '@/components/layout';
import Form from '@/components/form';
import ResultBox from '@/components/result';
import EnglishService from '@/services/english.service';
import LoadingSpinner from '@/components/layout/LoadingSpinner';

const Home = () => {
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

  return (
    <Layout>
      {isLoading && <LoadingSpinner />}

      <div className="md:flex justify-between md:space-x-20">
        <Form
          handleSubmit={handleSubmit}
          inputRef={inputRef}
          isLoading={isLoading}
        />

        <ResultBox result={result} />
      </div>
    </Layout>
  );
};

export default Home;
