// ReactのuseStateフックをインポート（フォームの状態を管理）
import { useState } from "react";

// 画面遷移用のフック（React Routerの機能）
import { useNavigate } from "react-router-dom";

// ログイン状態を管理するカスタムフック（Contextから取得）
import { useAuth } from "../context/AuthContext";

const Login = () => {
  // ユーザー名とパスワードの状態を管理（フォームの入力値）
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ページ遷移用（ログイン後に別の画面に移動するため）
  const navigate = useNavigate();

  // 認証状態管理から login() 関数だけ取り出す（Context経由）
  const { login } = useAuth();

  // ログインボタンを押したときの処理
  const handleLogin = () => {
    // ユーザー名とパスワードが正しいかチェック
    if (username === "admin" && password === "1234") {
      login(); // ログイン状態をtrueにし、localStorageにも保存
      navigate("/dashboard"); // ダッシュボード画面に遷移
    } else {
      alert("ログイン失敗"); // 不正な場合は警告を出す
    }
  };

  return (
    <div>
      <h2>ログイン画面</h2>

      {/* ユーザー名の入力欄 */}
      <input
        type="text"
        placeholder="ユーザー名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      {/* パスワードの入力欄 */}
      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      {/* ログインボタン */}
      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
};

export default Login;
