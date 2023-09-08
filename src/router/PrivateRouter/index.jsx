import { Route, Routes } from "react-router-dom";
import { Nav } from "../../components";
import Home from "../../pages/Home";

const PrivateRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default PrivateRouter