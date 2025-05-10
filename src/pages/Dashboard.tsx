import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useAuth();         // logout関数を取得
  const navigate = useNavigate();       // 遷移用

  const handleLogout = () => {
    logout();                           // 認証状態を解除
    navigate("/login");                 // ログイン画面に戻る
  };

  return (
    <div>
      <h2>ダッシュボード画面</h2>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default Dashboard;
