import { Route, Routes } from 'react-router-dom'
import {NewsDetale, NewsList} from "./Page";
import styled from "styled-components";

function App() {
  return (
      <MainWallpaper>
      <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/news-detale/:id" element={<NewsDetale />} />
      </Routes>
      </MainWallpaper>
  );
}

export default App;


const MainWallpaper = styled.div`
  background: rgb(245, 245, 245);
  width: 100%;
  min-height: 100vh;
  padding: 40px;
`
