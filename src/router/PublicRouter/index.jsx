import { Route, Routes } from "react-router-dom";
import Register from "../../components/Form/Register";
import { Login } from "../../pages";

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default PublicRouter