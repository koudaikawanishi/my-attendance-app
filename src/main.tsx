// React本体をインポート（JSXを使うのに必要）
import React from "react";

// Reactアプリをブラウザに描画するためのモジュール
import ReactDOM from "react-dom/client";

// アプリ全体の構成（ルーティングなど）を定義したコンポーネント
import App from "./App";

// ログイン状態（認証）を全体で共有するためのProvider
import { AuthProvider } from "./context/AuthContext";

// index.html にある <div id="root"></div> にアプリを描画（マウント）
ReactDOM.createRoot(document.getElementById("root")!).render(
  // StrictModeは開発時のバグや警告をチェックしてくれるReactの機能（本番には影響しない）
  <React.StrictMode>
    {/* 認証状態（ログイン/ログアウト）をアプリ全体に提供 */}
    <AuthProvider>
      {/* アプリ本体を表示（ルーティング設定や各ページはここに集約） */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
