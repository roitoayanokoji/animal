function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email === "demo@example.com" && password === "password123") {
        window.location.href = "home.html";
    } else {
        alert("無効な資格情報です");
    }
}
