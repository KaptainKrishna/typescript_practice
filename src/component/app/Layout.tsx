import { Link, Outlet, useLocation } from "react-router-dom";
import Avatar from "../shared/Avatar";
import { useState } from "react";

const Layout = () => {
  const { pathname } = useLocation();

  const leftAsideSize = 270;
  const rightAsideSize = 370;
  const collapseSize = 90;

  const [open, setOpen] = useState(leftAsideSize);

  const menus = [
    {
      icon: "ri-home-9-line",
      href: "/app/dashboard",
      title: "dashboard",
    },
    {
      icon: "ri-chat-smile-3-line",
      href: "/app/my-posts",
      title: "my post",
    },
    {
      icon: "ri-group-line",
      href: "/app/friends",
      title: "friends",
    },
  ];

  const isCollapsed = open === collapseSize;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* LEFT SIDEBAR */}
      <aside
        className="h-screen fixed top-0 left-0 overflow-auto p-5"
        style={{
          width: open,
          transition: "width 0.3s ease",
        }}
      >
        <div className="space-y-8 bg-white h-full p-5 rounded-xl bg-linear-to-r from-blue-500 to-purple-500">
          {/* Avatar */}
          {isCollapsed ? (
            <div className="flex justify-center">
              <Avatar img="/images/avt.png" size="md" />
            </div>
          ) : (
            <Avatar
              img="/images/avt.png"
              title="Ram shiralkar"
              subtitle="Sr. engineeer"
            />
          )}

          {/* MENU */}
          <div
            className={`flex flex-col gap-2 ${
              isCollapsed ? "items-center" : ""
            }`}
          >
            {menus.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                title={item.title}
                className={`text-white py-2 hover:text-gray-200 ${
                  isCollapsed
                    ? "flex justify-center"
                    : "flex gap-3 items-center"
                }`}
              >
                <i className={`${item.icon} text-xl`} />

                {/* Hide text when collapsed */}
                {!isCollapsed && (
                  <label className="capitalize cursor-pointer">
                    {item.title}
                  </label>
                )}
              </Link>
            ))}

            {/* Logout */}
            <button
              title="Logout"
              className={`text-white py-2 hover:text-gray-200 ${
                isCollapsed ? "flex justify-center" : "flex gap-3 items-center"
              }`}
            >
              <i className="ri-logout-circle-r-line text-xl" />

              {!isCollapsed && <span>Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <section
        className="py-5"
        style={{
          marginLeft: open,
          width: `calc(100% - ${open + rightAsideSize}px)`,
          transition: "margin-left 0.3s ease, width 0.3s ease",
        }}
      >
        <div className="bg-white p-5 shadow-2xl rounded-xl">
          {/* HEADER */}
          <div className="flex gap-3 items-center">
            <button
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-slate-200"
              onClick={() =>
                setOpen(isCollapsed ? leftAsideSize : collapseSize)
              }
            >
              <i
                className={`${
                  isCollapsed ? "ri-arrow-right-line" : "ri-arrow-left-line"
                } font-semibold`}
              />
            </button>

            <h1 className="capitalize font-semibold text-xl">
              {pathname.split("/").pop()?.split("-").join(" ")}
            </h1>
          </div>

          <div className="border-b border-gray-200 -mx-5 my-4" />

          <Outlet />
        </div>
      </section>

      {/* RIGHT SIDEBAR */}
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
                        className={`${
                          index % 2 === 0 ? "text-green-500" : "text-red-600"
                        } font-medium`}
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
                      <i className="ri-chat-ai-line" />
                    </button>

                    <Link to="/app/audio-chat">
                      <button
                        className="hover:text-green-500 text-green-600"
                        title="Call"
                      >
                        <i className="ri-phone-line" />
                      </button>
                    </Link>

                    <Link to="/app/video-chat">
                      <button
                        className="hover:text-amber-600 text-amber-500"
                        title="Video Call"
                      >
                        <i className="ri-video-on-ai-line" />
                      </button>
                    </Link>
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
