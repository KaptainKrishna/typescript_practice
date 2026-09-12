const Video = () => {
  return (
    <div className="space-y-6">
      <div className="bg-black w-full h-0 relative pb-[56.25%] rounded-xl">
        <video className="w-full h-full absolute top-0 left-0"></video>
        <button
          className="absolute bottom-5 left-5 text-white px-2.5 py-1 text-xs rounded-lg"
          style={{
            background: "rgba(255,255,255,0.1)",
          }}
        >
          Ram Shiralkar
        </button>
        <button
          className="absolute bottom-5 right-5 text-white px-2.5 py-1 text-xs rounded-lg hover:scale-125 transition-transform duration-300 ease-in-out"
          style={{
            background: "rgba(255,255,255,0.1)",
          }}
        >
          <i className="ri-fullscreen-exit-line"></i>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-black w-full h-0 relative pb-[56.25%] rounded-xl">
          <video className="w-full h-full absolute top-0 left-0"></video>
          <button
            className="absolute bottom-2 left-2 text-white px-2.5 py-1 text-xs rounded-lg"
            style={{
              background: "rgba(255,255,255,0.1)",
            }}
          >
            Ram Shiralkar
          </button>
        </div>
        <button className="bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-400">
          <i className="ri-user-add-line mr-2"></i>
          Add
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="space-x-4">
          <button className="bg-green-500 text-white w-12 h-12 rounded-full hover:bg-green-400">
            <i className="ri-video-on-ai-line"></i>
          </button>
          <button className="bg-amber-500 text-white w-12 h-12 rounded-full hover:bg-amber-400">
            <i className="ri-mic-line"></i>
          </button>
          <button className="bg-blue-500 text-white w-12 h-12 rounded-full hover:bg-blue-400">
            <i className="ri-tv-2-line"></i>
          </button>
        </div>
        <div>
          <button className="px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-400 ">
            End
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
