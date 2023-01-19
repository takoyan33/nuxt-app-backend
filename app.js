// HTTPモジュールの読み込み
var http = require("http");

//  HTTPサーバーを作成し、ポート8000でリクエストを行う
http
  .createServer(function (request, response) {
    // HTTP ステータスとコンテントタイプを持つ HTTP ヘッダのレスポンスを設定
    response.writeHead(200, { "Content-Type": "text/plain" });

    // レスポンスボディー"Hello World"を送信
    response.end("Hello World\n");
  })
  .listen(process.env.PORT || 3000);

//  サーバーにアクセスするための URL を出力
console.log("Server running at https://nuxt-app-backend.onrender.com");
