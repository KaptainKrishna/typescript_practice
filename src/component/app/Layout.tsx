const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <aside className=" w-87 h-screen fixed top-0 left-0 overflow-auto p-5 ">
        <div className="bg-white p-5 shadow-2xl">welcome</div>
      </aside>
      <section className="ml-87 w-[calc(100%-668px)] p-5">
        <div className="bg-white p-5 shadow-2xl">welcome</div>
      </section>
      <aside className="w-80 h-screen fixed right-0 top-0 overflow-auto p-5">
        <div className="bg-white shadow-2xl p-5">welcome</div>
      </aside>
    </div>
  );
};

export default Layout;
