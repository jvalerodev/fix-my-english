import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-10 flex items-center h-screen">
      <div className="h-fit w-full">
        <Header />

        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
