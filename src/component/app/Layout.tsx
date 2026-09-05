import { Link } from "react-router-dom";
import Avatar from "../shared/Avatar";

const Layout = () => {
  const leftAsideSize = 270;
  const rightAsideSize = 370;
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
        style={{ width: leftAsideSize }}
      >
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

      <section
        className="py-5"
        style={{
          marginLeft: leftAsideSize,
          width: `calc(100% - ${rightAsideSize + leftAsideSize}px)`,
        }}
      >
        <div className="bg-white p-5 shadow-2xl rounded-xl">welcome</div>
      </section>

      <aside
        className="h-screen fixed right-0 top-0 overflow-auto p-5"
        style={{ width: rightAsideSize }}
      >
        <div className="bg-white shadow-2xl rounded-xl p-5">
          <h1 className="text-xl font-semibold">My Friends</h1>
          <div className="border-b border-gray-200 -mx-5 my-5" />

          <div className="space-y-5">
            {Array(10)
              .fill("s")
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-3 rounded-lg flex justify-between"
                >
                  <Avatar
                    size="md"
                    img="/images/avt.png"
                    title="Ram shiralkar"
                    subtitle={
                      <small
                        className={`${index % 2 === 0 ? "text-green-500" : "text-red-600"} font-medium`}
                      >
                        {index % 2 === 0 ? "Online" : "Offline"}
                      </small>
                    }
                  />
                  <div className="space-x-3">
                    <button
                      className="hover:text-blue-500 text-blue-600"
                      title="Chat"
                    >
                      <i className="ri-chat-ai-line"></i>
                    </button>
                    <button
                      className="hover:text-green-500 text-green-600"
                      title="Call"
                    >
                      <i className="ri-phone-line"></i>
                    </button>
                    <button
                      className="hover:text-amber-600 text-amber-500"
                      title="Video Call"
                    >
                      <i className="ri-video-on-ai-line"></i>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Layout;
