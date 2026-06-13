import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Tour from "./pages/Tour";
import Music from "./pages/Music";
import Merch from "./pages/Merch";
import Socials from "./pages/Socials";
import Album from "./pages/Album";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/dati" element={<Home />} />
        <Route path="tour" element={<Tour />} />
        <Route path="music" element={<Music />} />
        <Route path="merch" element={<Merch />} />
        <Route path="music/:id" element={<Album />} />
        <Route path="socials" element={<Socials />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;