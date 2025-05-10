import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type Props = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();

  // 未ログインなら /login にリダイレクト
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // ログイン済みならそのまま表示
  return children;
};

export default PrivateRoute;
