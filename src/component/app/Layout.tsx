import { Link } from "react-router-dom";
import Avatar from "../shared/Avatar";

const Layout = () => {
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
      <aside className=" w-80 h-screen fixed top-0 left-0 overflow-auto p-5">
        <div className=" space-y-8 bg-white h-full p-5 rounded-xl bg-linear-to-r from-blue-500 to-purple-500">
          <Avatar
            img="/images/avt.png"
            title="Ram shiralkar"
            subtitle="Sr. engineeer"
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

      <section className="ml-80 w-[calc(100%-640px)] py-5">
        <div className="bg-white p-5 shadow-2xl rounded-xl">welcome</div>
      </section>

      <aside className="w-80 h-screen fixed right-0 top-0 overflow-auto p-5">
        <div className="bg-white shadow-2xl rounded-xl p-5">welcome</div>
      </aside>
    </div>
  );
};

export default Layout;
