import { Route, Routes } from "react-router-dom";
import { Nav } from "../../components";
import { AboutPage, CharactersPage, ContactPage, DetailPage, FavoritesPage, Home } from "../../pages";

const PrivateRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default PrivateRouter