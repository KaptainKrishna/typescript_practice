import { Link } from "react-router-dom";
import Avatar from "../shared/Avatar";

const Layout = () => {
  const asideSize = 310;
  const menus = [
    {
      icon: "ri-home-9-line",
      href: "/",
      title: "dashboard",
    },
    {
      icon: "ri-chat-smile-3-line",
      href: "/posts",
      title: "my post",
    },
    {
      icon: "ri-group-line",
      href: "/friends",
      title: "friends",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      <aside
        className="h-screen fixed top-0 left-0 overflow-auto p-5"
        style={{ width: asideSize }}
      >
        <div className=" space-y-8 bg-white h-full p-5 rounded-xl bg-linear-to-r from-blue-500 to-purple-500">
          <Avatar
            img="/images/avt.png"
            title="Ram shiralkar"
            subtitle="Sr. engineeer"
          />
          <Avatar
            size="md"
            img="/images/avt.png"
            title="Ram shiralkar"
            subtitle={
              <div className="flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-green-600" />
                <label className="text-gray-500">online</label>
              </div>
            }
          />
          <div>
            {menus.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="flex gap-3 items-center text-white py-2 hover:text-gray-200"
              >
                <i className={`${item.icon} text-xl`} />
                <label className="capitalize">{item.title}</label>
              </Link>
            ))}

            <button className="flex gap-3 items-center text-white py-2 hover:text-gray-200 ">
              <i className="ri-logout-circle-r-line text-xl" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      <section
        className="py-5"
        style={{
          marginLeft: asideSize,
          width: `calc(100% - ${asideSize * 2}px)`,
        }}
      >
        <div className="bg-white p-5 shadow-2xl rounded-xl">welcome</div>
      </section>

      <aside
        className="h-screen fixed right-0 top-0 overflow-auto p-5"
        style={{ width: asideSize }}
      >
        <div className="bg-white shadow-2xl rounded-xl p-5">welcome</div>
      </aside>
    </div>
  );
};

export default Layout;
