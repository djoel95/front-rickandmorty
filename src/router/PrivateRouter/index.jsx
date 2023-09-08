import { Route, Routes } from "react-router-dom";
import { Nav } from "../../components";
import { CharactersPage, Home } from "../../pages";

const PrivateRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/characters" element={<CharactersPage />} />
      </Routes>
    </>
  );
}

export default PrivateRouter