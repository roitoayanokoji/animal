function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // デモ用の認証情報
    if (email === "demo@example.com" && password === "password123") {
        // 認証成功後、home.htmlへ遷移
        window.location.href = "home.html";
    } else {
        // 認証失敗時のエラーメッセージ
        alert("無効です。");
    }
}
