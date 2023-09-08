import { useSelector } from "react-redux"
import PublicRouter from "./PublicRouter"
import PrivateRouter from "./PrivateRouter"

const Routing = () => {

  const { isAuth } = useSelector((store) => store.auth)
  return isAuth ? <PrivateRouter /> : <PublicRouter />
}
export default Routing