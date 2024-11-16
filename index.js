function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email === "demo@example.com" && password === "password123") {
        // Redirect to inventory page
        window.location.href = "home.html";
    } else {
        alert("Invalid credentials");
    }
}
