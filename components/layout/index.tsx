import Header from './Header';
import SEO from './SEO';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <SEO />

      <div className="container mx-auto px-10 flex items-center h-screen">
        <div className="h-fit w-full">
          <Header />

          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
