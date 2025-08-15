const infoDisplay = document.getElementById('info-display');
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if(!currentUser || currentUser.role !== "leader"){
    alert("請先登入");
    location.href = "login.html";
}

document.getElementById('room-btn').addEventListener('click', ()=>{
    let html = "";
    users.filter(u => u.role === "customer").forEach(u=>{
        html += `<p>${u.name} - 飯店名稱：${u.room.hotel}，房號：${u.room.number}</p>`;
    });
    infoDisplay.innerHTML = html;
});

document.getElementById('emergency-btn').addEventListener('click', ()=>{
    let html = "";
    users.filter(u => u.role === "customer").forEach(u=>{
        html += `<p>${u.name} - 緊急連絡人姓名：${u.emergency.name}，電話：${u.emergency.phone}</p>`;
    });
    infoDisplay.innerHTML = html;
});

document.getElementById('today-btn').addEventListener('click', ()=>{
    let html = "<table><tr><th>天數</th><th>行程</th></tr>";
    itinerary.forEach(day=>{
        html += `<tr><td>${day.day}</td><td>${day.schedule}</td></tr>`;
    });
    html += "</table>";
    infoDisplay.innerHTML = html;
});

document.getElementById('leader-btn').addEventListener('click', ()=>{
    infoDisplay.innerHTML = `<pre>${leaderInfo}</pre>`;
});

document.getElementById('logout-btn').addEventListener('click', ()=>{
    localStorage.removeItem('currentUser');
    location.href = "index.html";
});
