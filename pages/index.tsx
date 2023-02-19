import Layout from '@/components/layout';
import Form from '@/components/form';
import ResultBox from '@/components/result';
import LoadingSpinner from '@/components/layout/LoadingSpinner';
import useFixEnglish from '@/hooks/useFixEnglish';

const Home = () => {
  const { result, isLoading, inputRef, handleSubmit } = useFixEnglish();

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
