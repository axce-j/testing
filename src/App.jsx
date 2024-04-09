import { Route, Routes } from "react-router-dom";
import Top from "./Pages/top.jsx"
import Home from "./Pages/home.jsx"
import Trending from "./Pages/trending.jsx" 
import NewRelease from "./Pages/newRelease.jsx"
import Special from "./Pages/Special.jsx"
import WatchSection from "./Pages/browsePage.jsx"
import RandomPage from "./Pages/newsPage.jsx"
import ReadMangaPage from "./Pages/readMangaPage.jsx"
function App() {
  return (
    <Routes>
      <Route path="/"  element={<Top/>} />
      <Route path="/home"  element={<Home/>}  />
      <Route path="/trending" element={<Trending/>} />
      <Route path="/newRelease"element={<NewRelease/>} />
      <Route path="/special" element={<Special/>} />
      <Route path="/browse" element={<WatchSection/>} />
      <Route path="/news" element={<RandomPage/>} />
      <Route path="/readManga" element={<ReadMangaPage/>} />
      <Route path="error"/>
    </Routes>
  );
}

export default App;
