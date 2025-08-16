// customer.js

document.addEventListener("DOMContentLoaded", () => {
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    const display = document.getElementById("info-display");

    if (!currentUser) {
        display.innerHTML = "<p style='color:red;'>請先登入！</p>";
        return;
    }

    // 找到對應顧客資料
    const customer = customerData.find(c => c.name === currentUser.username);

    if (!customer) {
        display.innerHTML = "<p style='color:red;'>找不到顧客資料</p>";
        return;
    }

    // ===== 顯示基本資料 =====
    const baseInfo = document.createElement("div");
    baseInfo.innerHTML = `
        <h2>基本資料</h2>
        <p><strong>姓名：</strong>${customer.name}</p>
        <p><strong>緊急聯絡人：</strong>${customer.emergency.name}</p>
        <p><strong>聯絡電話：</strong>${customer.emergency.phone}</p>
    `;
    display.appendChild(baseInfo);

    // ===== 顯示房間資訊 =====
    const roomInfo = document.createElement("div");
    roomInfo.innerHTML = `
        <h2>房間資訊</h2>
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
            <thead>
                <tr>
                    <th>天數</th>
                    <th>飯店</th>
                    <th>房號</th>
                </tr>
            </thead>
            <tbody>
                ${customer.rooms.map(r => `
                    <tr>
                        <td>第 ${r.day} 天</td>
                        <td>${r.hotel || "-"}</td>
                        <td>${r.number || "-"}</td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
    display.appendChild(roomInfo);

    // ===== 顯示行程（含日期） =====
    const itineraryInfo = document.createElement("div");
    itineraryInfo.innerHTML = `<h2>行程安排</h2>`;
    display.appendChild(itineraryInfo);

    customer.itinerary.forEach(item => {
        const table = document.createElement("table");
        table.border = "1";
        table.style.width = "100%";
        table.style.marginBottom = "20px";
        table.style.borderCollapse = "collapse";
        table.style.textAlign = "center";

        table.innerHTML = `
            <thead>
                <tr style="background:#cce0ff;">
                    <th colspan="2">第 ${item.day} 天 (${item.date})</th>
                </tr>
                <tr>
                    <th>時間</th>
                    <th>行程內容</th>
                </tr>
            </thead>
            <tbody>
                ${item.schedule.map(s => `
                    <tr>
                        <td>${s.time || "-"}</td>
                        <td>${s.activity || "-"}</td>
                    </tr>
                `).join("")}
            </tbody>
        `;

        itineraryInfo.appendChild(table);
    });
});
