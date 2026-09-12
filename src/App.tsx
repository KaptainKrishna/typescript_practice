import { BrowserRouter, Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Home from "./component/app/Home";
import Layout from "./component/app/Layout";
import Friends from "./component/app/Friends";
import Posts from "./component/app/Posts";
import Dashboard from "./component/app/Dashboard";
import Video from "./component/app/Video";
import Audio from "./component/app/Audio";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="my-posts" element={<Posts />} />
          <Route path="friends" element={<Friends />} />
          <Route path="video-chat" element={<Video />} />
          <Route path="audio-chat" element={<Audio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
