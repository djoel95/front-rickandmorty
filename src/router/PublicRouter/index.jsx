import { Route, Routes } from "react-router-dom";
import { Login, RegisterPage } from "../../pages";

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default PublicRouter