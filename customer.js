// 檢查是否已登入
const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
if (!currentUser || currentUser.role !== "customer") {
    alert("請先登入！");
    window.location.href = "index.html";
}

// 設定今天日期 (假設旅行第一天為 2025-08-15)
const startDate = new Date("2025-08-15"); 
const todayDate = new Date();
const diffTime = todayDate - startDate;
const today = Math.min(Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1, 5); // 1~5 天

// 登出按鈕
document.getElementById("logout-btn").addEventListener("click", function(){
    sessionStorage.removeItem("currentUser");
    window.location.href = "index.html";
});

// 顯示房號資訊
document.getElementById("room-btn").addEventListener("click", function(){
    const room = customerData[0].rooms.find(r => r.day === today);
    document.getElementById("info-display").innerHTML =
        `<p>飯店名稱：${room.hotel}</p>
         <p>房號：${room.number}</p>`;
});

// 顯示緊急聯絡人
document.getElementById("emergency-btn").addEventListener("click", function(){
    const data = customerData[0].emergency;
    document.getElementById("info-display").innerHTML =
        `<p>緊急連絡人姓名：${data.name}</p>
         <p>緊急連絡人電話：${data.phone}</p>`;
});

// 顯示當天行程 (時間 + 內容)
document.getElementById("itinerary-btn").addEventListener("click", function(){
    const dayItinerary = customerData[0].itinerary.find(d => d.day === today);
    let tableHTML = `<table border="1" cellspacing="0" cellpadding="5">
                        <tr><th>時間</th><th>內容</th></tr>`;
    dayItinerary.schedule.forEach(item => {
        tableHTML += `<tr><td>${item.time}</td><td>${item.activity}</td></tr>`;
    });
    tableHTML += `</table>`;
    document.getElementById("info-display").innerHTML = tableHTML;
});

// 顯示領隊介紹
document.getElementById("leader-btn").addEventListener("click", function(){
    document.getElementById("info-display").innerHTML =
        `<p>領隊名稱：${leaderInfo.name}</p>
         <p>聯絡電話：${leaderInfo.contact}</p>
         <p>介紹：${leaderInfo.intro}</p>`;
});
