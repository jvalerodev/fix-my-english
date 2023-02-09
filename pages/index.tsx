import Layout from '@/components/layout';
import Form from '@/components/form';

const Home = () => {
  return (
    <Layout>
      <div className="md:flex justify-between md:space-x-20">
        <Form />
      </div>
    </Layout>
  );
};

export default Home;
