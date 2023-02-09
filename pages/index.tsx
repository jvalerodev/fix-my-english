import Layout from '@/components/layout';
import Form from '@/components/form';
import ResultBox from '@/components/result';

const Home = () => {
  return (
    <Layout>
      <div className="md:flex justify-between md:space-x-20">
        <Form />

        <ResultBox />
      </div>
    </Layout>
  );
};

export default Home;
