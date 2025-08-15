document.getElementById("login-btn").addEventListener("click", function(){
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = users.find(u => u.username === username && u.password === password);

    if(user){
        // 存入 sessionStorage
        sessionStorage.setItem("currentUser", JSON.stringify(user));

        // 根據角色跳轉
        if(user.role === "leader"){
            window.location.href = "leader.html";
        } else {
            window.location.href = "customer.html";
        }
    } else {
        alert("帳號或密碼錯誤！");
    }
});
