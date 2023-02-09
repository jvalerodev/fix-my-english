type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-10 flex items-center h-screen">
      <div className="h-fit w-full">
        <header className="text-center">
          <h1 className="text-center font-bold text-5xl">Fix My English! 🇬🇧</h1>

          <p className="py-12 text-lg text-gray-300">
            Write <span className="font-bold text-blue-500">any</span> text in
            English that you want to be
            <span className="font-bold text-green-500">corrected</span>!
          </p>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
